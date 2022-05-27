import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategorySectionCard from '../componentes/CategorySectionCard';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Category1 from "../assets/category1.jpg";
import Category2 from "../assets/category2.jpg";
import Category3 from "../assets/category3.jpg";
import Category4 from "../assets/category4.jpg";

const SwiperCategoryCard = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <>
            <Swiper
                slidesPerView={innerWidth > 768 ? 4 : 1}
                spaceBetween={20}
                loop={true}
                navigation={true}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                modules={[Navigation]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <CategorySectionCard
                        name="New recipes"
                        img={Category1}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CategorySectionCard
                        name="Low in calories"
                        img={Category2}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CategorySectionCard
                        name="Paleo"
                        img={Category3}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <CategorySectionCard
                        name="High in protein"
                        img={Category4}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperCategoryCard;