import { LiteralArrayExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre:String = "";
  apellido:String = "";
  cargo:String = "";
  salario:String = "";
  empleados:any;
  listaEmpleados:any = new Array();
  lista:boolean = false;
  propiedadesTabla:any = new Array("#","Nombre", "Apellidos", "Cargo", "Salario");
  
  
  
  constructor() {
      this.nombre;
      this.apellido;
      this.cargo;
      this.salario;   
   }

  ngOnInit(): void { 
    this.propiedadesTabla;
  }

  crearEmpleado(){
    //instancia objeto
    this.empleados = new EmpleadoComponent();
    
    //Vincular información del template con las propiedades del objeto
    this.empleados.nombre = this.nombre;
    this.empleados.apellido = this.apellido; 
    this.empleados.cargo = this.cargo; 
    this.empleados.salario = this.salario;

    //Añadir Objeto a Array
    this.listaEmpleados.push(this.empleados);
    console.log(this.listaEmpleados);
    this.lista = true;
    

    
    //Función de comprobación de campos
  }

  borrarEmpleado(){
    this.listaEmpleados.splice(0, 1);
    if(this.listaEmpleados.length == 0){
      this.lista = false;
    }
    console.log(this.listaEmpleados);
  }

  modificarEmpleado(){


  }

  ordenarEmpleadoSalario(){

    parseInt(this.listaEmpleados.salario);

    this.listaEmpleados.sort((o1:any, o2:any) => {
        if(o1.salario < o2.salario){
            return 1;
        } else if (o1.salario > o2.salario) {
            return -1;
        } else {
            return 0;
        }
    });
  }

  ordernarEmpleadoAlf(){
    this.listaEmpleados.sort((o1:any, o2:any) => {
      if(o1.nombre < o2.nombre){
          return -1;
      } else if (o1.salario > o2.salario) {
          return 1;
      } else {
          return 0;
      }
    });
  }


exceptionEmpleado(){

  for(let item of this.listaEmpleados){
    console.log(item);
    /*if(this.listaEmpleados){
      this.lista = true;
    }*/

    while(this.listaEmpleados.nombre != ""){
      this.lista = true;
    }
  }
}

}
