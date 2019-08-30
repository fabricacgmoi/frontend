import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho-suframa',
  templateUrl: './cabecalho-suframa.component.html',
  styleUrls: ['./cabecalho-suframa.component.scss']
})
export class CabecalhoSuframaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logoff(){
    localStorage.clear();
    location.replace("/login");
  }

}
