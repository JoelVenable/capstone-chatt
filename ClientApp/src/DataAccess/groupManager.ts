import { Endpoint } from "./Endpoint";

const endpoint = new Endpoint<IGroup, {}>("groups");

export const groupManager = {
  getAll: async (): Promise<IGroup[]> => {
    return endpoint.fetchList();
  },

  getOne: async (id: string): Promise<IGroup> => {
    return endpoint.fetch(`/${id}`);
  }
};
