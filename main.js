
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 1080
            }
        },
        shape: {
            type: 'image',
            image: {
                src: 'muwi.png',
                width: 900,
                height: 900
            }
        },
        
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ff0000',
            opacity: 0.4,
            width: 1
        },
        size: {
            value: 20,
            random: true,
            anim: {
                enable: false,
                speed: 30,
                size_min: 0.1,
                sync: false
            }
        },
        
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
            rotateY: 1200
            }
        }
        },
        interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'bubble'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 50,
                duration: .4,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
        },
        retina_detect: true
});


var miAudio = document.getElementById('luffycantando');


function iniciarReproduccion(){
        if (!miAudio.play()) {   
            miAudio.play();       
        }else{
            miAudio.paused;
        }
    }
document.addEventListener('click', iniciarReproduccion);


