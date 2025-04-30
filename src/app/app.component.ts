import { Component } from '@angular/core';

interface Entrada {
  titulo: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombre: string = "";
  apellidos: string = "";
  entradas: Entrada[];

  constructor(){
    this.entradas = [
      {titulo: "java experto"},
      {titulo: "php intermedio"},
      {titulo: "javaScript con proyecto"},
      {titulo: "c++ experto"},
      {titulo: "spring + angular experto"},
    ]
  }

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "usuario registrado con exito";
  }
}
