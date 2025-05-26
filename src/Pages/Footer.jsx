import { Link } from 'react-scroll';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anshu-patidar-478652228/', icon: <FaLinkedin /> },
  { name: 'Instagram', url: 'https://www.instagram.com/your-profile', icon: <FaInstagram /> },
];

function Footer() {
  const links = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <footer className="w-full min-h-52 bg-black text-white py-6 flex flex-col items-center justify-center gap-6">
      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
        
        {links.map((link) => (
          <Link
            key={link}
            to={link}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-blue-400 transition-colors duration-300 capitalize"
          >
            {link}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center gap-6 text-xl">
        {socialLinks.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
            aria-label={name}
          >
            {icon}
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Anshu. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
