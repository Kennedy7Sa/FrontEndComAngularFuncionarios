import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from '../../Models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  standalone: false,
  
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Funcionario>;
  @Input() btnAcao! : string;
  @Input() btnTitulo! : string;
  @Input() dadosFuncionario : Funcionario | null = null;

funcionarioForm!: FormGroup;
constructor() {}
ngOnInit(): void {

  console.log(this.dadosFuncionario)


    this.funcionarioForm = new FormGroup({
      id:new FormControl(this.dadosFuncionario? this.dadosFuncionario.id : 0),
      nome: new FormControl(this.dadosFuncionario? this.dadosFuncionario.nome :'',[Validators.required]),
      sobrenome: new  FormControl(this.dadosFuncionario? this.dadosFuncionario.sobrenome :'',[Validators.required]),
      departamento: new FormControl(this.dadosFuncionario? this.dadosFuncionario.departamento:'',[Validators.required]),
      turno:new FormControl(this.dadosFuncionario? this.dadosFuncionario.turno:'',[Validators.required]),
      ativo:new FormControl(this.dadosFuncionario? this.dadosFuncionario.ativo: true),
      dataCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date)

      
    });
}

submit(){
  console.log(this.funcionarioForm.value)
  this.onSubmit.emit(this.funcionarioForm.value)
}
}
