import Layout from "../../components/Layout";
import styles from "../../styles/Tribune.module.css";
export default function ProjectPage() {
  return (
    <>
      <Layout>
      <div className={styles.container}>
        <div className = {styles.topContainer}>
          <h1>The Pasadena Tribune</h1>
          <div className={styles.imageContainer}>
            <a href=""><img className={styles.image} src="/project_images/pictures/pic_tpt1.png" alt="" /></a>
            <div className={styles.imageLinks}>
              <span>Links:</span>
              <a href="">Live Site</a>
              <a href="">Github Codebase</a>
            </div>
          </div>
            <p>The Pasadena Tribune is an online newspaper application designed to emulate a modern, fully functional news platform. Built using Next.js and React, the site is hosted on Vercel with a MongoDB backend managed through MongoDB Atlas, and images are seamlessly integrated using Contentful as a headless CMS. <br /><br />

            It features 140 AI-generated articles across eight categories including Local News, Politics, Sports, California, and more. The site offers a rich and realistic browsing experience. A major highlight of this project is its sophisticated front-end design, built primarily with custom CSS and extensive use of CSS Grid. Careful implementation of grid layouts and media queries ensures a visually compelling, fully mobile-responsive experience.<br /><br />

            The homepage is thoughtfully structured, beginning with a large featured article, a sidebar for other highlights, followed by trending articles, a spotlight section with interactive hover effects, and a final “More News” grid to showcase diverse stories. This layered design approach emphasizes readability and editorial flow, mirroring real-world news sites.<br /><br />

            Additional features include dynamic routing powered by a custom slug function using regex, and a comprehensive site-wide search function allowing users to search by topic, title, or keywords. Together, these elements create an engaging, interactive, and polished demonstration of modern web development principles — from intuitive UX to robust backend integrations.<br /><br />
          
          <strong>Tech Stack: </strong> Next.js, React, Material UI, MongoDB Atlas, Contentful CMS, Vercel 
            
            </p>

        </div>
          <div className={styles.featuresContainer}>
            <h2>Key Features Include</h2><br />
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Dynamically Generated Articles</h3>
              <a href=""><img className={styles.image} src="/project_images/pictures/pic_tpt2.png" alt="" /></a>
              <p>Articles are dynamically generated using a combination of modern static site generation and dynamic routing. Each article lives at a clean, descriptive URL that includes its category and title, making the site intuitive and SEO-friendly.<br /><br />

              When the site is built, it automatically pulls in all article data and pre-generates a dedicated page for each piece. This ensures lightning-fast performance and a smooth browsing experience for users. Images for each article are fetched from a headless content management system (Contentful) and delivered in an optimized, responsive format to ensure they look great on all devices.<br /><br /></p>

            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Thematic News Categories</h3>
              <a href=""><img className={styles.image} src="/project_images/gifs/tpt5.gif" alt="" /></a>
              <p>The Pasadena Tribune organizes its 140 articles into a set of clearly defined categories — such as Local News, California, Politics, Sports, Arts & Entertainment, and more — to make browsing feel like a true digital newspaper experience.<br /><br />

              When readers navigate to a specific category, they’re presented with a fully customized section that highlights the most relevant stories in a visually structured and engaging way. Each category page features a unique header image, a carefully curated mix of featured stories and supporting articles, and layouts designed to guide the reader’s attention, similar to a real print or major online publication.<br /><br />

              Articles within a category are intelligently positioned using a system of prioritized slots (such as main featured cards and supporting secondary cards). This lets each category feel dynamic and editorially designed rather than simply a plain list of posts.<br /><br />

              The system also makes use of Contentful to pull in high-quality images for both header visuals and individual article thumbnails, contributing to a more immersive, magazine-style look.<br /><br />

              Overall, this feature gives readers an intuitive way to dive deep into topics they care about, while also showcasing the site’s strong design aesthetic, thoughtful layout planning, and smart use of modern content management — all powered by a fast, fully responsive frontend experience. </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Site-wide Search</h3>
              <a href=""><img className={styles.image} src="/project_images/gifs/tpt4.gif" alt="" /></a>
              <p>The application includes a site-wide search feature that allows visitors to quickly find articles by entering keywords, topics, or phrases. Rather than simply browsing through categories, readers can instantly access content that matches their interests — whether they’re looking for a specific headline, a topic mentioned in an article body, or even keywords within an article’s description or tags.<br /><br />

              The search experience is designed to feel smooth and immediate. When a user submits a query, the application filters through the full collection of articles and returns a list of relevant results in real time. Each result preview shows the article’s title, description, and a thumbnail image, making it easy to decide which story to read. Clicking on any result seamlessly navigates the user to that full article page.</p>
            </div>

          </div>
      
        <div className={styles.devNotes}>
          <h2>Development Notes</h2><br />

          <p>The Pasadena Tribune was built with a focus on flexibility, scalability, and strong editorial control. A key architectural choice was to use serverless functions to access MongoDB Atlas, which enables secure, on-demand data fetching without the need for a dedicated backend server. This improves scalability and reduces operational overhead while keeping the application lightweight.<br /><br />

          A custom register system was designed to manage exactly where each article appears on the homepage and category pages. Instead of simply showing articles chronologically, this system lets editors assign specific articles to headline, featured, trending, and other slots, creating a curated, magazine-style presentation. This approach combines editorial freedom with a structured, dynamic layout.<br /><br />

          The design heavily uses CSS Grid and responsive media queries to create a seamless experience across devices. Carefully defined grid areas allow complex layouts — like headline sections, featured columns, trending blocks, and multi-column spotlights — to adjust smoothly from desktop to mobile, maintaining clear hierarchy and visual appeal.<br /><br />

          Future improvements include enhancing the search feature with a tag-based system for more precise filtering and considering a shift to GraphQL to enable more efficient, flexible data queries. Additionally, consolidating the current two API folders into a unified structure would improve maintainability and simplify development.</p>
        </div>
      </div>
      <br />
      <br />
      </Layout>
    </>
  );
}
