import * as React from "react";

export const AuthContext: React.Context<IAuthContext> = React.createContext({
  status: {
    isAuthenticated: false,
    authResolving: true,
    userEmail: undefined,
    userId: undefined
  },
  actions: {
    signIn: async cred => {
      return { response: "FAILURE" } as IActionResult;
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
  }
} as IAuthContext);
