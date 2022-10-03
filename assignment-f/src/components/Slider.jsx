import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../components/Slider.module.css";
let slid = [
  "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies3.png",
  "https://www.pensivly.com/wp-content/uploads/2020/04/THE-WITCHER-2019-Hollywood-Movies-in-Hindi-Dubbed-Full-Action.jpg",
  "https://www.pensivly.com/wp-content/uploads/2020/04/THE-WITCHER-2019-Hollywood-Movies-in-Hindi-Dubbed-Full-Action.jpg",
  "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies4.png",
  "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies4.png",
  "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies4.png",
  "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies9.png",
  "https://phando021.s.llnwi.net/public/upload/news/story_mul_image_1611817900_2.jpg",
//   "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-action-movies8.png",
];
function Slider() {
  const [image, setimage] = useState(0);
  useEffect(() => {
    let sliders = setInterval(function () {
      setimage((prev) => (prev < slid.length ? prev + 1 : (prev = 0)));
    }, 2000);
    return 
  }, []);
  return (
    <div className={styles.conatiner}>
      <img className={styles.image} src={slid[image]} alt="image" />
    </div>
  );
}

export default Slider;
