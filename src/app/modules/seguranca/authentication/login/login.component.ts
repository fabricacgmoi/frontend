import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() onLogon = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  click(){
    localStorage.setItem("isTemplate", "false");
    localStorage.setItem("isAutenticado", "true");
    window.location.replace("/selecionar-sistema");
  }

}
