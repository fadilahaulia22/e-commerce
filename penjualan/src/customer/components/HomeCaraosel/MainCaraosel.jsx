import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { mainCaraoselData } from "./MainCaraoselData";

const MainCarousel = () => {
    const items = mainCaraoselData.map((item) => <img className="cursor-pointer -z-10" role="presentation" src={item.image} alt="" />)

    return(
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
}
export default MainCarousel;
