import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 
  //Url base
  url ="http://localhost/api/php";

  //Vector cursos
  vetor:Curso[];

  //Constructor
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  //Cadastro
  cadastro():void{
    alert("Cadastro");
  }

  //Seleção
  selecao():void{
    alert("Seleção");
  }

  //Alterar
  alterar():void{
    alert("Alterar");
  }

  //Remover
  remover():void{
    alert("Remover");
}

}
