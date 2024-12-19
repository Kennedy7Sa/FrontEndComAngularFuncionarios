import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../Models/Funcionarios';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  funcionarios: Funcionario[] = [];
  funcionarioGeral: Funcionario[]=[]; 

  colunas = ['Situacao','Nome','Sobrenome','Departamento','Ações','Excluir'] 


  constructor(private funcionarioService: FuncionarioService , public dialog: MatDialog){}
    ngOnInit(): void {
        this.funcionarioService.GetFuncionarios().subscribe(data =>{
         const dados = data.dados;
         dados.map((item)=>{
        item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR')
        item.dataDeAlteracao= new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
        })
         this.funcionarios = data.dados;
         this.funcionarioGeral = data.dados;
        });
    }
    search(event:Event){
      const target = event.target as HTMLInputElement;
      const value = target.value.toLowerCase();
      
      this.funcionarios = this.funcionarioGeral.filter(funcionario =>{
        return funcionario.nome.toLowerCase().includes(value);
      })
    }

    
    OpenDialog(id : number){
      this.dialog.open(ExcluirComponent, {
        width: '450px',
        height: '450px',
        data:{
          id:id
        }
      });
    }




}
