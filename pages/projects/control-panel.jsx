import Layout from "../../components/Layout";
import styles from "../../styles/ControlPanel.module.css";
import Image from 'next/image'
import Head from 'next/head';

export default function ProjectPage() {

  const src = "https://res.cloudinary.com/dyivstfjt/image/upload/v1751635361/pic_cp1_jxdcam.png";
  const blurSrc = "https://res.cloudinary.com/dyivstfjt/image/upload/e_blur:50,q_1,w_20/v1751635361/pic_cp1_jxdcam.png";
  return (
    <>
      <Head>        
        <title>Gerardo Sanchez - Knowledge Base Control Panel</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dyivstfjt/image/upload/v1751635361/pic_cp1_jxdcam.png"
        />
      </Head>
      <Layout>
      <div className={styles.container}>
        <div className = {styles.topContainer}>
          <h1>Knowledge Base Control Panel</h1>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={src}
              alt=""
              width={1200}    
              height={800}   
              placeholder="blur"
              blurDataURL={blurSrc}
            />
            <div className={styles.imageLinks}>
              <span>Links:</span>
              <a href="https://controlpanel.gerardosanchez.dev" target="_blank">Live Site</a>
              <a href="https://github.com/sanchezwebdev/control-panel" target="_blank">Github Codebase</a>
            </div>
          </div>
            <p>The control panel for Knowledge of the West is a custom-built Next.js and React application designed to manage a comprehensive, Wikipedia-like knowledge base focused on Western cultural and intellectual history. It covers a wide range of topics including history, philosophy, science, music, and more. The application provides administrators with a streamlined interface to manage thousands of entries, each enriched with text, images, and audio files.<br /><br />

            All data is stored in a MySQL database hosted on a Windows VPS, with many of the underlying tables modeled after WordPress’s backend structure for familiarity and extensibility. Media assets such as images and audio are uploaded, updated, and deleted through dedicated Express.js CRUD API routes running on the VPS. This setup ensures efficient and secure media handling, separate from the main application layer.<br /><br />

            The public-facing site, hosted on Vercel, allows users to search for entries by title and filter results by author, category, and historical period, making the massive content library easily navigable. Access to the control panel and certain protected parts of the site is secured using JWT (JSON Web Tokens) and bcrypt, providing robust authentication and password hashing.<br /><br />

            Overall, the system combines modern frontend frameworks with a scalable and secure backend architecture. It balances user-friendly content management for administrators with powerful search and filtering tools for visitors, all while maintaining strong security practices and efficient media handling.<br /><br />
          
          <strong>Tech Stack: </strong> Next.js, React, MySQL, Bootstrap, Windows VPS, Express.js, Node.js, Rich Text Editor
            
            </p>

        </div>
          <div className={styles.featuresContainer}>
            <h2>Key Features Include</h2><br />
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Rich Text Authoring</h3>          
              <a href=""><img className={styles.image} src="https://res.cloudinary.com/dyivstfjt/image/upload/v1751635362/pic_cp3_gexrw2.png" alt="" /></a>
              
            <p>The editor page is the most feature-rich part of the Knowledge of the West control panel. After running a search on the landing page, administrators can double-click an entry to open it in the editor. At the top, they see the entry title along with a toggle button to switch between editor mode (where content can be modified) and an HTML preview (showing exactly how the article will render on the live site). This immediate toggling helps authors maintain full awareness of how their edits will appear publicly, minimizing surprises or formatting mismatches.<br /><br />
            At the heart of this page is a powerful rich text editor (RTE) from richtexteditor.com, providing comprehensive formatting capabilities including text styling, headings, tables, images, embedded audio, and other media assets. Editors have the freedom to build highly customized layouts, integrate visuals, and craft complex, well-structured articles without any external tools. This robust toolset supports advanced features like nested lists, quotes, links, and direct HTML editing when necessary, giving contributors creative freedom and fine-grained control. The same RTE is also planned for the public-facing site, enabling community contributors and curators to write and edit with the exact same level of power and flexibility as administrators. This unified editing experience fosters consistency in article quality and layout across the entire knowledge base.<br /><br />

            A particularly intricate feature is image handling. By default, the RTE encodes images as base64 strings inside the markup. In the API layer, a dedicated system extracts these base64 images using regex, assigns them unique filenames, and sends them in POST requests to an Express server on the VPS, which stores them to the file system. Once stored, the markup is automatically updated to reference the final image URLs instead of the base64 data. When images are removed during editing, the system compares the original content against the edited version, detects any images no longer present, and sends delete requests to the server to remove these files — keeping the file system tidy and preventing the buildup of unused assets.<br /><br />

            This sytem empowers authors to deliver polished, visually engaging, and structurally sound entries. The editor also supports assigning historical periods and adding hyperlinks, further enriching metadata and enabling detailed cross-referencing. Altogether, the editor page offers unmatched creative freedom, sophisticated media processing, and meticulous content management — key elements for supporting a living, ever-expanding knowledge base.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Dynamic Category Selector</h3>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751639113/cp1_yze8gc.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>  
              <p>The category selector is a critical tool that allows editors to assign articles to one or multiple paths within a complex hierarchical structure. It uses a self-referential table in the database to represent parent-child relationships, enabling a deeply nested tree of categories. When the editor page loads, a hook fetches the entire category tree and initializes paths based on any pre-assigned categories.<br /><br />

              The UI is designed as a dynamic breadcrumb-style navigator. As the user clicks through categories, their selections are tracked in a pathStack and selectedCategoryIds arrays. Each breadcrumb button represents a level in the path and allows the user to jump back up the tree by slicing the stack to the chosen point. “Clear Selection” resets the state entirely, providing an easy way to start over.<br /><br />

              A key feature is support for multiple independent selectors on a single entry. Editors can add several paths to the same article, ensuring it appears under various relevant branches (for example, both “Music → Classical” and “Philosophy → Aesthetics”). Each selector is self-contained and tracks its own path.<br /><br />

              Whenever a path changes, a callback is triggered, updating the parent component with current selections. This flexible design ensures rich, precise categorization while keeping the UX intuitive and manageable.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Category Management System</h3>
              <a href=""><img className={styles.image} src="https://res.cloudinary.com/dyivstfjt/image/upload/v1751635361/pic_cp2_a1j9gx.png" alt="" /></a>
              <p>The Knowledge of the West control panel includes a dedicated category manager, a powerful tool designed to maintain and organize the site's extensive taxonomy. This system supports a self-referential hierarchical structure, allowing administrators to build a deep and flexible category tree capable of capturing complex relationships across historical, philosophical, scientific, and cultural domains.<br /><br />

              At its core, the category manager interface allows the creation of both top-level categories and nested subcategories, with constraints to prevent trees from exceeding five levels deep, preserving manageability and intuitive navigation. Administrators can easily create new categories, assign parent-child relationships, and ensure unique names with built-in duplicate checks and minimum-length validations. All operations are accompanied by clear modal feedback messages, guiding users through successes or errors with informative prompts.<br /><br />

              The backend logic employs a recursive deletion mechanism that ensures when a parent category is deleted, all of its descendant categories are also removed in a single, thorough sweep, preventing orphaned records and maintaining database integrity. The system leverages MySQL, supporting GET, POST, PUT, and DELETE operations. Each action dynamically refreshes the category list after a short delay, giving administrators up-to-date views without manual reloads.<br /><br />

              Beyond creation and deletion, the editor allows renaming categories with instant feedback and seamless integration into the database. Administrators can search through categories via select inputs and update names efficiently. The combination of cookie-based JWT authentication and server-side verification ensures that only authorized users can access these critical taxonomy tools.<br /><br />

              Altogether, this category manager empowers editors to define precise category paths, enforce structural rules, and maintain the evolving organizational backbone of the knowledge base. It provides the foundation for robust content discovery and supports the flexible cross-tagging logic used throughout Knowledge of the West, bridging editorial freedom with structural coherence </p>
            </div>
          </div>
      
        <div className={styles.devNotes}>
          <h2>Development Notes</h2><br />

          <p>Building this application involved a range of intricate technical challenges. One major hurdle was designing a flexible yet intuitive category system that supports deeply nested hierarchies while preventing infinite recursion and excessive depth — all while keeping the user experience smooth and error-resistant. <br /><br />
            
          Handling media uploads, particularly images encoded in base64, required careful parsing, secure server-side processing, and cleanup mechanisms to avoid orphaned files cluttering the VPS. Integrating the rich text editor while preserving markup consistency across both admin and user-facing interfaces posed additional complexity, especially when dynamically rendering content stored in the database. Managing authentication securely using JWT and bcrypt, and protecting editor and management routes, was also crucial to ensure data integrity. <br /><br />
          
          Finally, coordinating seamless communication between Next.js, the Express CRUD server, and the MySQL database demanded precise API design and robust error handling to maintain reliability and responsiveness throughout the system.<br /><br /></p>
        </div>
      </div>
      <br />
      <br />
      </Layout>
    </>
  );
}
