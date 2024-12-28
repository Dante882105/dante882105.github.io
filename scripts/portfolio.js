//Animations
const Galery = document.getElementById('galery');

const Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // add classmove_down_animation
            entry.target.classList.add('move_down_animation');
        } else {
            // delete class to restart the animation
            entry.target.classList.remove('move_down_animation');
        }
    });
}, { threshold: 0.1 }); // 10% Vidible to activate animations

//Galery.forEach(element => observer.observe(element));

Observer.observe(Galery);
