import { useLoaderData } from "react-router-dom";
import Cards from "./cards";
import Offer from "../Offer/Offer";
import ImageGallery from "./ImageGallery";
'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

const cards = useLoaderData();
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let greeting;
greetign = {};
console.log(greetign);

    return (
        <div>

           <div>
            <div className="carousel w-full h-[95vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/slider1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/slider2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/slider3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://ebook.projectbd.com/wp-content/uploads/2023/10/slider4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
{/* Carosel end here */}

{/* count down offers */}
<Offer></Offer>


{/* service card start here */}

<div><h2 className="text-center font-bold text-3xl my-12">Our Services</h2></div>
            <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="grid grid-cols-2 gap-8 px-16 pb-10 max-md:grid-cols-1">
                {cards.map((card) => <Cards key={card.id} card={card}></Cards>)}
            </div>
            
{/* image gallery starts */}
<div><h2 className="text-center font-bold text-3xl mt-12 mb-10">Event Gallery </h2></div>
<div data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><ImageGallery></ImageGallery></div>


        </div>
    );
};

export default Home;