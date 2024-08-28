function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output").innerHTML = `<p>${textoEncriptado}</p>`;
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output").innerHTML = `<p>${textoDesencriptado}</p>`;
}
