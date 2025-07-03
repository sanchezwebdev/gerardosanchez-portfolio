import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    { id: 1, href: '/projects/crude-intelligence', src: '/grid_images/oil-rig.avif', alt: 'Project 1', title: 'Crude Intelligence'},
    { id: 2, href: '/projects/economiq', src: '/grid_images/economy.jpg', alt: 'Project 2', title: 'EconomIQ Analytics' },
    { id: 3, href: '/projects/pasadena-tribune', src: '/grid_images/news.jpg', alt: 'Project 3', title: 'Pasadena Tribune' },
    { id: 4, href: '/projects/control-panel', src: '/grid_images/user.avif', alt: 'Project 4', title: 'Knowledge Base Control Panel' },
    { id: 5, href: '/projects/magis-web-services', src: '/grid_images/web-services.avif', alt: 'Project 5', title: 'Magis Web Services' },
    { id: 6, href: '/projects/crown-invoice', src: '/grid_images/invoice.avif', alt: 'Project 6', title: 'Crown Invoice' },
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