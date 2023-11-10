import { HiOutlineHome } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineCases } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { v4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo_images/logo.png";

const iconItems = [
  {
    id: v4(),
    link: "/",
    icon: <HiOutlineHome />,
  },
  {
    id: v4(),
    link: "/about",
    icon: <SiAboutdotme />,
  },
  {
    id: v4(),
    link: "/portfolio",
    icon: <MdOutlineCases />,
  },
  {
    id: v4(),
    link: "/contact",
    icon: <RiContactsFill />,
  },
];

export default function Header() {
  return (
    <>
      <header>
        <nav className="desktop-header">
          <div className="imgContainer">
            <Image src={logo} width={88} height={80} alt="logo" />
          </div>
          <div className="flex menu-container transition">
            <ul className="desktop-menu flex transition">
              {iconItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="nav-icon flex">
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
