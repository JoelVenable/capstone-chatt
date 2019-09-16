import { Endpoint } from "./Endpoint";

const endpoint = new Endpoint<IGroup, {}>("groups");

export const groupManager = {
  getAll: async (): Promise<IGroup[]> => {
    return endpoint.fetchList("/myGroups");
  },
  getOthers: async (): Promise<IGroup[]> => {
    return endpoint.fetchList("/othergroups");
  },
  post: async (newGroup: IGroup): Promise<IActionResult> => {
    return endpoint.post(newGroup);
  },
  getOne: async (id: string): Promise<IGroup | undefined> => {
    return endpoint.fetch(`/${id}`);
  }
};
