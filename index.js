//                           loading code start        
const loader = document.getElementById("loader-main-div");
window.addEventListener("load", function () {
    loader.style.display = "none"
})
//                           loading code ends            


//                       IMAGE GALLERY JAVASCRIPT CODE STARTS 
const imageElements = document.querySelectorAll(".right-side-img-div img");
const imageSources = [
    "https://i.pinimg.com/originals/c3/3e/9e/c33e9e242b410180ecba2ddebc1aa5cb.jpg",
     "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/jqhiffhjy5nodl3jef7i",
     "https://i.dawn.com/primary/2023/10/061003251398d85.jpg",
     "https://www.teetimegolfproducts.com/wp-content/uploads/2014/10/Best-top-desktop-golf-wallpapers-hd-golf-wallpaper-sport-pictures-06.jpg",
     "https://mrwallpaper.com/images/hd/join-the-competition-and-be-the-best-in-any-sport-you-choose-to-pursue-2jnu8pkvxo3rm08d.jpg",
     "https://static.vecteezy.com/system/resources/thumbnails/025/525/873/small_2x/abstract-basketball-panoramic-background-orange-basketball-ai-generated-image-photo.jpg",
     "https://www.wallpaperbetter.com/wallpaper/505/345/180/football-kick-2K-wallpaper-middle-size.jpg",
     "https://thefederal.com/h-upload/2024/05/05/444841-pti05042024000407b.webp",
     "https://images3.alphacoders.com/116/thumb-1920-1166987.png",
     "https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?cs=srgb&dl=pexels-pixabay-163403.jpg&fm=jpg",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWp5r6whNnJDrEHRPkTEF50GtGiivb4stb9g&s",
     "https://s.hdnux.com/photos/25/20/53/5573323/4/ratio3x2_960.jpg",
    // "https://www.sportinglife.com/images/news/945x532/37ffcf37-2e63-4bb9-9881-9430be4e87c9.jpg",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FWnq3IKZXRl4YorfNvLKZckmPn6l432VVgWpgvSV6qAbX9GbXJeeOOTaPf97R0eiOW8&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ddzGGgqP5A77NI2Wm4FskhqyYMnm0Vjmxx05Dy5X40_xDrxT6u_mEhjv9qBtcXgS1CE&usqp=CAU",
];

let currentIndexes = Array.from({ length: imageElements.length }, () => Math.floor(Math.random() * imageSources.length));

const updateContent = () => {
    imageElements.forEach((imageElement, index) => {
        imageElement.classList.add('hidden');

        setTimeout(() => {
            currentIndexes[index] = (currentIndexes[index] + 1) % imageSources.length;
            imageElement.src = imageSources[currentIndexes[index]];
            imageElement.classList.remove('hidden');
        }, 100);
    });
};

setInterval(updateContent, 5000);
//                           IMAGE GALLERY JAVASCRIPT CODE ENDS

//                             scroll animation code starts
// let lastScrollTop = 0;

// window.addEventListener('scroll', function() {
//     var imageDiv = document.querySelector('.right-side-img-div');
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         imageDiv.classList.add('covered');
//     } else {
//         imageDiv.classList.remove('covered');
//     }
//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
// });
//                             scroll animation code ends
window.onload = function() {
    const canvas = document.getElementById('picassoCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = Math.random() < 0.5 ? '#FFD700' : '#AFEEEE';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.1;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = particles[i].color;
                    ctx.lineWidth = 0.2;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }

            if (particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(animateParticles);
    }

    function init() {
        resizeCanvas();
        createParticles();
        animateParticles();
    }

    init();

    window.addEventListener('resize', () => {
        resizeCanvas();
        particles = [];
        createParticles();
    });

    // Interactive elements
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle());
            }
        });
    });

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            for (let i = 0; i < 5; i++) {
                const particle = new Particle();
                particle.x = icon.offsetLeft + icon.offsetWidth / 2;
                particle.y = icon.offsetTop + icon.offsetHeight / 2;
                particles.push(particle);
            }
        });
    });
};


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

