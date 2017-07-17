import Storage from '../helpers/storage';

export default class PomidoriClient {
  constructor() {
    this.baseUrl = 'http://localhost:4040/api';
    this.headers = new Headers();
    this.headers.append("Content-type", "application/json");
  }

  getRequestObject(bodyObject) {
    return {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(bodyObject),
    }
  }

  post(path, bodyObject) {
    const requestObject = this.getRequestObject(bodyObject);
    console.log(requestObject)

    const uri = `${this.baseUrl}${path}`;
    return fetch(uri, requestObject).then(res => res.json())
  }

  authenticatedPost(path, bodyObject) {
    const storage = new Storage();
    const token = storage.getToken();
    this.headers.append("Authorization", `JWT ${token}`);

    const requestObject = this.getRequestObject(bodyObject);

    const uri = `${this.baseUrl}${path}`;
    return fetch(uri, requestObject).then(res => res.json())
  }
}
