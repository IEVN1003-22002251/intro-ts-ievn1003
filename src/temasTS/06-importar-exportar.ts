import { type Producto,calcularISV2 } from "./05-desestructuracion-funciones";

const carrito: Producto[] =[
    {nombre: 'Iphone 14', precio: 1500},
    {nombre: 'Ipad pro', precio: 1200},
    {nombre: 'Mackbook pro', precio: 3000}
];

const[total,isv]=calcularISV2(carrito);
console.log('Total:',total)
console.log('ISV:', isv);
