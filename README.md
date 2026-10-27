
# Alicia en el país de las maravillas

## 1. Descripción del proyecto

Este proyecto consiste en una página web interactiva inspirada en Alicia en el país de las maravillas. Contiene tres ejercicios desarrollados con HTML, CSS y JavaScript.

## 2. Objetivos

- Crear formularios para ingresar datos.
- Procesar información mediante operaciones matemáticas.
- Utilizar estructuras condicionales y repetitivas.
- Validar datos ingresados por el usuario.
- Mostrar resultados sin recargar la página.

## 3. Tecnologías utilizadas

- HTML5: estructura de la página y formularios.
- CSS3: diseño visual y adaptación a pantallas pequeñas.
- JavaScript: cálculos, validaciones y manipulación del contenido HTML.

## 4. Estructura del proyecto

- `index.html`: estructura y formularios.
- `css/estilos.css`: estilos de la página.
- `script.js`: lógica de los tres ejercicios.
- `README.md`: documentación del proyecto.
- `evidencias/`: capturas de pantalla de las pruebas.

## 5. Descripción de los ejercicios

### Ejercicio 1: La poción mágica de Alicia

Solicita la altura inicial de Alicia y la cantidad de poción consumida. Cada mililitro aumenta su altura en 0,5 cm.

Fórmula:

Altura final = Altura inicial + Cantidad de poción × 0,5

La altura final se compara con una puerta de 150 cm para determinar si Alicia alcanza su altura.

### Ejercicio 2: La merienda del Sombrerero Loco

Solicita el nombre del cliente, la bebida y la cantidad de tazas.

Precios:
- Té: Bs 5.
- Café: Bs 8.
- Chocolate: Bs 10.
- Jugo: Bs 6.

Si se piden cinco tazas o más, se aplica un descuento del 10 %.

Fórmulas:

Subtotal = Precio por taza × Cantidad

Descuento = Subtotal × 0,10, cuando corresponde.

Total = Subtotal − Descuento.

### Ejercicio 3: El desafío de la Reina de Corazones

Solicita un número entero entre 1 y 100. Mediante un ciclo `for`, analiza los números desde 1 hasta el límite ingresado.

El programa clasifica los números en pares e impares, cuenta cada grupo, calcula sus sumas y determina qué grupo tiene la suma mayor.

## 6. Variables y estructuras utilizadas

- `const`: declara referencias y valores que no se reasignan.
- `let`: declara variables cuyo valor puede cambiar.
- `if`, `else if` y `else`: permiten tomar decisiones.
- `switch`: selecciona el precio correspondiente a cada bebida.
- `for`: repite el análisis de los números.
- Funciones: organizan la lógica de cada ejercicio.

## 7. Manipulación del DOM y eventos

- `document.getElementById()`: obtiene elementos HTML por su identificador.
- `.value`: obtiene los datos introducidos en los formularios.
- `.textContent`: muestra los resultados o mensajes de error.
- `addEventListener()`: escucha el envío de cada formulario.
- `preventDefault()`: evita que el formulario recargue la página.

## 8. Validaciones

El proyecto comprueba que:
- La altura sea positiva.
- La cantidad de poción esté entre 1 y 100 ml.
- El nombre no esté vacío.
- Se seleccione una bebida válida.
- La cantidad de tazas sea un entero entre 1 y 20.
- El límite numérico sea un entero entre 1 y 100.

## 9. Pruebas realizadas

Se verificaron seis casos: altura inválida, poción fuera de rango, pedido con descuento, cantidad de tazas decimal, límite mínimo del desafío y límite superior inválido.

Las evidencias de estas pruebas se incorporarán en la carpeta `evidencias/`.
### Ejercicio 1: La poción mágica de Alicia

| N.º | Datos de entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | Altura: 140 cm; poción: 20 ml | Altura final: 150 cm | Correcto |
| 2 | Altura: 100 cm; poción: 10 ml | Altura final: 105 cm | Correcto |
| 3 | Altura: 150 cm; poción: 1 ml | Altura final: 150.5 cm | Correcto |
| 4 | Altura: 0 cm; poción: 10 ml | Rechazar altura inválida | Correcto |
| 5 | Altura: 140 cm; poción: 101 ml | Rechazar cantidad inválida | Correcto |

### Ejercicio 2: La merienda del Sombrerero Loco

| N.º | Datos de entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | Alicia; chocolate; 5 tazas | Total: Bs 45 | Correcto |
| 2 | Alicia; café; 1.5 tazas | Rechazar cantidad no entera | Correcto |
| 3 | Alicia; té; 1 taza | Total: Bs 5 | Correcto |
| 4 | Alicia; jugo; 20 tazas | Total: Bs 108 | Correcto |
| 5 | Nombre vacío; té; 1 taza | Rechazar nombre vacío | Correcto |

### Ejercicio 3: El desafío de la Reina de Corazones

| N.º | Datos de entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| 1 | Límite: 1 | Suma impares: 1; pares: 0 | Correcto |
| 2 | Límite: 101 | Rechazar límite inválido | Correcto |
| 3 | Límite: 2 | Suma pares: 2; impares: 1 | Correcto |
| 4 | Límite: 0 | Rechazar límite inválido | Correcto |
| 5 | Límite: 5 | Suma pares: 6; impares: 9 | Correcto |

## 10. Ejecución

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en un navegador.
3. Completar los formularios y presionar sus respectivos botones.

## 11. Enlaces de entrega

- Página web publicada: https://github.com/espinozajhanssen7-sketch/Alicia-Pais-Maravillas
- Repositorio GitHub: https://espinozajhanssen7-sketch.github.io/Alicia-Pais-Maravillas/
### Ejercicio 1: La poción mágica de Alicia

**Entradas:** altura inicial en centímetros y cantidad de poción en mililitros.

**Procesamiento:** se validan los datos. Luego se calcula la altura final mediante la fórmula:

Altura final = altura inicial + cantidad de poción × 0,5

Finalmente, se compara la altura final con los 150 cm de la puerta.

**Salidas:** altura inicial, cantidad de poción, altura final y mensaje que indica si Alicia alcanza la puerta.

**Variables principales:**
- `alturaInicial`: altura original de Alicia.
- `cantidadPocion`: mililitros de poción consumidos.
- `nuevaAltura`: altura calculada.
- `mensaje`: indica si Alicia alcanza la puerta.

**Operadores:** `+` suma, `*` multiplica, `<=` y `>=` comparan valores, y `||` permite comprobar varias condiciones.

### Ejercicio 2: La merienda del Sombrerero Loco

**Entradas:** nombre del cliente, bebida seleccionada y cantidad de tazas.

**Procesamiento:** se valida el nombre y la cantidad. La estructura `switch` determina el precio de la bebida. Después se calcula el subtotal, se aplica un descuento del 10 % si se compran cinco tazas o más y se obtiene el total.

**Fórmulas:**

Subtotal = precio por taza × cantidad.

Descuento = subtotal × 0,10, cuando corresponde.

Total = subtotal − descuento.

**Salidas:** nombre, bebida, cantidad, precio unitario, subtotal, descuento y total.

**Variables principales:**
- `nombre`: nombre del cliente.
- `bebida`: bebida seleccionada.
- `cantidad`: número de tazas.
- `precio`: precio de una taza.
- `subtotal`, `descuento` y `total`: valores del pedido.

**Operadores:** `*` multiplica, `-` resta, `>=` compara y `||` combina condiciones.

### Ejercicio 3: El desafío de la Reina de Corazones

**Entrada:** número entero entre 1 y 100.

**Procesamiento:** un ciclo `for` recorre los números desde 1 hasta el límite ingresado. El operador `%` permite determinar si cada número es par o impar. Se cuentan los números de cada grupo y se suman sus valores. Finalmente, se comparan las sumas.

**Salidas:** secuencia, números pares e impares, cantidades, sumas y grupo con la suma mayor.

**Variables principales:**
- `limite`: número máximo de la secuencia.
- `i`: contador del ciclo.
- `pares` e `impares`: secuencias de números clasificadas.
- `cantidadPares` y `cantidadImpares`: contadores.
- `sumaPares` y `sumaImpares`: acumuladores.
- `mensaje`: indica qué grupo tiene la suma mayor.

**Operadores:** `%` calcula el resto de una división, `===` compara igualdad estricta, `++` incrementa el contador, `+=` acumula valores y `>` compara las sumas.

## 13. Estructuras y funciones de JavaScript

- `const`: declara variables que no se reasignan, como las referencias a formularios y resultados.
- `let`: declara variables que pueden cambiar, como contadores, precios y acumuladores.
- `if`, `else if` y `else`: permiten validar datos y elegir entre diferentes resultados.
- `switch`: selecciona el precio correspondiente a la bebida.
- `for`: repite una operación para cada número de la secuencia.
- `calcularPocion(event)`: valida los datos y calcula la altura final.
- `calcularMerienda(event)`: valida el pedido y calcula su precio y descuento.
- `calcularReina(event)`: clasifica, cuenta y suma los números pares e impares.

## 14. Métodos del DOM y eventos

- `document.getElementById()`: obtiene un elemento HTML mediante su identificador.
- `.value`: lee el valor introducido en un campo o seleccionado en una lista.
- `.textContent`: escribe el resultado o el mensaje de error dentro de un elemento.
- `addEventListener()`: ejecuta una función cuando se produce el evento `submit` de un formulario.
- `preventDefault()`: evita el envío tradicional del formulario y la recarga de la página.

## 15. Errores frecuentes

- Introducir una altura igual o inferior a cero.
- Introducir una cantidad de poción fuera del intervalo permitido.
- Dejar vacío el nombre o no seleccionar una bebida.
- Introducir una cantidad de tazas decimal o fuera del rango permitido.
- Introducir un límite que no sea un entero entre 1 y 100.
- Confundir el subtotal con el total después del descuento.

El programa muestra mensajes de error para los datos no válidos y permite volver a realizar cada ejercicio sin recargar la página.

