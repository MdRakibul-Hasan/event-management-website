import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

const AboutUs = () => {
    return (
        <div><Helmet><title>About Us</title></Helmet>
            <div>

                <div className="py-8 my-24 px-12">
      <h2 className="text-3xl font-semibold mb-4">About Us</h2>
      <p>
        Welcome to{' '}
        <Link to="/"><a href="#" className="text-blue-500 hover:underline">
          www.event.com
        </a></Link>
        , your premier destination for creating memorable social events that last a lifetime. We are passionate about bringing your dreams to life and crafting experiences that leave a lasting impression on you and your guests.
      </p>
      <p>
        At www.event.com, we understand that every event is unique and special. With a dedicated team of event planners and a wealth of experience, we are committed to making your vision a reality. Whether you're celebrating a wedding, birthday, anniversary, engagement, retirement, or a baby shower, we have the expertise to turn your ideas into extraordinary celebrations.
      </p>
      <h3 className="text-xl font-semibold mt-4">Our Services</h3>
      <ul className="list-disc pl-6 mt-2">
        <li>
          <strong>Wedding Parties:</strong> Your love story deserves a celebration that reflects your unique bond. We specialize in creating romantic, enchanting weddings that capture the essence of your journey together.
        </li>
        <li>
          <strong>Birthday Parties:</strong> Make each birthday unforgettable with our creative and fun-filled party planning. Whether it's a milestone birthday or an intimate gathering, we'll ensure it's a day to remember.
        </li>
        <li>
          <strong>Anniversary Celebrations:</strong> Commemorate your journey together with an anniversary celebration that rekindles your love. We create elegant and heartfelt events to mark each year of your union.
        </li>
        <li>
          <strong>Engagement Parties:</strong> Begin your journey to "I do" with a memorable engagement party. We'll help you set the stage for your upcoming wedding and create beautiful memories along the way.
        </li>
        <li>
          <strong>Retirement Parties:</strong> Celebrate a successful career and the beginning of a new chapter with a retirement party that honors your achievements and embraces the future.
        </li>
        <li>
          <strong>Baby Showers:</strong> Welcome a new addition to your family with joy and excitement. Our baby shower planning will ensure this special moment is filled with love and anticipation.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mt-4">Contact Us</h3>
      <p>
        Have questions or ready to start planning your next event? Reach out to us at{' '}
        <a href="mailto:event@event.com" className="text-blue-500 hover:underline">
          event@event.com
        </a>
        . Our dedicated team is here to assist you in creating the perfect social event that reflects your style and personality.
      </p>
      <p>
        Let us be a part of your special moments, and together, we'll make memories that last a lifetime.
      </p>
    </div>
            </div>
        </div>
    );
};

export default AboutUs;