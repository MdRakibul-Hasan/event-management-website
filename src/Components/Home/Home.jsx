import { useLoaderData } from "react-router-dom";
import Cards from "./cards";
import Offer from "../Offer/Offer";
import ImageGallery from "./ImageGallery";
'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Sponser from "./Sponser";


const Home = () => {

const cards = useLoaderData();
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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

<div className="flex justify-center">
<div className=" bg-white py-6 w-[50%] mx-auto rounded-full shadow-xl -mt-14 z-10 absolute max-md:w-[75%]">
        <h2 className=" text-blue-600 text-center font-bold text-xl max-md:text-base">Creating Magic, One Event at a Time: <br /> Your Event Specialists</h2>
    </div>
</div>
    


{/* count down offers */}
<Offer></Offer>


{/* service card start here */}

<div><h2 className="text-center font-bold text-3xl my-12">Our Services</h2></div>
            <div  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="grid grid-cols-2 gap-8 px-16 pb-10 max-md:grid-cols-1">
                {cards.map((card) => <Cards key={card.id} card={card}></Cards>)}
            </div>
            
{/* our sponser */}

<div className=" bg-white">
<h2 className="text-center font-bold text-2xl mt-12 mb-4">Our Sponsors </h2>
    <Sponser></Sponser>
</div>

<div className="flex justify-between px-6 gap-6 items-center h-[80vh] max-md:flex-col max-md:h-[95vh] max-md:py-10 bg-[url('https://ebook.projectbd.com/wp-content/uploads/2023/10/background-image.jpg')] bg-cover">
<img data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-[40%] rounded-md" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/events-bg.png" alt="" />
<div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="px-4">
    <h2 className=" text-white text-2xl font-bold max-md:text-xl">Crafting Unforgettable Moments: <br />Your Premier Event Planner</h2>
    <p className=" text-white pb-4">At www.event.com, we are dedicated to turning your special moments into unforgettable memories. As your premier event planner, we bring creativity, precision, and a touch of magic to every celebration.</p>
</div>

</div>



{/* image gallery starts */}
<div><h2 className="text-center font-bold text-3xl mt-12 mb-10">Event Gallery </h2></div>
<div data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"><ImageGallery></ImageGallery></div>


        </div>
    );
};

export default Home;