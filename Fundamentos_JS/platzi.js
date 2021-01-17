//1 Funciones

let nombre = 'Edwin',
    nombres= {
        nombre: 'Edwin',
        apellido: 'Cáceres',
        edad: 28,
        conocimientos: {
            idiomas: ['Español','Inglés','Francés'],
            programación: ['HTML','CSS','Javascript','Python']
        },
        nombre: 'Miguel',
        apellido: 'Díaz',
        edad: 32,
        conocimientos: {
            idiomas: ['Español','Portugues'],
            programación: ['.NET','JAVA','C#']
        },
        nombre: 'Romina',
        apellido: 'Valcarcel',
        edad: 20,
        conocimientos: {
            idiomas: ['Español','Inglés'],
            programación: ['HTML','CSS']
        },
        presentacion () {console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} y sé lo siguiente: ${this.conocimientos.programación}`)}
    }
    nombres_objeto = [
                {
                    nombre: 'Edwin',
                    apellido: 'Cáceres',
                    edad: 28,
                    conocimientos: {
                        idiomas: ['Español', 'Inglés', 'Francés'],
                        programación: ['HTML', 'CSS', 'Javascript', 'Python']
                    }
                },
                {
                    nombre: 'Miguel',
                    apellido: 'Díaz',
                    edad: 32,
                    conocimientos: {
                        idiomas: ['Español', 'Portugues'],
                        programación: ['.NET', 'JAVA', 'C#']
                    }
                },
                {
                    nombre: 'Romina',
                    apellido: 'Valcarcel',
                    edad: 20,
                    conocimientos: {
                        idiomas: ['Español', 'Inglés'],
                        programación: ['HTML', 'CSS']
                    },
                    presentacion() {console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} y sé lo siguiente: ${this.conocimientos.programación}`)}  
                }
                ]

                

    
// let yourName;

function myName(){
    nombre='Roberto'
    //Cambia el valor de la variable global
    console.log(`Èl nombre de tu variable es ${nombre}`)
}
function myNameLocalScope(name){
    name='Roberto'
    //NO cambia el valor de la variable Global
    console.log(`Èl nombre de tu variable es ${name}`)
}

            // myName()
            myNameLocalScope(nombre)

//Objetos

function printNameUpperCase(persona){
    console.log(persona.nombre.toUpperCase())
}

printNameUpperCase(nombres)
printNameUpperCase({nombre: 'Emilia'}) //Colocas un nuevo objeto con el atributo que usa la función


    //Desestrucuturando Objetos
    function printNameLowerCase(persona){
        // var nombre = persona.nombre
        var { nombre } = persona // El atributo persona se convierte en un objeto
        console.log(nombre.toLowerCase()) // Se usa la variable nombre
    }
        printNameLowerCase({nombre: 'Emilia'})

    function printNameAndAge (persona) {
        let {nombre} = persona,
            {edad} = persona;
        console.log(`Me llamo ${nombre} y mi edad es ${edad} años`)
    }
        printNameAndAge({nombre: 'Emilia',edad: 3})
        printNameAndAge(nombres)

        
// Programación orientada a objetos en JS

function Persona(nombre, apellido){
    this.nombre = nombre //This hace referencia a contexto de objeto que se crea en la función
    this.apellido = apellido
    this.altura = 1.66
    return console.log(this)
}
        // Los prototipos permiten agregar nuevos objetos los cuales se les asigna funciones
        Persona.prototype.saludar = function(){
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)  //This se refiere al objeto Persona
        }

        Persona.prototype.soyAlto= function(){
            this.altura >= 1.80 ? console.log(`Eres alto ${this.nombre}`) : console.log(`Eres chato ${this.nombre}`)
        }

        const EmiliaPersona = new Persona('Mermilia', 'Gordilia', 1.20)

// Arrow function and This

// Función constructora

function Usuario(nombre, apellido, edad, conocimientos){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.conocimientos=conocimientos

}

const nuevoUsuario = new Usuario('Emilia','Gordilia', 3, 
{
    idiomas: ['Español','Portugues'],
    programación: ['.NET','JAVA','C#']
}) // No me imprime ningún objeto ya que la función constructora requiere de la plabra new



class UsuarioClase { //No necesita atributos
    constructor (nombre, apellido, edad){
        this.nombre=nombre,
        this.apellido=apellido,
        this.edad=edad
    }
    presentarse(){
         return `Buenos días, me llamo ${this.nombre} y tengo ${this.edad} años`
        }
}

class Profesor extends UsuarioClase { //No necesita atributos
    constructor (nombre, apellido, edad,cursosTomados, calificacion){
			super(nombre, apellido, edad)
			this.cursosTomados= cursosTomados
			this.calificacion= calificacion
		}
}
const emilia = new UsuarioClase('Emilia','Gordilia', 3) // la palabra NEW crea nuevas instancias según los atributos que declaramos

const beto = new Profesor('Beto','Quiroga', 32, ['Javascript', 'DOM','React'],10)
// Persona.prototype.soyAltoArrowFunction => { return this.altura > 1.8} 
    // Las arrow function cambian el alcance de this a global

        //let Miguel = new Persona ('Miguel', 'Diaz') //'new' crea nuevos objetos dado un prototipo
        // let MiguelGlobal = Persona ('Miguel', 'Diaz') // Lo crea tomando el contexto de Windows para This

        class Shape {

            constructor (name, sides, sideLength) {
            this.name = name;
            this.sides = sides;
            this.sideLength = sideLength;
          }}
          
          // Write your code below here
              
          Shape.prototype.calcPerimeter= function(){console.log(parseInt(this.sides)*parseInt(this.sideLength))}
          
          const square = new Shape('square',4,5)
          
          console.log(square.calcPerimeter())
          
          const triangle = new Shape('triangle',4,3)
          console.log(triangle.calcPerimeter())