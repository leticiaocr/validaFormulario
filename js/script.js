import eUmCPF from "./valida-cpf.js";
import eMAiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        eUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        eMAiorDeIdade(campo);
    }

}