import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import './PhotoStyles.css';
import { Pagination } from 'swiper/modules';
import photo1 from "../../assets/photos/photo1.jpg"
import photo2 from "../../assets/photos/photo2.jpg"
import photo3 from "../../assets/photos/photo3.png"
import photo4 from "../../assets/photos/photo4.jpg"

const Photos = () => {
    return (
        <>

            <h3 className="text-center font-bold text-xl mt-10 mb-10">Photos</h3>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={photo1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={photo4} alt=""/>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Photos;