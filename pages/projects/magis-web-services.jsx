import Layout from "../../components/Layout";
import styles from "../../styles/Magis.module.css";
import Head from 'next/head';

export default function ProjectPage() {
  return (
    <>
      <Head>        
        <title>Gerardo Sanchez - Magis Web Services</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
      <div className={styles.container}>
        <div className = {styles.topContainer}>
          <h1>Magis Web Services</h1>
          <div className={styles.imageContainer}>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751639195/mws1_vynskf.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>
            <div className={styles.imageLinks}>
              <span>Links:</span>
              <a href="https://magiswebservices.com" target="_blank">Live Site</a>
              <a href="https://github.com/sanchezwebdev/magis" target="_blank">Github Codebase</a>
            </div>
          </div>
            <p>This single-page application is a polished, modern website for Magis Web Services, a web development services provider. Built with HTML, CSS, and JavaScript on top of a premade template, it was heavily customized to emphasize design quality and user engagement. The site showcases services in responsive design, mobile-first layouts, content management, eCommerce, SEO, and maintenance. A dynamic portfolio section highlights various sample website styles, allowing potential clients to explore design options or envision fully custom builds. <br /><br />
              
            The striking masthead uses a looping background video to immediately capture visitors’ attention, reinforcing a cutting-edge brand image. A fully functional contact form is integrated with EmailJS, enabling direct email notifications for each inquiry without backend server setup. Smooth scrolling, interactive modals, and animated elements provide an engaging, seamless experience across devices. Overall, this site exemplifies a strong, conversion-focused presence designed to attract and convert clients looking for premium web development services.<br /><br /><strong>Tech Stack: </strong> HTML, CSS, Javascript, EmailJS</p>

        </div>
          <div className={styles.featuresContainer}>
            <h2>Key Features Include</h2><br />
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Interactive Showcase</h3>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751639254/mws3_f8it2t.mkv"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>
              <p>This single-page application highlights an immersive, modern approach to showcasing work while making it easy for visitors to engage. The interactive portfolio grid features visually striking sample websites, each opening in dynamic modals that give users an immediate, detailed look without leaving the page. <br /><br />
                
              Throught the integrated EmailJS contact form, visitors can instantly reach out to the team. The form includes real-time validation and smooth success/error feedback, providing a polished, responsive experience that builds trust. Under the hood, JavaScript manages form data, ensures accessibility, and handles dynamic navbar behavior for an elegant, fluid browsing experience. Together, these features create a professional, conversion-focused section that not only inspires visitors but actively encourages them to start a conversation — all in one cohesive, user-friendly flow.</p>
            </div>
          </div>
      
        <div className={styles.devNotes}>
          <h2>Development Notes</h2><br />

          <p>Building this application came with its share of tricky but rewarding challenges. One of the biggest priorities was making sure the navigation felt smooth and intuitive, which meant setting up a dynamic navbar that reacts to scrolling and highlights the current section. <br /><br />
            
          The portfolio grid and modal system needed careful handling to keep the experience seamless and avoid page jumps or awkward refreshes when users explore project samples. On the technical side, the contact form required custom validation to guide users clearly while connecting securely to EmailJS for instant email notifications. Balancing performance with visual appeal — like the background video and animations — was also key to keeping the site fast and engaging across all devices.</p>
        </div>
      </div>
      <br />
      <br />
      </Layout>
    </>
  );
}
