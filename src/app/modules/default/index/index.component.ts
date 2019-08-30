import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let _isAutenticado = localStorage.getItem("isAutenticado");

    if (_isAutenticado == null || _isAutenticado == "false")
    {
        location.replace("/login");
    }

  }

}
