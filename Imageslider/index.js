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


const get = function() {
    $("#imageListId").sortable({
        update: function(event, ui) {
                getIdsOfImages();
            } //end update         
    });
};
get()

function getIdsOfImages() {
    var values = [];
    $('.listitemClass').each(function(index) {
        values.push($(this).attr("id")
                    .replace("imageNo", ""));
    });
    $('#outputvalues').val(values);
} 
