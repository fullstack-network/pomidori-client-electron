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

  storeToken(token) {
    const filePath = path.join(this.path, 'authToken');
    console.log(filePath);

    fs.writeFile(filePath, token, (err) => {
      if (err) {
        console.log("Had an error writing to the file")
      }
    });
  }
}
