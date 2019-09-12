
// const login = async (cred: IUserCredentials) => {
//   return myFetch(endpoints.LOGIN, {
//     method: 'POST',
//     body: JSON.stringify(cred)
//   }).then(res => {
//     setToken(res as string)
//   })
// }

export const auth = {
 
};





// export class Endpoint<T, R> {
//   //  ${process.env.PUBLIC_URL}
//   private baseURL = ``;

//   private endpointUrl: string;

//   constructor(urlExtension: string) {
//     this.endpointUrl = `${this.baseURL}/${urlExtension}`;
//   }

//   post(url: string, obj: T): Promise<R> {
//     const urlToSend = `${this.endpointUrl}/${url}`;
//     console.log(urlToSend);
//     return fetch(urlToSend, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(obj)
//     }).then(response => response.json());
//   }
// }