// let slid = [
//   "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies3.png",
//   "https://www.pensivly.com/wp-content/uploads/2020/04/THE-WITCHER-2019-Hollywood-Movies-in-Hindi-Dubbed-Full-Action.jpg",
//   "https://www.pensivly.com/wp-content/uploads/2020/04/THE-WITCHER-2019-Hollywood-Movies-in-Hindi-Dubbed-Full-Action.jpg",
//   "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies4.png",
//   "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies4.png",
//   "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies4.png",
//   "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies9.png",
//   "https://phando021.s.llnwi.net/public/upload/news/story_mul_image_1611817900_2.jpg",
//   "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies8.png",
// ];

// let slideshow = document.getElementById("slideshow");
// let i = 0;
// id = setInterval(function () {
//   if (i === slid.length) {
//     i = 0;
//   }
//   let image = slid[i];
//   slideshow.innerHTML = null;
//   let img = document.createElement("img");
//   img.src = image;

//   slideshow.append(img);

//   i++;
// }, 2000);



const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
} 
