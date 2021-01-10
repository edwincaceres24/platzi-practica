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
    }

    
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

        //let Miguel = new Persona ('Miguel', 'Diaz') //'new' crea nuevos objetos dado un prototipo
        // let MiguelGlobal = Persona ('Miguel', 'Diaz') // Lo crea tomando el contexto de Windows para This