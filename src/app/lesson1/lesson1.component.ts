import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  public newLogin = '';
  public newPassword = '';
  public newEmail = '';
  public arr = [] as any;
  public obj = {};
  public added = true;
  public editStatus = false;
  public editIndex!: number;
  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.obj = { login: this.newLogin, password: this.newPassword, email: this.newEmail }
    this.arr.push(this.obj);
    this.newLogin = '';
    this.newEmail = '';
    this.newPassword = '';
  }
  deleteUser(index: number): void {
    this.arr.splice(index, 1)

  }
  editUser(index: number): void {
    this.newLogin = this.arr[index].login;
    this.newPassword = this.arr[index].password;
    this.newEmail = this.arr[index].email;
    this.editIndex = index;
    this.added = false;
  }
  saveEditUser(): void {
    this.arr[this.editIndex].login = this.newLogin;
    this.arr[this.editIndex].password = this.newPassword;
    this.arr[this.editIndex].email = this.newEmail;
    this.newLogin = '';
    this.newEmail = '';
    this.newPassword = '';
    this.added = true;
  }
}
