
    
let lista = [];
function core (){
    let flag = true;
    function add (producto,precio){
     lista.push({
        producto,
        precio
     })
 }
const suma = 0;
function creadorDeArrayPrecios(){
    const ArrayPrecio = []
    for (let i = 0; i < lista.length;i++){
        ArrayPrecio.push(alumnos[i].precio)
    }
    return ArrayPrecio
}
function sumaDePrecios(suma,sumaDePrecios){
    suma+sumaDePrecios
}
 while(flag){
    let menu = Number(prompt("1-Agregar Valor\n 2-Total\n"))
    switch(menu){
        case 0: 
            return
        case 1:
            let producto = prompt("Agregar Producto")
            let precio = Number(prompt("Agregar Costo"))
            if(precio==0){
                alert("Ingresa un valor mayor a 0")
            }
            add(producto,precio)
            flag = confirm ("comtinuar operando?")
            break
        case 2:
            for( let i=0; i<lista.length;i++){
                console.log(lista[i].precio)
                console.log(lista[i]+suma)
                sumaDePrecios()
            } 
            if(lista,length<0)   
            flag = confirm ("comtinuar operando?")
            break
            }
    }      
}
core()