import { Component, Inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Route, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from '../../Models/Funcionarios';

@Component({
  selector: 'app-excluir',
  standalone: false,
  
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit {
 
inputData: any;
funcionario!: Funcionario

//construro pra injeção de dependencia 
 constructor(
  private funcionarioService : FuncionarioService , 
  private router : Router ,
@Inject(MAT_DIALOG_DATA) public data : any ,
private ref: MatDialogRef<ExcluirComponent>) { }
 
  ngOnInit(): void {
      this.inputData = this.data;
      
      this.funcionarioService.GetFuncionario(this.inputData.id).subscribe((data)=>{
        this.funcionario = data.dados;
      });
  }
  Excluir(){
    this.funcionarioService.ExcluirFuncionario(this.inputData.id).subscribe((data)=>{
      this.ref.close();
      window.location.reload();
    })
  }
  Cancelar(){
    this.ref.close();
  }

}
