//                           loading code start        
const loader = document.getElementById("loader-main-div");
window.addEventListener("load", function () {
    loader.style.display = "none"
})
//                           loading code ends            


//                       IMAGE GALLERY JAVASCRIPT CODE STARTS 
const imageElements = document.querySelectorAll(".right-side-img-div img");
const imageSources = [
    "https://www.mrfsports.com/sites/all/themes/adaptivetheme/at_subtheme/images/home-banner.jpg",
     "https://premierlacrosseleague.com/wp-content/uploads/2023/08/ONeillKavShelly_WebHeader-1024x576.jpg",
     "https://cdn3.f-cdn.com//files/download/80772127/Facebook-Cover-Design-5.png?width=780&height=403&fit=crop",
     "https://assets.goal.com/images/v3/blt31d2efb4ec0c11d8/3e9a013c642275ed7dc19478af5a2b2c54f3e190.jpg?auto=webp&format=pjpg&width=3840&quality=60",
     "https://getwallpapers.com/wallpaper/full/6/e/4/713315-best-cool-shoes-hd-wallpapers-1920x1080.jpg",
     "https://resources.carltonfc.com.au/photo-resources/2021/06/03/6b3b089f-77e7-41a0-8493-12b00b53c22d/CFC2-362-CORP21-GSB-Launch-Web-Article.jpg?width=1064&height=600",
     "https://cdn.wallpapersafari.com/16/21/Pc5Cit.png",
     "https://e1.pxfuel.com/desktop-wallpaper/271/303/desktop-wallpaper-nba-orlando-magic-dwight-howard-high-slam-dunk-dwight-howard.jpg",
     "https://images3.alphacoders.com/116/thumb-1920-1166987.png",
     "https://media.chl.ca/wp-content/uploads/sites/33/2023/12/19135219/Frasca-Website.jpg",
     "https://www.ipsos.com/sites/default/files/styles/max_1300x1300/public/ct/news_and_polls/2023-02/Intro-WTFPlay-960x518.jpg?itok=rpxq9w04",
     "https://t3.ftcdn.net/jpg/02/87/04/00/360_F_287040077_U2ckmhpzeyqDHiybj0dfCfX6NRCEKdoe.jpg",
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
// profile code start
// Function to save profile data from profile.html
function saveProfileData(event) {
    event.preventDefault();

    // Get user details from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const image = document.getElementById('image').files[0];

    if (!name || !email || !city || !image) {
        alert('Please fill out all fields and select an image.');
        return;
    }

    // Convert image to base64
    const reader = new FileReader();
    reader.onloadend = function() {
        const imageData = reader.result;

        // Save data to localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userCity', city);
        localStorage.setItem('userImage', imageData);

        alert('Profile saved!');

        // Redirect to user.html after saving
        window.location.href = 'user.html';
    };

    reader.readAsDataURL(image);
}

// Function to update the display on user.html
function updateDisplay() {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const city = localStorage.getItem('userCity');
    const image = localStorage.getItem('userImage');

    if (document.getElementById('displayName')) {
        document.getElementById('displayName').textContent = name || "Guest";
        document.getElementById('displayEmail').textContent = email || "No email provided";
        document.getElementById('displayCity').textContent = city || "No city provided";
        
        if (image) {
            document.getElementById('displayImage').src = image;
        } else {
            document.getElementById('displayImage').alt = "No image available";
        }
    }
}

// Optional: Toggle user info on image click (for user.html)
function toggleInfo() {
    const info = document.getElementById('info');
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

// Check if we are on profile.html
if (document.getElementById('userForm')) {
    document.getElementById('userForm').addEventListener('submit', saveProfileData);
}

// Check if we are on user.html
if (document.getElementById('displayName')) {
    updateDisplay();
}


function profileinfo(){
    // var info = document.getElementById("info");
    // info.style.display="flex"
    console.log("hello");
    
}