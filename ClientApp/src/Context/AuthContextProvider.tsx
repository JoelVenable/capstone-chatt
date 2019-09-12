import * as React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../DataAccess/Auth";
import decode from "jwt-decode";
import { Endpoint } from "../DataAccess/Endpoint";

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
}

const AuthContextProvider: React.FC<Props> = ({ children }: Props) => {
  const reducer: React.Reducer<IAuthStatus, IAction> = (state, actions) => {
    switch (actions.type) {
      case "SIGN_IN":
        return {
          ...state,
          isAuthenticated: true,
          userEmail: actions.email
        };
      case "RESOLVE_LOGGED_IN":
        return {
          ...state,
          isAuthenticated: true,
          userEmail: actions.email
        };
      case "RESOLVE_NOT_LOGGED_IN":
        return {
          ...state,
          isAuthenticated: false,
          userEmail: undefined
        };

      case "SIGN_OUT":
        return {
          ...state,
          isAuthenticated: false,
          userEmail: undefined
        };
      default:
        throw new Error("Unhandled reducer action in Auth Context");
    }
  };

  const [status, setStatus] = React.useReducer(reducer, {
    isAuthenticated: false,
    authResolving: true,
    userEmail: undefined
  });

  React.useEffect(() => {
    //  resolve auth
    const endpoint = new Endpoint("");
    const profile = endpoint.getProfile();
    if (profile) {
      setStatus({ type: "RESOLVE_LOGGED_IN", email: profile.email });
    } else setStatus({ type: "RESOLVE_NOT_LOGGED_IN" });
  }, []);

  const actions = React.useMemo<IAuthActions>(
    () => ({
      signIn: async (cred): Promise<IActionResult> => {
        let endpoint = new Endpoint<any, any>("");

        const { response } = await endpoint.loginOrRegister(cred);

        if (response === "SUCCESS")
          setStatus({ type: "SIGN_IN", email: cred.username });
        return { response };
      },
      signUp: async cred => {
        let endpoint = new Endpoint<any, any>("");

        let { response } = await endpoint.loginOrRegister(cred);

        if (response === "SUCCESS") {
          const signInCredentials: IUserCredentials = {
            username: cred.email,
            password: cred.password
          };
          const signInResponse = await endpoint.loginOrRegister(
            signInCredentials
          );
          if (signInResponse.response === "SUCCESS") {
            setStatus({ type: "SIGN_IN", email: cred.email });
          }
        }
        return { response: "FAILURE" } as IActionResult;
      },
      signOut: async () => {
        let endpoint = new Endpoint("");
        endpoint.logout();
        setStatus({ type: "SIGN_OUT" });
        return { response: "SUCCESS" } as IActionResult;
      },
      changePassword: async (old, newp) => {
        return { response: "FAILURE" } as IActionResult;
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ status, actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
