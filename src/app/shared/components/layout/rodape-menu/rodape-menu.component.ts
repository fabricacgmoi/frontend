import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape-menu',
  templateUrl: './rodape-menu.component.html',
  styleUrls: ['./rodape-menu.component.scss']
})
export class RodapeMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logoff(){
    localStorage.clear();
    location.replace("/login");
  }

}
