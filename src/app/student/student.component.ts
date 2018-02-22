import { Component, OnInit } from '@angular/core';
import { PutdataService } from '../putdata.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {

  id = null;
  fname: string;
  lname: string;
  dob: string;
  email: string;
  phone: number;
  faculty = ["Sir One","Sir Two","Sir Three","Sir Four"];
  fac: string;

  stud_info = [];
  edit_info = [];
  
  constructor(private _data: PutdataService) { }

  ngOnInit() {
    this._data.std_info.subscribe(res => this.stud_info = res); 
    this._data.addInfo(this.stud_info);
  }

  addStdInfo() {
    this.stud_info.push(
      {
        "firstname": this.fname,
        "lastname": this.lname,
        "dob": this.dob,
        "email":this.email,
        "phone": this.phone,
        "faculty": this.fac
      }
    )

    this.fname = '';
    this.lname = '';
    this.dob = '';
    this.email = '';
    this.phone = null;

    this._data.addInfo(this.stud_info);
  }

  deleteInfo(id) {
    this.stud_info.splice(id, 1);
    this._data.addInfo(this.stud_info);
  }

  editInfo(id) {
    this.id=id
    this._data.std_info.subscribe(res => this.edit_info = res);
  }
}
