import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="font-inter">
      <div className="flex h-[200px]  text-white">
        <div className="bg-[#1F2937] w-full text-center py-5">
          <h2 className="text-3xl font-medium mb-3">Contact Us</h2>
          <div className="space-y-1">
          <p>395 West Shewrapara, Mirpur, Dhaka</p>
          <p>+8801786-249860</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
          <p></p>
          </div>
        </div>

        <div className="bg-[#111827] w-full text-center py-5">
        <h2 className="text-3xl font-medium mb-3">Follow Us</h2>
        <p>Join us on socila media</p>
        <div className="flex gap-3 text-3xl justify-center mt-5">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
        </div>
        </div>
      </div>
      <div className=" text-white footer-center p-4 bg-[#151515] font-medium">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
