import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LogoPlan from "../assets/muestra.png";
import WeightPlan from '../componentes/WeightPlan';
import { Navigation } from "swiper";
import whPlan from "../assets/whPlan.jpg"
const SwiperWeightPlan = () => {
    return (
        <>
            <Swiper
                slidesPerView={3} spaceBetween={20} loop={true}
                navigation={true} modules={[Navigation]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <WeightPlan title="Weight loss plan" logo={LogoPlan} text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds" img={whPlan} />
                </SwiperSlide>
                <SwiperSlide>
                    <WeightPlan title="Weight loss plan" logo={LogoPlan} text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds" img={whPlan} />
                </SwiperSlide>
                <SwiperSlide>
                    <WeightPlan title="Weight loss plan" logo={LogoPlan} text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds" img={whPlan} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperWeightPlan;