'use strict'
/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */

class Avion{
    constructor(nombre, capacidad, destino){
        this.nombre= nombre;
        this.capacidad= capacidad;
        this.destino= destino;
        this.listaPasajeros= [];
    };
    abordar(pasajero){
        if(this.listaPasajeros.length < this.capacidad){
            this.listaPasajeros.push(pasajero);
            console.log(`Pasajero ${pasajero} abordó en el avión ${this.nombre}`);
        } else {
            console.log('El avión llegó a su capacidad máxima. El pasajero NO abordó');
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto){
        this.nombreAeropuerto= nombreAeropuerto;
        this.listaDeAviones= [];
    }
    agregarAvion(avion){
        this.listaDeAviones.push(avion);
        console.log(`El avión ${avion.nombre} ingresó al aeropuerto`);
    }
    buscarAvion(nombreDeAvion){
        const avionEncontrado = this.listaDeAviones.find(avion => avion.nombre === nombreDeAvion);
        if (avionEncontrado) {
            console.log(`Información del avión ${nombreDeAvion}:`);
            console.log(`Capacidad: ${avionEncontrado.capacidad}`);
            console.log(`Destino: ${avionEncontrado.destino}`);
            console.log(`Pasajeros a bordo: ${avionEncontrado.listaPasajeros}`);
          } else {
            console.log(`No se encontró el avión ${nombreDeAvion} en el aeropuerto.`);
          }
    }
}

const aeropuerto1= new Aeropuerto('Aeropuerto Internacional');

const avion1= new Avion('JetSmart', 100, 'Buenos Aires');
const avion2= new Avion('Aerolineas Argentinas', 120, 'Tucumán');
const avion3= new Avion('FlyBondi', 90, 'Córdoba');

aeropuerto1.agregarAvion(avion1);
aeropuerto1.agregarAvion(avion2);
aeropuerto1.agregarAvion(avion3);

aeropuerto1.buscarAvion('JetSmart');
avion1.abordar('María');
avion1.abordar('Julian');
avion1.abordar('Sofía');