import Marquee from "react-fast-marquee";



const ImageGallery = () => {
    return (
        <div className="pb-10">
            <Marquee pauseOnHover={true}>
  <img className="w-[60vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/happybd-small.jpg" alt="" />
  <img className="w-[60vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/Aniversary-big.jpg" alt="" />
  <img className="w-[60vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/Engagement-small.jpg" alt="" />
  <img className="w-[60vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/Retirement-party-small-big.jpg" alt="" />
  <img className="w-[60vh] mr-2" src="https://ebook.projectbd.com/wp-content/uploads/2023/10/baby-shower-big.jpg" alt="" />
</Marquee>
        </div>
    );
};

export default ImageGallery;