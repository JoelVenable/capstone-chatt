import { Endpoint } from "./Endpoint";

const endpoint = new Endpoint<IGroup, {}>("groups");

export const groupManager = {
  getAll: async (): Promise<IGroup[]> => {
    return endpoint.fetchList("/myGroups");
  },

  getOne: async (id: string): Promise<IGroup | undefined> => {
    return endpoint.fetch(`/${id}`);
  }
};
