import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CompanyService {
  constructor(private db: AngularFireDatabase) {}
  basePath = "uploads";
  uploadsRef: AngularFireList<any>;
  uploads: Observable<any[]>;
  // Executes the file uploading to firebase https://firebase.google.com/docs/storage/web/upload-files

  pushUpload(upload: any, id: string) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${upload.name}`)
      .put(upload);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        // upload in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        upload.progress = snap.bytesTransferred / snap.totalBytes * 100;
      },
      error => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.name;
        this.saveFileData(upload);
        return undefined;
      }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: any) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}
