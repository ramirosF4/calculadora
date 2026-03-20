document.addEventListener("DOMContentLoaded", () => {

    const selects = document.querySelectorAll(".permiso");
    const input = document.getElementById("permisoTotal");
    const form = document.querySelector("form");
    function calcularPermisos() {
        let resultado = "";

        selects.forEach(select => {
            resultado += select.value;
        });

        input.value = resultado;
    }
    function actualizarSelects() {
    let valor = input.value;

    
    let limpio = valor.replace(/[^0-7]/g, "").slice(0, 3);
    
    if (valor !== limpio) {
        input.value = limpio;
    }


    if (limpio.length > 0) {

        let completo = limpio.padStart(3, "0");

        selects.forEach((select, index) => {
            select.value = completo[index];
        });
    }
}

    form.addEventListener("submit", function(e) {
        if (input.value.trim() === "" || input.value.length !== 3) {
            e.preventDefault();
            alert("Ingresa un permiso válido de 3 dígitos (ej: 755)");
        }
    });


    selects.forEach(select => {
        select.addEventListener("change", calcularPermisos);
    });

    input.addEventListener("input", actualizarSelects);

});