import style from "../styles/Collaborate.module.css";
import { BiMessageDetail } from "react-icons/bi";
import Link from "next/link";

const Collaborate = () => {
  return (
    <div className={style.container}>
      <h2 className={style.header}>Interested in collaborating with me?</h2>
      <h3 className={style.subheader}>I'm always open to discussing work or partnership opportunities</h3>
      <Link href="/contact" className={style.link}><button className={style.contactBtn}>
      <BiMessageDetail />
        Start a conversation
        </button>
        </Link>
    </div>
  );
};

export default Collaborate;
