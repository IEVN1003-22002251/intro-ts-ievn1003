
interface Alumno{
    nombre:string,
    edad:number,
    activo:boolean,
    email?:string, //El signo hace que sea opcional
    nota:number | string 
}

const alumno: Alumno={
    nombre:"Juan",
    edad:23,
    activo:true,
    email:"Juan@gmail.com",
    nota:9.5
    }

    console.table(alumno)

    let mascotas:string[]=['perro', 'gato', 'loro']
    mascotas.push('tortuga')
    console.log(mascotas)
    mascotas[1]='pez'
    console.log(mascotas)

    let idades:(number|string)[]=[23,45,67,'89']
    idades.push(90)
    idades.push('100')
    console.log(idades)

    