import { useLoaderData } from "react-router-dom";
import Cards from "./cards";
'use client';


const Home = () => {

const cards = useLoaderData();


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

            <div className="grid grid-cols-2 gap-8 px-16 pb-10 max-md:grid-cols-1">
                {cards.map((card) => <Cards key={card.id} card={card}></Cards>)}
            </div>
            
        </div>
    );
};

export default Home;