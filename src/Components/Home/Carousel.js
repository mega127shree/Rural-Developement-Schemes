import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HomeCarousel = () => {
    const imagesName = ["home","homepic","pragatischolarship","Scholarship2"];
    return ( 
        <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} showThumbs={false}>
            {
                imagesName.map((name)=>{
                    const img = require(`./images/${name}.jpg`);
                    return(
                        <img className="carousel_Image" src={img} alt=""/> 
                    )
                })
            }
        </Carousel>
     );
}
 
export default HomeCarousel;