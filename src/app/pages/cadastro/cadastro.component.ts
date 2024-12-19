import { Component } from '@angular/core';
import { Funcionario } from '../../Models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  
  constructor(private funcionarioServicce : FuncionarioService, private router: Router) { 
  }
    btnAcao = "Cadastrar!"
    btnTitulo = "Cadastrar funcionario"
  
  createFuncionario(funcionario : Funcionario){
      this.funcionarioServicce.CreateFuncionario(funcionario).subscribe((data)=>{
          this.router.navigate(['/'])
      });
   }
}
