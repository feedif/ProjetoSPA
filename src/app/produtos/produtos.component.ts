import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 0;
  
}
