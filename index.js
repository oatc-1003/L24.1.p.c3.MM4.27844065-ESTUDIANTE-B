// ESTUDIANTE-B
// Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
// Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
// retorne los nombres de los estudiantes aprobados.
// La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
// Función: nombresDeAprobados.
// Parámetros: estudiantes (array de objetos estudiante).
// Retorno: array de strings, con los nombres de los estudiantes aprobados. 


import Estudiante from "./clases/estudiantes.js";
import GrupoEstudiantes from "./clases/grupoEstudiantes.js";
import datos from "./datos.js";

let _grupoEstudiantes=new GrupoEstudiantes()
let $salida=document.getElementById("salida")
let $filtrarBtn=document.getElementById("filtrar")

datos.forEach(dato=>{
    let _nuevoEstudiante=new Estudiante(dato)
    _grupoEstudiantes.agregarEstudiante(_nuevoEstudiante)

})

$salida.innerHTML=`
    <h2>Los estudiantes son:</h2>
    <br>
    <ul>
        ${_grupoEstudiantes.estudiantes.map(estudiante=>{
            return `<li>${estudiante.nombre} - ${estudiante.semestre} semestre </li>`
        })}
    </ul>

`

let nombresDeAprobados=(estudiantes)=>{
    const NOTA_MINIMA_APROBADO=10
    let aprobados= estudiantes.filter(estudiante=>estudiante.nota>=NOTA_MINIMA_APROBADO)
    return [...aprobados].map(estudiante=>estudiante._nombre)

}

$filtrarBtn.addEventListener("click",e=>{
    let _estudiantesAprobados=nombresDeAprobados(_grupoEstudiantes.estudiantes)

    $salida.innerHTML=`
    <h2>Los estudiantes aprobados son</h2>
    <br>
    <ul>
        ${_estudiantesAprobados.map(nombre=>{
            return `<li>${nombre}</li>`
        })}
    </ul>
    `



})