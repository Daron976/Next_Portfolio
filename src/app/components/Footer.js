import { BsMeta } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { v4 } from "uuid";
import Link from "next/link";

export default function Footer() {
  const iconItems = [
    {
      id: v4(),
      link: "https://www.linkedin.com/in/daronkwiafe/",
      icon: <FaLinkedinIn />,
    },
    {
      id: v4(),
      link: "https://github.com/Daron976",
      icon: <FaGithub />,
    },
    {
      id: v4(),
      link: "https://wellfound.com/u/daronkwiafe",
      icon: <SiWellfound />,
    },
    {
      id: v4(),
      link: "https://www.facebook.com/daron.wiafe",
      icon: <BsMeta />,
    },
    {
      id: v4(),
      link: "https://twitter.com/WiafeDaron",
      icon: <FaXTwitter />,
    },
    {
      id: v4(),
      link: "https://www.instagram.com/sagineer976/",
      icon: <BsInstagram />,
    },
  ];

  return (
    <>
      <footer>
        <div className="social-links">
          <ul className="flex">
            {iconItems.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="social-icon flex">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
          <div className="footer-text">
            <p>
              <span className="email">daronkwiafe@gmail.com</span>
              <span className="separator firstSep"> | </span>
              <span className="phone">+27 65 747 8746</span>
              <span className="separator secSep"> | </span>
              <span className="location">Sandton, South Africa </span>
            </p>
            <p>©2023 Daron Wiafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
