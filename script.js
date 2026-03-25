/*
 * Única función para calcular el área de un polígono
 */
function calcularArea(poligono) {
  switch (poligono.tipo) {
    case "triangulo":
      return (poligono.base * poligono.altura) / 2;

    case "cuadrado":
      return poligono.lado * poligono.lado;

    case "rectangulo":
      return poligono.base * poligono.altura;

    default:
      return "Tipo de polígono no soportado";
  }
}

/*
 * Función para mostrar los resultados en pantalla
 */
function probar() {
  const triangulo = { tipo: "triangulo", base: 10, altura: 5 };
  const cuadrado = { tipo: "cuadrado", lado: 4 };
  const rectangulo = { tipo: "rectangulo", base: 8, altura: 3 };

  const resultadoDiv = document.getElementById("resultado");

 resultadoDiv.innerHTML =
  "<p>Área del triángulo: " + calcularArea(triangulo) + "</p>" +
  "<p>Área del cuadrado: " + calcularArea(cuadrado) + "</p>" +
  "<p>Área del rectángulo: " + calcularArea(rectangulo) + "</p>";
}