
const menuProjects = [
    { name: 'randonProject', category: "utilidade", src: 'assets/img/random-project.JPG', href: 'https://felipeaugustofialho.github.io/Random-2.0/', title: 'Projeto Random', p: 'Um site para sortear números, desenvolvido com: HTML, CSS e JavaScript' },
    { name: 'jokenpoProject', category: "utilidade", src: 'assets/img/jokenpo-project.JPG', href: 'https://felipeaugustofialho.github.io/Jokenpo-Project/', title: 'Projeto Jokenpô', p: 'O clássico jogo pedra papel e tesoura, desenvolvido com: HTML, CSS e JavaScript' },
    { name: 'currencyProject', category: "utilidade", src: 'assets/img/currency-converter.JPG', href: 'https://felipeaugustofialho.github.io/Currency-Converter/', title: 'Conversor de Moedas', p: 'Com diversas opções de conversão desenvolvido com: HTML, CSS e JavaScript OBS: os valores são fictícios' },
    { name: 'marioProject', category: "landingPage", src: 'assets/img/Mario-Luigi.JPG', href: 'https://felipeaugustofialho.github.io/Mario-Luigi/', title: 'Projeto Mario & Luigi', p: 'Uma Landing Page, com opção de envio de solicitações de serviço, desenvolvida com HTML, CSS e JavaScript.' },
    { name: 'barberShop', category: "landingPage", src: 'assets/img/project-barberShop.JPG', href: 'https://felipeaugustofialho.github.io/Project-BarberShop/', title: 'Projeto Barber Shop', p: 'Uma simples Landing Page, utilizando apenas HTML e CSS' },
    { name: 'loginProject', category: "landingPage", src: 'assets/img/project-login.JPG', href: 'https://felipeaugustofialho.github.io/Project-Login/', title: 'Projeto Login', p: 'Esse projeto conta com duas páginas, simulando um "cadastramento" utilizando apenas HTML e CSS' },
    { name: 'socialProject', category: "projetoSocial", src: 'assets/img/socialProject.JPG', href: 'https://felipeaugustofialho.github.io/ToNoCorre-inicio/', title: 'Tô no Corre!', p: 'Um projeto social desenvolvido para jovens em situação de vulnerabilidade com vagas de estágio e cursos gratuitos.' },
    { name: 'devBurguer', category: "landingPage", src: 'assets/img/devBurguer.JPG', href: 'https://felipeaugustofialho.github.io/project-Burguer/', title: 'Dev Burguer', p: 'Com diversas opções de filtros.O objetivo é por em prática ferramentas do JavaScript como: map,filter,reduce' },
    { name: 'AppMagazine', category: "UI/UX", src: 'assets/img/appMagazine.JPG', href: 'https://www.figma.com/proto/6U4AQkFgvWpIR8lDa3SzuM/APP-MagazineLuiza?node-id=7-484&t=MZTJaRCrQaT5zNMB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A484', title: 'App Magazine Luiza', p: 'Atividade de Design de Sistemas, onde foi solicitado "copiar" algum app existente.<br><br>Ferramenta Utilizada:Figma' },
    { name: 'devBurguer', category: "UI/UX", src: 'assets/img/appPagamento.JPG', href: 'https://www.figma.com/proto/u9YzpsqQqrdFIHamwLBOuW/Untitled?t=FTXpVNL1vgWQJadk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-396', title: 'App Pagamento via Pix', p: 'Durante um processo seletivo,foi solicitado a criação de uma tela de envio de Pix.<br><br> Ferramenta Utilizada:Figma' },

    { name: 'RevistaPathos', category: "freelancer", src: 'assets/img/pathos.png', href: 'https://revistapathos.com.br/', title: 'Revista Pathos', p: 'Manutenção do site da Revista,criação de novas páginas,tópicos, e revistas.<br>Tecnologias utilizadas:<br>WordPress' },
    { name: 'JFBarbearia', category: "freelancer", src: 'assets/img/JF.png', href: 'https://felipeaugustofialho.github.io/JF-Landing-Page/', title: 'JF Barbearia',p: 'Realizei a criação deste banner e atualmente criando um site para a barbearia.<br>Tecnologias utilizadas:<br>Canva,HTML,CSS,JavaScript' },
    { name: 'ThokadaMotoka', category: "freelancer", src: 'assets/img/thoka.png', href: 'https://www.facebook.com/thokadamotoka02', title: 'Thoka da Motoca',p:'Realizei a criação deste Banner para postagem em redes sociais.<br>Tecnologias utilizadas:<br>Canva' },
    { name: 'OliverJetWash', category: "freelancer", src: 'assets/img/Oliver.jpg', href: '#', title: 'Oliver Jet Wash', p: 'Realizei a criação deste logo para o Lava Rápido. <br><br>Tecnologias utilizadas:Canva' },

];

// BOTOES PROJETOS //

const landingPage = document.querySelector('#landingPage');
const utilidade = document.querySelector('#utilidades');
const allItens = document.querySelector('#showAll');
const projetoSocial = document.querySelector('#socialProject');
const uiUx = document.querySelector('#uiUx');
const freelancer = document.querySelector('#freelancer')
let list = document.querySelector('.projectList');

// FUNCOES PARA PROJETOS

function showProjects(category) {
    let myLi = '';
    menuProjects.forEach(item => {
        if (category === 'all' || item.category === category) {
            myLi += `
                <li class="listItens">
                    <a href="${item.href}" target="_blank">
                        <img src="${item.src}" alt="#">
                        <p class="title-projects">${item.title}</p>
                        <p class="infoProjects">${item.p}</p>
                    </a>
                </li>
            `;
        }
    });
    list.innerHTML = myLi;
}

// Adicionando eventos para cada botão
landingPage.addEventListener('click', () => showProjects('landingPage'));
utilidade.addEventListener('click', () => showProjects('utilidade'));
allItens.addEventListener('click', () => showProjects('all'));
projetoSocial.addEventListener('click', () => showProjects('projetoSocial'));
uiUx.addEventListener('click',() => showProjects('UI/UX'));
freelancer.addEventListener('click', () => showProjects('freelancer'));






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



/* CONFIGURAÇÕES DE NAVEGAÇÃO DE LINKS SUAVE */

document.addEventListener('DOMContentLoaded', () => {
    const linksHeader = document.querySelectorAll('.links');


    

    // Função para fazer a rolagem suave
    function rolarParaSeção(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Obtém o ID da seção correspondente ao link
        const targetId = this.getAttribute('href').substring(1); // Remove o "#" do href
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Realiza a rolagem suave até a seção
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Adiciona o evento de clique para cada link
    linksHeader.forEach(link => {
        link.addEventListener('click', rolarParaSeção);
    });
});
