import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecionar-sistema',
  templateUrl: './selecionar-sistema.component.html',
  styleUrls: ['./selecionar-sistema.component.scss']
})
export class SelecionarSistemaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click(){
    localStorage.setItem("isTemplate", "true");
    window.location.replace("/");
  }

  // logoff(){
  //   localStorage.clear();
  //   window.location.replace("/login");
  // }

}
