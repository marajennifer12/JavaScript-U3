//Operador ternario
const velocidad =98;
let Mensaje;
if (velocidad > 100) {
    Mensaje = "vas muy rapido";
} else {
    Mensaje = "vas bien mano"
}
console.log(Mensaje);

const Velocidad = 120;
const mensaje = Velocidad >100 ? 'Vas muy rápido' : 'Vas a buen ritmo';
console.log(mensaje);

//Ciclo for
for (let i = 0; i < 10; i++) {
    if(i==5) break //or continue
    console.log(i);
}

//Ciclo while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//Imprimir números pares
for (i=1; i<=100; i++) {
    if (i%2==0) {
        console.log(i);
    }
}

//Imprimir números primos
for (numero=1; numero<=100; numero++){
let contador=0;
let j=1;
while (j<=100) {
    if (numero%j==0) {
        contador = contador+1;
    }
    j=j+1;
    }
    if (contador==2) {
        console.log(numero);
    }
}