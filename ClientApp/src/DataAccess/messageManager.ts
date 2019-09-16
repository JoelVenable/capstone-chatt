import { Endpoint } from "./Endpoint";

const endpoint = new Endpoint<IMessage, {}>("messages");

export const messageManager = {
  getAll: async (): Promise<IMessage[]> => {
    return endpoint.fetchList("");
  },
  post: async (newGroup: IMessage): Promise<IActionResult> => {
    return endpoint.post(newGroup);
  },
  getOne: async (id: string): Promise<IMessage | undefined> => {
    return endpoint.fetch(`/${id}`);
  },
  delete: async (id: string): Promise<IActionResult> => {
    return endpoint.delete(id);
  }
};
