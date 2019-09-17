import { Endpoint } from "./Endpoint";

const endpoint = new Endpoint<IMessage, {}>("messages");

interface PutMessage {
  id: string
  text: string
}

export const messageManager = {
  getAll: async (id: string): Promise<IMessage[]> => {
    return endpoint.fetchList(`/${id}`);
  },
  post: async (newMessage: IMessage): Promise<IActionResult> => {
    return endpoint.post(newMessage);
  },
  getOne: async (id: string): Promise<IMessage | undefined> => {
    return endpoint.fetch(`/${id}`);
  },
  delete: async (id: string): Promise<IActionResult> => {
    return endpoint.delete(id);
  },
  put: async (newMessage: IMessage): Promise<IActionResult> => {
    return endpoint.put(newMessage, "");
  }
};
