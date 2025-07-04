import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    { id: 1, href: '/projects/crude-intelligence', src: 'https://res.cloudinary.com/dyivstfjt/image/upload/v1751639850/oil-rig_jqhgfg.avif', alt: 'Project 1', title: 'Crude Intelligence'},
    { id: 2, href: '/projects/economiq', src: 'https://res.cloudinary.com/dyivstfjt/image/upload/v1751639849/economy_afaan6.jpg', alt: 'Project 2', title: 'EconomIQ Analytics' },
    { id: 3, href: '/projects/pasadena-tribune', src: 'https://res.cloudinary.com/dyivstfjt/image/upload/v1751639850/news_yspmxw.jpg', alt: 'Project 3', title: 'Pasadena Tribune' },
    { id: 4, href: '/projects/control-panel', src: 'https://res.cloudinary.com/dyivstfjt/image/upload/v1751639852/user_zbsfwc.avif', alt: 'Project 4', title: 'Knowledge Base Control Panel' },
    { id: 5, href: '/projects/magis-web-services', src: 'https://res.cloudinary.com/dyivstfjt/image/upload/v1751639853/web-services_uow1za.avif', alt: 'Project 5', title: 'Magis Web Services' },
    { id: 6, href: '/projects/crown-invoice', src: 'https://res.cloudinary.com/dyivstfjt/image/upload/v1751639848/invoice_qscpps.avif', alt: 'Project 6', title: 'Crown Invoice' },
  ];

  return (
    <div className={style.container}>
      <h1 className={style.title}>Projects</h1>
      <div className={style.grid}>
        {projects.map((project) => (
            <div key={project.id} className={style.gridItem}>
            <Link href={project.href}>
                <div className={style.imageWrapper}>
                <img
                    src={project.src}
                    alt={project.alt}
                    className={style.image}
                />
                <div className={style.overlay}></div>
                 <div className={style.overlayText}><h1>{project.title}</h1></div>
                </div>
            </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;