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

const sessionVars = {
  TOKEN: "id_token",
  EXPIRATION: "id_expiration"
};

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

  private setToken = (response: ITokenEncoded): void => {
    localStorage.setItem(sessionVars.TOKEN, response.token);
    localStorage.setItem(sessionVars.EXPIRATION, response.expiration);
  };
  private getToken = () => localStorage.getItem(sessionVars.TOKEN);
  logout = (): void => localStorage.removeItem(sessionVars.TOKEN);

  loginOrRegister = async (
    cred: IUserCredentials | IUserRegistration
  ): Promise<IActionResult> => {
    const request = new Request(endpoints.LOGIN, {
      method: "POST",
      body: JSON.stringify(cred),
      headers: this.buildHeaders()
    });
    try {
      await fetch(request)
        .then(this.checkStatus)
        .then(response => response.json())
        .then(res => {
          this.setToken(res);
        });
    } catch (e) {
      console.log(e);
      return { response: "FAILURE" };
    }
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
      const decoded = decode<ITokenEncoded>(token);

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
    requestHeaders.append("Content-Type", "application/json");
    requestHeaders.append("Accept", "application/json");

    if (this.loggedIn()) {
      requestHeaders.append("credentials", "include");
      requestHeaders.append("Authorization", `Bearer ${this.getToken()}`);
    }
    return requestHeaders;
  };

  fetch = async (
    urlArgs?: string,
    options?: ResponseInit
  ): Promise<T | undefined> => {
    const url = urlArgs ? this.endpointURL + urlArgs : this.endpointURL;

    const request = new Request(url, {
      method: "GET",
      headers: this.buildHeaders(),
      ...options
    });
    try {
      return fetch(request)
        .then(this.checkStatus)
        .then(r => r.json())
        .then(r => r as T);
    } catch (e) {
      return undefined;
    }
  };

  fetchList = async (
    urlArgs?: string,
    options?: ResponseInit
  ): Promise<T[]> => {
    const url = urlArgs ? this.endpointURL + urlArgs : this.endpointURL;
    console.log(url);
    const request = new Request(url, {
      method: "GET",
      headers: this.buildHeaders(),
      ...options
    });
    try {
      const data = await fetch(request)
        .then(this.checkStatus)
        .then(r => r.json())
        .then(r => r.map((i: unknown) => i as T));
      return data;
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  post = async (obj: T, urlArgs: string = ""): Promise<IActionResult> => {
    const url = this.endpointURL + urlArgs;
    const request = new Request(url, {
      method: "POST",
      headers: this.buildHeaders(),
      body: JSON.stringify(obj)
    });
    try {
      await fetch(request)
        .then(this.checkStatus)
        .then(r => r.json());
      return { response: "SUCCESS" };
    } catch (e) {
      console.log(e);
      return { response: "FAILURE" };
    }
  };

  patch = async (obj: T, urlArgs: string = ""): Promise<IActionResult> => {
    const url = this.endpointURL + urlArgs;
    const request = new Request(url, {
      method: "PATCH",
      headers: this.buildHeaders(),
      body: JSON.stringify(obj)
    });
    try {
      await fetch(request)
        .then(this.checkStatus)
        .then(r => r.json());
      return { response: "SUCCESS" };
    } catch (e) {
      console.log(e);
      return { response: "FAILURE" };
    }
  };

  put = async (obj: T, urlArgs: string): Promise<IActionResult> => {
    const url = this.endpointURL + urlArgs;
    const request = new Request(url, {
      method: "PUT",
      headers: this.buildHeaders(),
      body: JSON.stringify(obj)
    });

    try {
      await fetch(request).then(this.checkStatus);
      return { response: "SUCCESS" };
    } catch (e) {
      console.log(e);
      return { response: "FAILURE" };
    }
  };

  delete = async (urlArgs: string): Promise<IActionResult> => {
    const url = this.endpointURL + urlArgs;
    const request = new Request(url, {
      method: "DELETE",
      headers: this.buildHeaders()
    });

    try {
      await fetch(request).then(this.checkStatus);
      return { response: "SUCCESS" };
    } catch (e) {
      console.log(e);
      return { response: "FAILURE" };
    }
  };

  getProfile = (): Token => {
    const token = this.getToken();
    if (token) return decode(token) as ITokenPayload;
  };
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
