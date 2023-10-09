import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div>
            <div className="py-8 my-24 px-12">
      <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
      <p>
        Welcome to{' '}
        <Link to="/"><a href="#" className="text-blue-500 hover:underline">
          www.event.com
        </a></Link>
        . This privacy policy outlines how we collect, use, and protect your personal information. By accessing this website and using our services, you consent to the terms and practices described in this policy.
      </p>
      <p>
        We may update this privacy policy from time to time, so please review it periodically. Your continued use of our website and services after any changes are made constitutes your acceptance of the updated policy.
      </p>
      <h3 className="text-xl font-semibold mt-4">Information We Collect</h3>
      <p>
        We collect and store personal information, including but not limited to your name, email address, and contact details, to provide our event planning services and communicate with you.
      </p>
      
      <h3 className="text-xl font-semibold mt-4">Contact Information</h3>
      <p>
        If you have any questions or concerns regarding our privacy policy, please contact us at{' '}
        <a href="mailto:event@event.com" className="text-blue-500 hover:underline">
          event@event.com
        </a>
        .
      </p>
      <p>
        Your privacy is important to us, and we are committed to protecting your personal information as we help you celebrate your special moments.
      </p>
    </div>
        </div>
    );
};

export default PrivacyPolicy;