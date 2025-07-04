import Layout from "../../components/Layout";
import styles from "../../styles/Economiq.module.css";
import Image from 'next/image'

export default function ProjectPage() {
  const econImageSrc = "https://res.cloudinary.com/dyivstfjt/image/upload/v1751635365/pic_ei3_trhuid.png";
  const econImageBlurSrc = "https://res.cloudinary.com/dyivstfjt/image/upload/e_blur:50,q_1,w_20/v1751635365/pic_ei3_trhuid.png";
  return (
    <>
      <Layout>
      <div className={styles.container}>
        <div className = {styles.topContainer}>
          <h1>EconomIQ Analytics</h1>
          <div className={styles.imageContainer}>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751638903/econ1_j94sky.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>
            <div className={styles.imageLinks}>
              <span>Links:</span>
              <a href="https://economiq.gerardosanchez.dev/" target="_blank">Live Site</a>
              <a href="https://github.com/sanchezwebdev/economiq" target="_blank">Github Codebase</a>
            </div>
          </div>
            <p>EconomIQ is a Django-based application designed to provide an interactive and visual analysis of economic and market data, helping users explore trends and relationships across macroeconomic indicators and major stock indexes. It integrates dynamic charting with financial metrics to make complex data approachable and visually engaging.<br /><br /> 
              
            The app includes tools for analyzing economic composition over time, assessing currency and commodity trends, evaluating investment climate indices, and performing detailed stock market analyses with overlays like moving averages and regression trends. By combining normalized visualizations, comparative overlays, and aggregated data views, the application empowers analysts and investors to better understand market dynamics and economic health in an intuitive, web-based interface.<br /><br />

            EconomIQ utilizes OpenAI-generated synthetic data that closely mimics real-world economic behavior. This approach ensures that the app remains realistic and insightful while avoiding licensing and freshness limitations common in publicly available datasets.<br /><br />
          
          <strong>Tech Stack: </strong> Django, Matplotlib, PostgreSQL, Supabase, Heroku 
            
            </p>

        </div>
          <div className={styles.featuresContainer}>
            <h2>Key Features Include</h2><br />
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Interactive Charts</h3>
              <a href="">
                <video
                  className={styles.image}
                  src="https://res.cloudinary.com/dyivstfjt/video/upload/v1751638903/econ2_hwl1lz.mkv"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </a>
              <p>Many charts in this application are designed to be interactive, giving users a more insightful and hands-on exploration of market data. In this case, the Market Analysis chart on the left is a dynamic candlestick chart that updates in real time based on user selections. <br /><br />

              By default, the chart displays monthly OHLC (Open, High, Low, Close) data along with trading volume for the selected stock index, such as the Dow Jones, S&P 500, or Nasdaq. Users can switch between different indexes using the dropdown, and the chart will seamlessly refresh to show the corresponding data. Additionally, users can apply various technical analysis overlays — including linear regression, simple moving average (SMA), exponential moving average (EMA), and volume-weighted average price (VWAP) — to gain further context on price trends and momentum. This flexible interactivity supports a richer analysis experience for users interested in exploring different technical perspectives.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Multi-Factor Economic and Market Analysis</h3>
                <Image
                  className={styles.image}
                  src={econImageSrc}
                  alt="EconomIQ Investment Signals Chart"
                  width={1200}      
                  height={800}
                  placeholder="blur"
                  blurDataURL={econImageBlurSrc}
                />
              <p>EconomIQ enables deeper insights by allowing users to explore the relationships between multiple economic and market indicators side by side. On the Investment Signals page seen here on the right, users can select and compare two indicators—such as the USD/EUR exchange rate and gold prices—normalized on a shared timeline to reveal hidden correlations or divergences.<br /><br />

              In addition to individual metric comparisons, the stacked Investment Climate Index chart showcases how venture capital funding and corporate profits interact over time, providing a high-level gauge of overall economic sentiment. Together with the business health heatmap, these visualizations make it easy to track shifts in market confidence and economic health at a glance. This multi-dimensional approach empowers users to form more holistic, data-driven investment and business strategies.</p><br /><br />

              <h3 className={styles.featureTitle}>Modern Data-Driven Design</h3>

              <p>The visual design of EconomIQ was crafted to convey a modern, data-driven aesthetic while ensuring clarity and accessibility for financial analysis. It has a dark theme foundation to reduce visual fatigue and make key data points stand out, complemented by a carefully selected accent palette of steel blue, light gray-blue, and a striking highlight yellow.<br /><br />

              Charts and visualizations were designed with high-contrast color schemes and clean, minimalistic gridlines to emphasize data trends without distractions. Custom color-coded overlays—such as moving averages, regression lines, and heatmaps—use bright, intuitive colors to guide user focus and support quick interpretation.<br /><br />

              Typography and axis labeling were consistently styled for readability across all visualizations, and subtle design elements, like smooth AJAX-based chart updates and lightweight dropdown forms, enhance the interactive experience.
              <br /><br />
              </p>
            </div>
          </div>
      
        <div className={styles.devNotes}>
          <h2>Development Notes</h2><br />

          <p>During development, one of the key technical goals was to create a highly interactive experience that could handle complex economic and market data while remaining user-friendly. The application makes extensive use of Django’s ORM and raw SQL for efficient data querying and aggregation, paired with pandas for powerful data manipulation and cleaning. Matplotlib is leveraged for generating visually compelling, customized charts such as stacked bar plots, heatmaps, and advanced candlestick charts with technical overlays like linear regression, SMA, EMA, and VWAP.<br /><br />

          A significant challenge in building this app was sourcing comprehensive, up-to-date macroeconomic and financial datasets. Many public datasets on platforms like Kaggle were either outdated, incomplete, or locked behind licensing restrictions. To overcome this, I used OpenAI-generated synthetic datasets designed to closely mimic real-world economic trends and relationships. This approach allowed the app to simulate realistic historical patterns and market dynamics without depending on proprietary or stale data, enabling robust testing and more lifelike visualizations.<br /><br />

          From a technical standpoint, additional features include asynchronous chart updates using AJAX, dynamic field selections, and multi-layered financial calculations that illustrate both absolute and normalized views. These components come together to create a rich analytical environment while showcasing modern full-stack data engineering practices.</p>
        </div>
      </div>
      <br />
      <br />
      </Layout>
    </>
  );
}
