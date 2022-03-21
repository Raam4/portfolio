import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from "firebase/storage";
import { url } from 'inspector';
import { environment } from 'src/environments/environment';
import { resourceLimits } from 'worker_threads';

const firebase = initializeApp(environment.firebaseConfig);
const storage = getStorage(firebase);

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  

  async uploadImg(name: string, imgBase64: any){
    try{
      const skillRef = ref(storage, 'skills/logos/' + name);
      const upTask =  await uploadString(skillRef, imgBase64, 'data_url');
      return await getDownloadURL(upTask.ref);
    }catch(err){
      console.log(err);
      return null;
    }
  }

  deleteImg(name: string){
    const imgRef = ref(storage, 'skills/logos/' + name);
    deleteObject(imgRef).then(() => {
      return 'Deleted';
    }).catch((error) => {
      return error;
    });
  }
}
