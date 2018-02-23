import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PutdataService {

  private infos = new BehaviorSubject<any>([
    {
      "firstname": "Dhruv",
      "lastname": "Desai",
      "dob": "24/08/1996",
      "email":"dhruv.desaiabc@gmail.com",
      "phone": "9067445555",
      "faculty": "Sir Zoro"
    },
    {
      "firstname": "Dhruv",
      "lastname": "Desai",
      "dob": "24/08/1996",
      "email":"dhruv.desaiabc@gmail.com",
      "phone": "9067443322",
      "faculty": "Patel Sir"
    },
  ]
  );
    
  std_info = this.infos.asObservable();
  len: number;
  constructor() { }

  addInfo(info) {
    this.infos.next(info);
  }

}

