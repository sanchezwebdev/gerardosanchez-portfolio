import style from "../styles/Development.module.css";

const Development = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.bucket}>
          <div className={style.iconWrapper}>
            <img src="/Frame.png" alt="" className={style.icon} />
          </div>
          <h2 className={style.title}>Frontend Development</h2>
          <div className={style.listWrapper}>
          <h3 className={style.subtitle}>Languages I speak:</h3>
            <ul className={style.list}>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JSX</li>
            </ul>
          </div>
          <div className={style.listWrapper}>
          <h3 className={style.subtitle}>Dev Tools:</h3>
            <ul className={style.list}>
              <li>React</li>
              <li>Next.js</li>
              <li>Git</li> 
              <li>Blazor</li> 
              <li>REST API</li> 
              <li>Axios</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>              
              <li>Visual Studio</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
        <div className={style.bucket}>
          <div className={style.iconWrapper}>
            <img src="/database.png" alt="" className={style.icon} />
          </div>
          <h2 className={style.title}>Backend Development</h2>
          <div className={style.listWrapper}>
          <h3 className={style.subtitle}>Languages I speak:</h3>
            <ul className={style.list}>
              <li>Python</li>
              <li>SQL</li>
              <li>C#</li>
            </ul>
          </div>
          <div className={style.listWrapper}>
          <h3 className={style.subtitle}>Backend Tools:</h3>
            <ul className={style.list}>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>.NET</li>
              <li>MySQL</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>              
              <li>MongoDB</li>
              <li>Django</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Contentful</li>                                    
              <li>JWT</li>              
            </ul>
          </div>
        </div>
        <div className={style.bucket}>
          <div className={style.iconWrapper}>
            <img src="/chart.png" alt="" className={style.icon} />
          </div>
          <h2 className={style.title}>Data Analytics</h2>
            <div className={style.listWrapper}>
          <h3 className={style.subtitle}>Skills</h3>
                <ul className={style.list}>
                <li>Exploratory Data Analysis (EDA)</li>
                <li>Extract, Transform, Load (ETL)</li>
                <li>Data Visualization</li>
                <li>Data Cleaning</li>

                </ul>
            </div>
            <div className={style.listWrapper}>
          <h3 className={style.subtitle}>Tools:</h3>
                <ul className={style.list}>
                <li>Pandas</li>
                <li>Numpy</li>
                <li>Plotly</li>
                <li>Matplotlib</li>
                <li>Apex Charts</li>
                <li>Excel / Google Sheets</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
