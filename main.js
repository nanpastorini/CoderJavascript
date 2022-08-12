class Comic{
	constructor(id,nombre,stock,precio){
		this.id = id;
		this.nombre=nombre;
		this.stock=stock;
		this.precio=precio;
	}
}


let DeathNote = new Comic (3,"DeathNote",5,300);
let SakuraCardCaptor = new Comic (2,"Sakura Card Captor",20,400);
let onePiece = new Comic (1, "One Piece", 10 , 500);

let comics = [DeathNote, SakuraCardCaptor, onePiece];
let carrito = [];

const mostrarComics = ()=>{ //variable que es igual a una fn.
	let mensaje = "Elije el comic a comprar"
	comics.forEach(tomo =>{ //el for each (variable tomo) en cada vuelta hace algo, da tantas vueltas como elementos haya. 
		//tomo es cada tipo de comic que esta en el array
		//` permite poner strings y variables
		mensaje = mensaje + `   
			Opción ${(tomo.id)} : ${(tomo.nombre)} -- Stock: ${(tomo.stock)} --$ ${(tomo.precio)}: 
			`			
		})
		mensaje = mensaje + `
		Opción 0: No comprar nada`
		let opcion = parseInt(prompt(mensaje))
		return opcion;
}

while (comprar){
	let opcion = mostrarComics()
	if (opcion>=1 && opcion <=5){ //--> compro
		let comicElegido =  comics.find(tomo=> tomo.id === opcion)
		if (carrito.length ===0) {
			comicElegido.cantidad = 1;
			comicElegido.stock--;
			carrito.push(comicElegido)
		}	
		else{
			let comicEnCarrito = comics.find(tomo=> tomo.id === opcion)
			if(comicEnCarrito){
				comicEnCarrito.cantidad++;
				comicEnCarrito--;
			}else{
				comicElegido.cantidad=1;
				comicElegido.stock--;
				carrito.push(comicElegido);
			}

		}	
	}
	else {
		comprar=false;
	}
}



//inicializo el ciclo While para que haga el loop hasta que corte el ciclo

// let comprar = true; //paso una variable en true.
// while(comprar) {
// 		//si la persona ingresa 1,2,3 = comprar=true
// 		//sino si la persona ingresa 0 = comprar=false;
// 	let opcionElegida = mostrarComics();
// 	if(opcionElegida=0){
// 		comprar =false;
// 	}
// 	else {
// 		AgregarCarrito(opcionElegida);
// 	}
// }


// let opcionElegida = mostrarComics();
// function AgregarCarrito(nroId){
// 		if(mostrarComics()== $(comics.id)){
// 			carrito.push;
// 		};
// 	return carrito;
// }

// AgregarCarrito(opcionElegida);

// let comprar = true; //paso una variable en true.

// while(comprar) {
// 	mostramos mensaje
// 	let opcionElegida // elegimos la opcion
// 	if(opcionElegida=0){
// 		significa que no queremos comprar mas
// 		aca hay que hacer que salga
// 	}
// 	else {
// 		significa que estamos eligiendo un comic para comprar
// 		aca hay que efectuar la compra
// 	}

// }