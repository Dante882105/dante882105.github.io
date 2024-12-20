'use strict';

let downLoadPdf = document.querySelector('.download_cv').addEventListener('click', ()=>{
    const PdfUrl = 'docs/HojadevidaDanielBernal 2024.pdf';
    const Link = document.createElement('a');
    Link.href = PdfUrl;
    Link.download = 'HojadevidaDanielBernal2024.pdf';
    document.body.appendChild(Link);
    Link.click();
    document.body.removeChild(Link);
});
//Animations
const Photo = document.getElementById('photo');
const TextSmall = document.getElementById('text');

const ElementAndAnimation = [
    {element: Photo, class: 'move_photo'},
    {element: TextSmall, class: 'move_text'}
]

const Sections = [Photo, TextSmall];

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetAnimation = ElementAndAnimation.find(obj => obj.element === entry.target);
            if (targetAnimation) {
                entry.target.classList.add(targetAnimation.class); // Add animation
                observer.unobserve(entry.target); // stop observsation
            }
        }
    });
}, { threshold: 0.1 }); // 10% Vidible to activate animations

Sections.forEach(element => observer.observe(element));
