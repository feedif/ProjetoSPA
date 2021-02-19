import { Component, OnInit } from '@angular/core';
import { produtos } from '../model/produtos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela: boolean = false;
  exibeResultado: boolean = false;

  listaProdutos: produtos[] =[
    {nome: 'Boné', valor: 15, quantidade: 2},
    {nome: 'Camisa', valor: 30, quantidade: 10},
    {nome: 'Calça', valor: 50, quantidade: 5},
    {nome: 'Cueca', valor: 10, quantidade: 20},
    {nome: 'Meia', valor: 6, quantidade: 50},
    {nome: 'Sapato', valor: 60, quantidade: 4}
  ];

  displayedColumns: string[] = ['Nome', 'Valor', 'Quantidade'];

  ngOnInit(): void {
    this.valor = 6;
  }

  mudarValor() {
    this.valor++;
  }

  resetarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

  exibirResultado(){
    this.exibeResultado = true;
  }
}
