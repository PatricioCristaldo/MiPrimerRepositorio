let process = require("process")
let appDeTareas = require("./funcionesDeTareas")

let accion = process.argv

/*console.log(appDeTareas.listar);*/

switch (accion[2]) {
 case "listar":
  console.log("Listado de tareas");
  console.log("-----------------");
        appDeTareas.listarFor();
        break;
        case "crear":
            let titulo = argv[3]
            let estado = argv[4]
            console.log(appDeTareas.crearTarea(titulo,estado));
            break;
            case undefined:
              console.log("Atención - Tienes que pasar una acción \nLas acciones disponibles son: listar ");
              console.log("-------------------------------------");
              break;
                default:
        console.log("No entiendo qué quieres hacer");
        break;
}