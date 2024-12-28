"use strict";

import { Data } from "./json/data.js";

const Develop = document.getElementById('develop');
const Lenguages = document.getElementById('lenguages');
function generates_skills(){
    //Generate skills
    for (let i = 0; i < Data.develop_skills.length; i++) {
        const Div_primary = document.createElement('div');
        Div_primary.className = 'container';

        let div_logo = document.createElement('div');
        let img = document.createElement('img');
        let div_status = document.createElement('div');
        let status_text = document.createElement('small');
        let div_progress = document.createElement('div');
        let progress_bar = document.createElement('div');
        let progress_value = document.createElement('div');

        img.setAttribute('src', Data.develop_skills[i].url);
        div_logo.className = 'logo';
        div_logo.appendChild(img);

        status_text.innerText = Data.develop_skills[i].status;
        div_status.appendChild(status_text);
        div_status.className = 'status';

        progress_value.setAttribute('style',"width: 0%");
        progress_bar.appendChild(progress_value);
        progress_bar.setAttribute('max', 100);
        progress_value.className = 'progress-bar';
        div_progress.appendChild(progress_bar);
        div_progress.className = 'progress';

        Div_primary.appendChild(div_logo);
        Div_primary.appendChild(div_status);
        Div_primary.appendChild(div_progress);
        Develop.appendChild(Div_primary);

        setTimeout(()=>{
            progress_value.setAttribute('style',`width: ${Data.develop_skills[i].percent}%`);
        }, 1000)
    }
    //Generate lenguages
    for (let i = 0; i < Data.lenguages.length; i++) {
        const Div_primary = document.createElement('div');
        Div_primary.className = 'container';

        let div_logo = document.createElement('div');
        let img = document.createElement('img');
        let div_status = document.createElement('div');
        let status_text = document.createElement('small');
        let div_progress = document.createElement('div');
        let progress_bar = document.createElement('div');
        let progress_value = document.createElement('div');

        img.setAttribute('src', Data.lenguages[i].url);
        div_logo.className = 'logo';
        div_logo.appendChild(img);

        status_text.innerText = Data.lenguages[i].level;
        div_status.appendChild(status_text);
        div_status.className = 'status';

        progress_value.setAttribute('style',"width: 0%");
        progress_bar.appendChild(progress_value);
        progress_bar.setAttribute('max', 100);
        progress_value.className = 'progress-bar';
        div_progress.appendChild(progress_bar);
        div_progress.className = 'progress';

        Div_primary.appendChild(div_logo);
        Div_primary.appendChild(div_status);
        Div_primary.appendChild(div_progress);
        Lenguages.appendChild(Div_primary);

        setTimeout(()=>{
            progress_value.setAttribute('style',`width: ${Data.lenguages[i].percent}%`);
        }, 1000)
    };
}

//Visibility and animations to skills
const Lefth = document.getElementById('lefth');
const Rigth = document.getElementById('rigth');
const Down = document.getElementById('down');

const ElementAndAnimation = [
    {element: Lefth, class: 'move_lefth'},
    {element: Rigth, class: 'move_rigth'},
    {element: Down, class: 'move_down'}
]

const Sections = [Lefth, Rigth, Down];

const Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const targetAnimation = ElementAndAnimation.find(obj => obj.element === entry.target);
        if (entry.isIntersecting) {
            if(targetAnimation) {
                entry.target.classList.add(targetAnimation.class); // Add animation
                observer.unobserve(entry.target); // stop observsation
                if (entry.target.id === 'lefth') {
                    generates_skills(); // launch the function
                }
            };
            
        }
    });
}, { threshold: 0.1 }); // 10% Vidible to activate animations

Sections.forEach(element => Observer.observe(element));
