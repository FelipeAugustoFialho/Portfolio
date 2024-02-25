        /* MAPEANDO BOTÕES */

const formulario = document.querySelector('#button-contact');
const form = document.querySelector('.form');
const talk = document.querySelector(".talk-to-me");
const closeButton = document.querySelector('.close');

                /* DECLARANDO FORMULÁRIO COMO FALSE,PARA NÃO ENVIAR CASO CLIQUE EM FECHAR JANELA */

let formOpen = false;

                
                                /* FUNÇÃO PARA FORMULARIO APARECER AO CLICAR NO BOTAO */


function aparecerForm() {
        talk.style.left = "35%";
        talk.style.position = "relative";
        formOpen = true;
        formulario.style.display = "none";

}
                         /* FUNÇÃO PARA FECHAR FORMULÁRIO CASO NÃO QUEIRA MANDAR MENSAGEM */

function closeForm(event) {
        event.preventDefault();
        if (event.target === closeButton) {
                talk.style.left = "-340px";
                talk.style.position = "fixed";
                formOpen = false;
                formulario.style.display = "block";
        }
}
                /* FUNÇÃO PARA EVITAR QUE O FORMULÁRIO SEJA ENVIADO VAZIO MESMO CLICANDO EM FECHAR*/

function preventFormSubmit(event) {
        if (formOpen = false) {
                event.preventDefault();
        }
}
                        /* OUVINTES DE EVENTOS DOS BOTÕES */

formulario.addEventListener('click', aparecerForm);
closeButton.addEventListener('click', closeForm);