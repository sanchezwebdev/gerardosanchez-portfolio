import Layout from "../../components/Layout";
import styles from "../../styles/CrudeIntelligence.module.css";
import Head from 'next/head'
import Image from 'next/image'

export default function ProjectPage() {  
  const src = "https://res.cloudinary.com/dyivstfjt/image/upload/v1751635361/pic_ci1_tkuzwq.png";
  const blurSrc = "https://res.cloudinary.com/dyivstfjt/image/upload/e_blur:50,q_1,w_20/v1751635361/pic_ci1_tkuzwq.png";
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="https://res.cloudinary.com/dyivstfjt/image/upload/v1751635361/pic_ci1_tkuzwq.png" />
      </Head>
      <Layout>
      <div className={styles.container}>
        <div className = {styles.topContainer}>
          <h1>Crude Intelligence</h1>
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
              <a href="">Live Site</a>
              <a href="">Github Codebase</a>
            </div>
          </div>
            <p>Crude Intelligence is a full-stack web application that explores complex trends in the global oil industry through data analytics and visualization. Built with Django, PostgreSQL, and Plotly, this project showcases the full lifecycle of data-driven development—from ingesting and structuring real-world data to designing interactive, user-friendly visual outputs.<br /><br />        

            The dashboard integrates a variety of datasets sourced from Kaggle, covering topics such as global oil reserves and consumption (from 1965 to 2023), U.S. pipeline mileage, oil production and spills, accident-related costs and injuries, oil prices, and country-by-country trade flows. <br /><br />
              
            These datasets were stored in a PostgreSQL database using Supabase, and modeled in Django using introspection. I began by using Python to convert the raw CSV files from Kaggle into SQL scripts. I then set up a PostgreSQL instance on Supabase and ran the SQL scripts against the database using a connection from pgAdmin. Finally, I connected the Django application to the deployed database, enabling it to leverage a scalable, managed backend in production.<br /><br />       

          A standout feature of the application is its downloadable charts. In certain cases, users can select and highlight a specific region of a chart and download just that portion, a capability supported by Plotly’s built-in tools. Charts are generated using Plotly within Django views. Each view establishes a database connection, retrieves the required data, and configures the Plotly chart to visually represent that data. On the front end, JavaScript enhances user interactivity, allowing for dynamic chart exploration and custom downloads.<br /><br />

          The application’s styling combines custom CSS with Bootstrap classes and icons, creating a clean and responsive user interface while maintaining flexibility for custom design elements.<br /><br />
          
          <strong>Tech Stack: </strong> Django, Plotly, PostgreSQL, Supabase, Heroku 
            
            </p>

        </div>
          <div className={styles.featuresContainer}>
            <h2>Key Features Include</h2><br />
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Interactive Charts</h3>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751638116/ci2_c1mp4c.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>
              <p>Every chart in this application is interactive. In some cases, this interactivity consists of tooltips that appear on hover to provide additional context. In other cases, users can customize what information is displayed directly on the chart. <br /><br />

              For example, the choropleth map on the left visualizes pipeline spills using shades of red, where darker tones represent higher values. By default, it displays incidents per 1,000 miles of pipeline per state. Users can choose from alternative metrics, such as total spillage or spills by cause. When "spills by cause" is selected, an additional dropdown appears, allowing users to further refine the data by selecting a specific cause. In each scenario, the map dynamically updates its color scale to reflect the chosen metric, providing a flexible and informative visualization experience.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Interactive Analysis</h3>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751638199/ci3_fk5xrd.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>
              <p>The application includes several interactive analysis tools that allow users to explore and understand data in a flexible, user-driven way. The Spills Cost Analysis page shown on the right offers an interactive, data-driven breakdown of pipeline spill costs across multiple dimensions. At the top, users can choose which cost categories to include in the total calculation, such as property damage, emergency response, or environmental remediation. The total cost dynamically updates in real time based on these selections.

              Below, a comprehensive set of filters allows users to refine the dataset by year, pipeline type, liquid type, location, state, and cause. As selections change, the table and total cost instantly reflect the filtered data.<br /><br />

              The resulting table displays detailed information for each spill, including contextual fields and calculated cost values, offering a clear view into the financial impact of spills across different scenarios. This combination of flexible filtering, dynamic cost calculations, and live updates makes the analysis interactive and tailored to the user’s specific areas of interest.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Downloadable Charts</h3>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751638259/ci1_vunehp.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>
              <p>The application supports downloadable charts throughout various data visualizations, allowing users to easily save insights for further analysis or presentations. This feature is powered by Plotly’s built-in export functionality, enabling seamless downloads without any additional setup. <br /><br />
              
              The crude oil price chart shown on the left visualizes historical price data for WTI, Brent, and Crude oil benchmarks. This interactive line and area chart allows users to explore trends over time, with options to hover for detailed tooltips and highlight specific data points.

              Users can select a particular region of the chart to zoom in and examine it in detail. Once zoomed in, they can download that specific view directly, capturing exactly the subset of data they are interested in. This combination of interactive exploration and precise exporting provides a highly flexible and user-friendly way to engage with complex time-series data. </p>
            </div>
          </div>
      
        <div className={styles.devNotes}>
          <h2>Development Notes</h2><br />

          <p>Building this application involved navigating several unique challenges that shaped both the technical approach and the user experience.<br /><br />

          One of the core challenges was implementing interactivity at scale. Many of the charts and tables update dynamically based on user input, requiring a seamless flow of data between the server and the client without full page reloads. This was addressed by integrating AJAX requests throughout the application, allowing users to filter, explore, and download data interactively while maintaining a smooth and responsive interface.<br /><br />

          Another significant challenge was working with large, complex datasets and translating them into meaningful, intuitive visualizations. This process involved extensive data exploration and careful consideration of which chart types and visual elements would best highlight trends and insights. Striking the right balance between technical accuracy and user-friendly presentation required iterative experimentation and design refinement.<br /><br /></p>
        </div>
      </div>
      <br />
      <br />
      </Layout>
    </>
  );
}
