import Swal from "sweetalert2";

const GetAQuote = () => {

    const handleEvent = e =>{
        e.preventDefault();
        

        Swal.fire(
            'Thank you for your response',
            'We will contact you as soon as possible',
            'success'
          )
    }


    return (
        <div className="mt-20 pt-10 pb-20">
            
            <h2 className="text-2xl text-center font-semibold mb-4">Get A Quote Today</h2>
            <div className="max-w-md mx-auto bg-white rounded p-6 shadow-lg">
      

      <form onSubmit={handleEvent} method="post">
        <div className="mb-4">
         
          <input
            type="text" id="name" name="name" className="border border-gray-300 p-2 w-full rounded-lg" placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          
          <input
            type="email" id="email" name="email" className="border border-gray-300 p-2 w-full rounded-lg" placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          
          <textarea
            id="message" name="message" className="border border-gray-300 p-2 w-full rounded-lg"
            placeholder="Your Message" rows="4"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg
             hover:bg-blue-700 w-full">Submit
          </button>
        </div>
      </form>
    </div>

        </div>
    );
};

export default GetAQuote;