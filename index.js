//                       IMAGE GALLERY JAVASCRIPT CODE STARTS 
const imageElements = document.querySelectorAll(".right-side-img-div img");
const imageSources = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNxuDiRs8H2pa6KDAxDHawAcrS35yDkGcuA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOUGAx1ahdS0S_GPcaj0L9fuDQlrbO-CTdw&s",
    "https://img.dunyanews.tv/news/2023/November/11-20-23/news_big_images/771598_84072011.jpg",
    "https://c.cricketpakistan.com.pk/images/posts/cover_1592459796cover.jpg",
    "https://static01.nyt.com/images/2019/12/19/multimedia/19SP-MOMENTS-INYT-RUGBY/merlin_163768305_14e60b2d-807d-4e4c-9dac-dd672c89c8f7-superJumbo.jpg",
    "https://www.mykhel.com/common_dynamic/images/common/desk/football_history/2022.jpg",
    "https://images.wsj.net/im-957541/social",
    "https://wtop.com/wp-content/uploads/2017/12/Tottenham.jpg",
    "https://i1.adis.ws/i/canon/canon-pro-tom-jenkins-sports-tips-1-1140?$og-image$",
    "https://api.time.com/wp-content/uploads/2017/02/world-press-photo-102_cameron-spencer_getty-images.jpg",
];

let currentIndexes = Array.from({ length: imageElements.length }, () => Math.floor(Math.random() * imageSources.length));

const updateContent = () => {
    imageElements.forEach((imageElement, index) => {
        imageElement.classList.add('hidden');

        setTimeout(() => {
            currentIndexes[index] = (currentIndexes[index] + 1) % imageSources.length;
            imageElement.src = imageSources[currentIndexes[index]];
            imageElement.classList.remove('hidden');
        }, 1000); // Match this with the CSS transition duration
    });
};

setInterval(updateContent, 5000);
//                           IMAGE GALLERY JAVASCRIPT CODE ENDS

//                             scroll animation code starts
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var imageDiv = document.querySelector('.right-side-img-div');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        imageDiv.classList.add('covered');
    } else {
        imageDiv.classList.remove('covered');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
//                             scroll animation code ends
