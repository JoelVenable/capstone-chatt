import { Endpoint } from "./Endpoint";

const putViewModelEndpoint = new Endpoint<PutUser, {}>("users");
const getEndpoint = new Endpoint<IApplicationUser, {}>("users");

interface PutUser {
  firstName: string;
  lastName: string;
  handle: string;
}

export const userManager = {
  get: async (): Promise<IApplicationUser | undefined> =>
    getEndpoint.fetch("", {}),
  put: async (updatedUser: PutUser): Promise<IActionResult> => {
    return putViewModelEndpoint.put(updatedUser, "");
  }
};
