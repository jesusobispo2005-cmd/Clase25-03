function evaluarCarrera(acciones, pista) {
    let resultado = "";
    let superada = true;

    for (let i = 0; i < pista.length; i++) {
        let accion = acciones[i];
        let tramo = pista[i];

        if (accion === "run" && tramo === "_") {
            resultado += "_";
        } else if (accion === "jump" && tramo === "|") {
            resultado += "|";
        } else if (accion === "jump" && tramo === "_") {
            resultado += "x";
            superada = false;
        } else if (accion === "run" && tramo === "|") {
            resultado += "/";
            superada = false;
        }
    }

    console.log("Pista final:", resultado);
    return superada;
}

// Función de prueba
function probar() {
    let acciones = ["run", "jump", "run", "jump", "run"];
    let pista = "_|_|_";

    let resultado = evaluarCarrera(acciones, pista);

    document.getElementById("resultado").innerText =
        "¿Carrera superada? " + (resultado ? "✅ Sí" : "❌ No");
}