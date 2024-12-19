import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../../Models/Funcionarios';
import { Subscriber } from 'rxjs';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: false,
  
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
 
  funcionario? : Funcionario;
  id!: number;
  


 constructor(private funcionarioService : FuncionarioService , 
   private route: ActivatedRoute, private router : Router) {  }
 
  ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.funcionarioService.GetFuncionario(this.id).subscribe((data)=>{
         const dados = data.dados;
         dados.dataCriacao = new Date(dados.dataCriacao!).toLocaleDateString('pt-BR')
         dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR')
        
        this.funcionario = data.dados;
      })

  }
  InativaFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data)=>{
        this.router.navigate([''])
    })
  
  }
}



