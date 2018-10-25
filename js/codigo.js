var marca1=10000;
var marca2=10000;
var marca3=10000;
var nombre1="";
var nombre2="";
var nombre3="";

function ordenar(marcatemp){
  if (marcatemp<marca1) {
    marca3=marca2;
    marca2=marca1;
    marca1=marcatemp;
    nombre3=nombre2;
    nombre2=nombre1;
    nombre1=nombretemp;

  }else if (marcatemp<marca2) {
    marca3=marca2;
    marca2=marcatemp;
    nombre3=nombre2,
    nombre2=nombretemp;

  }else if (marcatemp<marca3) {
    marca3=marcatemp;
    nombre3=nombretemp;
    }
  }

var numero=Number(1);
var nombretemp=(prompt('Introduce nombre del corredor ${numero}'));
var marcatemp=Number(prompt('Dime tu marca ${numero}'));

while (marcatemp>0) {
  ordenar(marcatemp);
  numero++;
nombretemp=prompt('Introduce nombre del corredor ${numero}'));
marcatemp=prompt('Dime tu marca ${numero}'));
}

console.log(nombre1,marca1,nombre2,marca2,nombre3,marca3);
