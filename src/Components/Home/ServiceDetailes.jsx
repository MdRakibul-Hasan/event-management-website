import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceDetailes = () => {
const serviceDetailes = useLoaderData()
const {id} = useParams();
const idInt = parseInt(id);

const handleClick = () =>{
    Swal.fire(
        'Thank you for your interest',
        'We will contact you soon',
        'success'
      )
}


const ServiceDetail = serviceDetailes.find(ServiceDetail => ServiceDetail.id === idInt);

const {image, price, title, description} = ServiceDetail || {}

    return (
        <div>
<div className="flex justify-center pt-12 mt-8 ">
    <img className="w-[80%] rounded-lg h-[auto] " src={image} alt="" /> 
</div>
<h2 className="font-bold text-2xl text-center pt-5">{title}</h2>
<p className="font-medium text-base px-24 text-justify pt-5">{description}</p>
<h2 className="font-bold text-lg text-center pt-5">Price: {price}$</h2>
<div className="flex justify-center pt-8 pb-16"><button onClick={handleClick} className="px-8 py-3 rounded-lg border-2 bg-blue-600 font-bold text-white hover:bg-blue-800">Buy This Service</button></div>
        </div>
    );
};

export default ServiceDetailes;