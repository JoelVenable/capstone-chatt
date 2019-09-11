/*
The Endpoint constructor function is designed to shorten all the common Fetch API calls
made to the local database.  It is initialized with a url endpoint and returns an object
with the following methods:
{
  create(newObject)
  getAll()
  getOne(id)
  replace(id, newObject)  (PUT)
  update(id, newObject)   (PATCH)
  delete(id)
}
*/

import decode from "jwt-decode";
import moment from "moment";

const baseURL = `/api`;
const LS_ITEM = "id_token";

const endpoints = {
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/register"
};

export class Endpoint<T, R> {
  //  ${process.env.PUBLIC_URL}

  private endpointURL: string;

  constructor(extension: string) {
    this.endpointURL = `${baseURL}/${extension}`;
  }

  private setToken = (idToken: string): void =>
    localStorage.setItem(LS_ITEM, idToken);
  private getToken = () => localStorage.getItem(LS_ITEM);
  logout = (): void => localStorage.removeItem(LS_ITEM);

  login = async (cred: IUserCredentials): Promise<IActionResult> => {
    const request = new Request(endpoints.LOGIN, {
      method: "POST",
      body: JSON.stringify(cred),
      headers: this.buildHeaders()
    });

    const result = await fetch(request)
      .then(this.checkStatus)
      .then(response => response.json())
      .then(res => {
        this.setToken(res.token);
        return Promise.resolve(res);
      });
    console.log(result);

    return { response: "SUCCESS" };
  };

  private checkStatus(response: Response): Response {
    if (response.status >= 200 && response.status < 300) return response;
    else {
      throw new Error(response.statusText);
    }
  }

  private isTokenExpired = (token: string): boolean => {
    try {
      const decoded = decode<IToken>(token);
      const expDate = moment(decoded.expiration);

      if (expDate.isBefore(Date.now())) return true;
      else return false;
    } catch (err) {
      return false;
    }
  };

  private loggedIn = (): boolean => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  buildHeaders = (): HeadersInit => {
    let requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    requestHeaders.set("Accept", "application/json");

    if (this.loggedIn()) {
      requestHeaders.set("credentials", "include");
      requestHeaders.set("Authorization", `Bearer ${this.getToken()}`);
    }
    return requestHeaders;
  };

  // fetch = (urlArgs: string = "", options: ResponseInit): Promise<R> => {
  //   const headers = this.buildHeaders(options);

  //   return fetch(`${this.endpointURL}/${urlArgs}`, headers)
  //     .then(this.checkStatus)
  //     .then(response => response.json());
  // };

  // getProfile = () => decode(this.getToken());

  // private endpointUrl: string;

  // constructor(urlExtension: string) {
  //   this.endpointUrl = `${this.baseURL}/${urlExtension}`;
  // }

  // post(url: string, obj: T): Promise<R> {
  //   const urlToSend = `${this.endpointUrl}/${url}`;
  //   console.log(urlToSend);
  //   return this.fetch(urlToSend, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(obj)
  //   }).then(response => response.json());
  // }
}

//  this.getAll = params => fetch(url + (params || ''))
//    .then(checkAndParseResponse)
//    .catch(catchError);

//  this.getOne = id => fetch(`${url}/${id}`)
//    .then(checkAndParseResponse)
//    .catch(catchError);

//  this.update = (id, object) => fetch(`${url}/${id}`, {
//    method: 'PATCH',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify(object),
//  })
//    .then(checkAndParseResponse)
//    .catch(catchError);

//  this.replace = (id, newObject) => fetch(`${url}/${id}`, {
//    method: 'PUT',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify(newObject),
//  })
//    .then(checkAndParseResponse)
//    .catch(catchError);

//  this.delete = id => fetch(`${url}/${id}`, {
//    method: 'DELETE',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//  })
//    .catch(catchError);
//}

//function checkAndParseResponse(response) {
//  if (response.status === 404) {
//    throw new Error('404 error.  Check your JSON file!');
//  } else return response.json();
//}

//function catchError(error) {
//  // eslint-disable-next-line
//  return console.log(error);
//}
