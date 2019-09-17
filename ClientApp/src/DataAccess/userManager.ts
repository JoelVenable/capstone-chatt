import { Endpoint } from "./Endpoint";

const endpoint = new Endpoint<PutUser, {}>("users");

interface PutUser {
  firstName: string;
  lastName: string;
  handle: string;
}

export const userManager = {
  put: async (updatedUser: PutUser): Promise<IActionResult> => {
    return endpoint.put(updatedUser, "");
  }
};
