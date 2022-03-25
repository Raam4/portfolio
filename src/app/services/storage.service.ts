import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString, getDownloadURL, deleteObject, StorageReference } from "firebase/storage";
import { environment } from 'src/environments/environment';

const firebase = initializeApp(environment.firebaseConfig);
const storage = getStorage(firebase);

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  

  async upImg(name: any, imgBase64: any, table: any){
    let imgref: StorageReference;
    switch(table){
      case 1: imgref = ref(storage, 'person/profilePic'); break;
      case 2: imgref = ref(storage, 'experience/' + name); break;
      case 3: imgref = ref(storage, 'project/' + name); break;
      case 4: imgref = ref(storage, 'skills/logos/' + name); break;
      default: imgref = ref(storage); break;
    }
    try{
      const upTask =  await uploadString(imgref, imgBase64, 'data_url');
      return await getDownloadURL(upTask.ref);
    }catch(err){
      console.log(err);
      return null;
    }
  }

  delImgSkill(name: string){
    const imgRef = ref(storage, 'skills/logos/' + name);
    deleteObject(imgRef).then(() => {
      return 'Deleted';
    }).catch((error) => {
      return error;
    });
  }
}
