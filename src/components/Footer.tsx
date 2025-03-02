
import { MdEmail } from 'react-icons/md'; // Import the email icon
import photo from '../../public/photo.jpeg';

const Footer = () => {
  const portfolioUrl = 'https://akashs-portfolio.onrender.com/'; // Replace with your portfolio URL
  const emailAddress = 'mailto:aakash10aj@gmail.com'; // Replace with your email

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 border-t border-gray-200 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Portfolio Image */}
        <div className="flex justify-center flex-1">
          <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={photo} // Replace with your image URL
              alt="Portfolio"
              className="w-12 h-12 rounded-full"
            />
          </a>
        </div>

        {/* Center: Copyright */}
        <div className="flex justify-center flex-1">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Your Todo App. All rights reserved.
          </p>
        </div>

        {/* Right: Contact Me */}
        <div className="flex justify-center flex-1">
            
          <a
            href={emailAddress}
            className="flex items-center text-sm text-gray-700 hover:text-gray-900"
          >
            <MdEmail className="mr-2 text-xl" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;