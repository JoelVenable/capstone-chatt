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
    return state;
  };

  const [status, setStatus] = React.useReducer(reducer, {
    isAuthenticated: false,
    authResolving: true,
    userEmail: undefined
  });

  React.useEffect(() => {
    //  resolve auth
  }, []);

  const saveToken = (token: JsonWebKey): void =>
    localStorage.setItem("token", decode(JSON.stringify(token)));

  const actions = React.useMemo<IAuthActions>(
    () => ({
      signIn: async cred => {
        let endpoint = new Endpoint<any, any>("");

        const response = await endpoint.login(cred);
        // try {
        //   const loginToken = await auth.login(cred);
        //   console.log(loginToken);
        //   const parsedToken = JSON.stringify(loginToken);
        //   console.log(parsedToken);
        //   //saveToken(loginToken);
        // } catch (e) {
        //   console.log(e);
        // }

        return response;
      },
      signUp: async cred => {
        return { response: "FAILURE" } as IActionResult;
      },
      signOut: async () => {
        return { response: "FAILURE" } as IActionResult;
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
