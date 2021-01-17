const   container = document.getElementById("container"),
        form=document.getElementById("mainForm"),
        containerUser=document.getElementById("containerUser"),
        formUser=document.getElementById("mainFormUser");


class Usuario {
    constructor(nombre,apellido,correo,activo){
        this.nombre=nombre
        this.apellido=apellido
        this.correo=correo
        this.activo=activo
    }
    presentarse(){
        return `Hola, soy ${this.nombre} y mi correo es: ${this.correo}`
    }
    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }
    getCorreo(){
        return this.correo
    }
    setApellidos(nuevosApellido){
        this.apellidos=nuevosApellido
    }

}

class Profesor extends Usuario{
    constructor (nombre, apellido, correo,activo, cursosDictados, calificacion){
        super(nombre, apellido, correo,activo)
        this.cursosDictados= cursosDictados
        this.calificacion= calificacion
    }
    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }
    getCorreo(){
        return this.correo
    }
    getActivo(){
        return this.activo
    }
    getCursosDictados(){
        return this.cursosDictados
    }
}
class Alumno extends Usuario{
    constructor (nombre, apellido, edad,cursosTomados, calificacion){
        super(nombre, apellido, edad)
        this.cursosTomados= cursosTomados
        this.cursosTomados= calificacion
    }
}




class Curso {
    constructor(nombre,poster,clases){
        this.nombre = nombre
        this.poster = poster
        this.clases = clases
    }

    getNombre(){
        return this.nombre
    }
    getPoster(){
        return this.poster
    }
    getClases(){
        return this.clases
    }
    getInscritos(){
        return this.inscritos
    }
    setNombre(nombre){
        this.nombre=nombre
    }
    setPoster(poster){
        this.nombre=poster
    }
    setClases(clases){
        this.nombre=clases
    }
    setInscritos(inscritos){
        this.nombre=inscritos
    }
}


// Cursos creados manualmente
const input= new Curso ("Python","https://knityou.pe/wp-content/uploads/2020/09/chompac.png",10);
const input2th= new Curso ("Javascript DOM","https://knityou.pe/wp-content/uploads/2020/09/chompac.png",21);
const input3th= new Curso ("Html y CSS","https://knityou.pe/wp-content/uploads/2020/09/chompac.png",33);

// Cursos creados dinámicamente por formulario

form.addEventListener("submit", e => {
    e.preventDefault() 
    // Identifica los objetos
    const target = e.target
    // Asigna una variable
    const nuevoCurso= new Curso(target.Nombre.value,target.Poster.value,target.Clase.value)
    //Obtiene los atributos correctos y se instancia
    crearCurso(nuevoCurso)
    // Crea una nueva instancia según los datos dinámicos
    console.log(target.Nombre.value)
    console.log(target.Poster.value)
    console.log(target.Clase.value)
})

formUser.addEventListener("submit", e =>{
    e.preventDefault()
    const target = e.target
    // console.log(e.target.textContent)
    const nuevoUsuario = new Profesor(target.Nombre.value,target.Apellido.value,target.Correo.value,target.Activo.value,target.cursosDictados.value)
    crearUsuario(nuevoUsuario)
})

//Función para hacerlo dinámico


function crearCurso(curso){
    const child =document.createElement("div")
    child.style.display="grid";
    child.innerHTML= `
    <img src="${curso.getPoster()}" style="max-height: 170px; ">
    <h2>${curso.getNombre()}</h2>
    <h3>${curso.getClases()}</h3>
    `
    container.appendChild(child)
}

function crearUsuario(usuario){
    const childUser = document.createElement("div.user-container")
    childUser.classList.add("container-user")
    childUser.innerHTML=` 
    <h5>Usuario ${usuario.getNombre()} ${usuario.getApellido()}</h5>
    <ul>
        <li>Correo: ${usuario.getCorreo()}</li>
        <li>Estado: ${usuario.getActivo()}</li>
        <li>Cursos: ${usuario.getCursosDictados()}</li>
            <ul>
                <li>Ja</li>
                <li>Je</li>
            </ul>

    </ul>
    `
    containerUser.appendChild(childUser)

}

crearCurso(input)
crearCurso(input2th)
crearCurso(input3th)
