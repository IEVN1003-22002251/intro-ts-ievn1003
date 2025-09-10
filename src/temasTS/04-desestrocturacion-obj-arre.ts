
//Separacion de un obj o valores de un arreglo

interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor: Reproductor ={
    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        autor:'Ed Sheran',
        anio:2015
    }
}

console.log('El volumen actual es de:', reproductor.volumen);
console.log('El segundo actual es de:', reproductor.segundo);
console.log('La cancion actual es:', reproductor.cancion);
console.log('El autor es:', reproductor.detalles.autor);
console.log('El año es:', reproductor.detalles.anio);

//Desestructuración de objetos

const {volumen,segundo,cancion,detalles}=reproductor
const {autor,anio}=detalles
console.log('El volumen actual es de:', volumen);
console.log('El segundo actual es:', segundo);
console.log('La cancion es:', cancion);
console.log('El autor es:', autor);
console.log('El año es:', anio);

const dbz:string[]=['Goku','Vegeta', 'Trunks']

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

//Desestructuración de arreglos
const [p1,p2,p3]=dbz
console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);