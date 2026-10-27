
const formPocion = document.getElementById("formPocion");
const formMerienda = document.getElementById("formMerienda");
const formReina = document.getElementById("formReina");

formPocion.addEventListener("submit", calcularPocion);
formMerienda.addEventListener("submit", calcularMerienda);
formReina.addEventListener("submit", calcularReina);

function calcularPocion(event) {
    event.preventDefault();

    const alturaInicial = Number(document.getElementById("alturaInicial").value);
    const cantidadPocion = Number(document.getElementById("cantidadPocion").value);
    const resultado = document.getElementById("resultadoPocion");

    if (alturaInicial <= 0 || !Number.isFinite(alturaInicial)) {
        resultado.textContent = "Error: la altura debe ser mayor que cero.";
    } else if (cantidadPocion < 1 || cantidadPocion > 100 || !Number.isFinite(cantidadPocion)) {
        resultado.textContent = "Error: la poción debe estar entre 1 y 100 ml.";
    } else {
        const nuevaAltura = alturaInicial + cantidadPocion * 0.5;
        let mensaje;

        if (nuevaAltura >= 150) {
            mensaje = "¡Alicia ya alcanza la altura de la puerta!";
        } else {
            mensaje = "Alicia todavía no alcanza la altura de la puerta.";
        }

        resultado.textContent =
            "Altura inicial: " + alturaInicial + " cm\n" +
            "Poción consumida: " + cantidadPocion + " ml\n" +
            "Altura final: " + nuevaAltura.toFixed(2) + " cm\n" +
            "Altura de la puerta: 150 cm\n" +
            mensaje;
    }
}

function calcularMerienda(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreCliente").value.trim();
    const bebida = document.getElementById("bebida").value;
    const cantidad = Number(document.getElementById("cantidadTazas").value);
    const resultado = document.getElementById("resultadoMerienda");

    if (nombre === "") {
        resultado.textContent = "Error: escribe tu nombre.";
        return;
    } else if (bebida === "") {
        resultado.textContent = "Error: selecciona una bebida.";
        return;
    } else if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 20) {
        resultado.textContent = "Error: la cantidad debe ser un número entero entre 1 y 20.";
        return;
    }

    let precio;

    switch (bebida) {
        case "te":
            precio = 5;
            break;
        case "cafe":
            precio = 8;
            break;
        case "chocolate":
            precio = 10;
            break;
        case "jugo":
            precio = 6;
            break;
        default:
            resultado.textContent = "Error: la bebida seleccionada no es válida.";
            return;
    }

    const subtotal = precio * cantidad;
    let descuento = 0;

    if (cantidad >= 5) {
        descuento = subtotal * 0.10;
    }

    const total = subtotal - descuento;

    resultado.textContent =
        "Cliente: " + nombre + "\n" +
        "Bebida: " + bebida.charAt(0).toUpperCase() + bebida.slice(1) + "\n" +
        "Cantidad de tazas: " + cantidad + "\n" +
        "Precio por taza: Bs " + precio.toFixed(2) + "\n" +
        "Subtotal: Bs " + subtotal.toFixed(2) + "\n" +
        "Descuento: Bs " + descuento.toFixed(2) + "\n" +
        "Total a pagar: Bs " + total.toFixed(2);
}

function calcularReina(event) {
    event.preventDefault();

    const limite = Number(document.getElementById("limiteNumeros").value);
    const resultado = document.getElementById("resultadoReina");

    if (!Number.isInteger(limite) || limite < 1 || limite > 100) {
        resultado.textContent = "Error: ingresa un número entero entre 1 y 100.";
        return;
    }

    let pares = "";
    let impares = "";
    let cantidadPares = 0;
    let cantidadImpares = 0;
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            pares += i + " ";
            cantidadPares++;
            sumaPares += i;
        } else {
            impares += i + " ";
            cantidadImpares++;
            sumaImpares += i;
        }
    }

    let mensaje;

    if (sumaPares > sumaImpares) {
        mensaje = "El grupo de números pares tiene la suma mayor.";
    } else if (sumaImpares > sumaPares) {
        mensaje = "El grupo de números impares tiene la suma mayor.";
    } else {
        mensaje = "Ambos grupos tienen la misma suma.";
    }

    resultado.textContent =
        "Secuencia: del 1 al " + limite + "\n" +
        "Números pares: " + (pares || "Ninguno") + "\n" +
        "Cantidad de pares: " + cantidadPares + "\n" +
        "Suma de pares: " + sumaPares + "\n" +
        "Números impares: " + (impares || "Ninguno") + "\n" +
        "Cantidad de impares: " + cantidadImpares + "\n" +
        "Suma de impares: " + sumaImpares + "\n" +
        mensaje;
}
