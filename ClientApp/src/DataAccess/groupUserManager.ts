import { Endpoint } from "./Endpoint";

const endpoint = new Endpoint<IGroupUser, {}>("groupUsers");

export const groupUserManager = {
  post: async (groupUser: IGroupUser): Promise<IActionResult> => {
    return endpoint.post(groupUser);
  },

  getOne: async (id: string): Promise<IGroupUser | undefined> => {
    return endpoint.fetch(`/${id}`);
  }
};
