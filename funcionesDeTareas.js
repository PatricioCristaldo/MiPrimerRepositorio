let fs = require("fs")
let tareas = require("./tareas.json")
let guardarJson = (dato) => fs.writeFileSync("./tareas.json",JSON.stringify(dato,null,2),"utf-8")

module.exports = {
    listar : tareas,
    listarFor : () => {
for (let i = 0; i < tareas.length; i++) {
    console.log(`${i+1}. ${tareas[i].titulo} - ${tareas[i].estado}`); 
} },
    crearTarea : (titulo,estado) =>{
 let tarea = {
     titulo,
     estado
 }
 tareas.push(tarea)
 guardarJson(tareas)
 return tareas
    }
}
