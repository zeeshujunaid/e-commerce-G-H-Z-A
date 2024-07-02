//                       IMAGE GALLERY JAVASCRIPT CODE STARTS 
const imageElements = document.querySelectorAll(".right-side-img-div img");
const imageSources = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXp5as4bBqRRliY74k2Z5Ep4h6eDGuWy0wDw&s",
    "https://cdn.hockeycanada.ca/hockey-canada/Team-Canada/Men/World-Cup/2016/sep_29_wch_team.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWqKQ7d5_IoYj1Ltq8qA1CJ63Hr6fQAaC1Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Mf7NBuQi7Jnl-5a3GpK9xnhjDyB6VOrLTQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoRTFBm7EFOXgKGMVpmEqySW2lpAdSiMrqg&s",
    "https://www.mykhel.com/common_dynamic/images/common/desk/football_history/2022.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ym9ksDVBPVcxQMtR7M4Nc_tTL_L90P91kg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_f8x0icAdzPSDmUG3w77Vv9NC0BEG-Kwhg&s",
    "https://i1.adis.ws/i/canon/canon-pro-tom-jenkins-sports-tips-1-1140?$og-image$",
    "https://www.pledgesports.org/wp-content/uploads/2017/03/nba_jordan_08.jpg",
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/X4F64T6ZCRLPRLGNGFUTOKW5O4.jpg",
    "https://photographylife.com/wp-content/uploads/2018/05/sports_tips_1.jpg",
    "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/main-image/2019/07/05/1653551-209234056.png?itok=vcJ_GqGL",
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


