import { Component, OnInit } from '@angular/core';
import { PutdataService } from '../putdata.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {

  glob_id = null;
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

  }

  deleteInfo(id) {
    this.stud_info.splice(id, 1);
    this._data.addInfo(this.stud_info);
  }

  editInfo(id) {

    this.id=id;
    this.fname = this.stud_info[id].firstname;
    this.lname = this.stud_info[id].lastname;
    this.dob = this.stud_info[id].dob;
    this.email = this.stud_info[id].email;
    this.phone = this.stud_info[id].phone;
    this.fac = this.stud_info[id].faculty;
  }

  updateInfo(id) {
    this.stud_info[id].firstname = this.fname;
    this.stud_info[id].lastname = this.lname;
    this.stud_info[id].dob = this.dob;
    this.stud_info[id].email = this.email;
    this.stud_info[id].phone = this.phone;
    this.stud_info[id].faculty = this.fac;

    id = null;

    this.fname = '';
    this.lname = '';
    this.dob = '';
    this.email = '';
    this.phone = null;
    
  }
}
