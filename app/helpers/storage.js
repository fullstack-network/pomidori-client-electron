import electron from 'electron';
import fs from 'fs';
import path from 'path';


export default class Storage {
  constructor() {
    const app = electron.app || (electron.remote && electron.remote.app);

    if (app) {
      this.path = app.getPath('userData');
    } else {
      this.path = '/tmp/storage';
    }
  }

  getFilePath() {
    return path.join(this.path, 'authToken');
  }

  storeToken(token) {
    const filePath = this.getFilePath();

    fs.writeFile(filePath, token, (err) => {
      if (err) {
        console.log("Had an error writing to the file")
      }
    });
  }

  getToken() {
    const filePath = this.getFilePath();
    return fs.readFileSync(filePath, 'utf-8')
  }
}
