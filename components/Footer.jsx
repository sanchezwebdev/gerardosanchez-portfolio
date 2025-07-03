import style from "../styles/Footer.module.css";
import Image from "next/image";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";


const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.innerContainer}>
            <Image className={style.logo} src="/GS2.png" width={1000} height={1000} />
            <p>Digital craftsmanship. <br className={style.break}/>Next level solutions.</p>
            <div className={style.icons}>
            <a href="https://www.linkedin.com/in/sanchezwebdev/" target="_blank" rel="noopener noreferrer" className={style.link}>
                <RiLinkedinLine className={style.icon} /></a>
            <a href="mailto:youremail@example.com" className={style.link}>
                <MdOutlineEmail className={style.icon} />
            </a>
            <a href="https://www.youtube.com/@Gerardo_Sanchez01/videos" target="_blank" rel="noopener noreferrer" className={style.link}>
                <FiYoutube className={style.icon} />
            </a>
            </div>
            <p>Handcrafted by me &copy; 2025</p>
            <div className={style.next}>
                <p>Built with</p>
                <img src="/nextjs.png" alt="" className={style.nextIcon}/>
            </div>
      </div>
    </div>
  );
};


export default Footer;