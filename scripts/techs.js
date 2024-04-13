function hoverItems(){

    let html = document.querySelector('#icon-html');
    let css = document.querySelector('#icon-css');
    let javascript = document.querySelector('#icon-javascript');
    let react = document.querySelector('#icon-react');
    let sass = document.querySelector('#icon-sass');
    let expo = document.querySelector('#icon-expo');
    let typescript = document.querySelector('#icon-typescript');
    let figma = document.querySelector('#icon-figma');
    let git = document.querySelector('#icon-git');

    let container = document.querySelector('.container-hover'); 
    let paragraph = document.createElement('p');

    html.addEventListener('mouseenter', () => {
        paragraph.textContent = "Estruturas feita em HTML5 seguindo estruturas semânticas.";
        container.appendChild(paragraph);
    });

    html.addEventListener('mouseleave', () => container.innerHTML = "");

    css.addEventListener('mouseenter', () => {
        paragraph.textContent = "Estilizações feitas em CSS abordando conceitos como Mobile First e responsividade.";
        container.appendChild(paragraph);
    })

    css.addEventListener('mouseleave', () => container.innerHTML = "")

    javascript.addEventListener('mouseenter', () => {
        paragraph.textContent = "Estrutura dinâmica dos sites desenvolvida em Javascript para melhor otimização.";
        container.appendChild(paragraph);
    })

    javascript.addEventListener('mouseleave', () => container.innerHTML = "")

    react.addEventListener('mouseenter', () => {
        paragraph.textContent = "Desenvolvimento em React e React Native para agilizar processo de criação e desenvolvimento de sites e aplicativos híbridos.";
        container.appendChild(paragraph);
    })

    react.addEventListener('mouseleave', () => container.innerHTML = "");

    sass.addEventListener('mouseenter', () => {
        paragraph.textContent = "Estilização de sites utilizando Sass para agilizar e organizar o projeto.";
        container.appendChild(paragraph);
    })
    
    sass.addEventListener('mouseleave', () => container.innerHTML = "");

    expo.addEventListener('mouseenter', () => {
        paragraph.textContent = "Desenvolvimento de aplicativos com Expo utilizando React native.";
        container.appendChild(paragraph);
    })

    expo.addEventListener('mouseleave', () => container.innerHTML = "");

    typescript.addEventListener('mouseenter', () => {
        paragraph.textContent = "Aplicações feitas em Typescript para organização do código."
        container.appendChild(paragraph);
    })

    typescript.addEventListener('mouseleave', () => container.innerHTML = "");

    figma.addEventListener('mouseenter', () => {
        paragraph.textContent = "Utilização do figma para desenvolvimento de interfaces."
        container.appendChild(paragraph);
    })

    figma.addEventListener('mouseleave', () => container.innerHTML = "");

    git.addEventListener('mouseenter', () => {
        paragraph.textContent = "Utilização do GIT para versionamento do código e desenvolvimento em equipe."
        container.appendChild(paragraph);
    })

    git.addEventListener('mouseleave', () => container.innerHTML = "");

}

hoverItems();
