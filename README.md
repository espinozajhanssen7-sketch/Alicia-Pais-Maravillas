
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

## 10. Ejecución

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en un navegador.
3. Completar los formularios y presionar sus respectivos botones.

## 11. Enlaces de entrega

- Página web publicada: [Agregar enlace]
- Repositorio GitHub: [Agregar enlace]
- Video de demostración: [Agregar enlace]
