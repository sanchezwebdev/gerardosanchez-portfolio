import style from "../styles/LatestVideos.module.css";

const LatestVideos = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Latest Videos</h1>
      <div className={style.grid}>
        <div className={style.gridItem}>
        <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/hBw9K-DIvAw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
        <div className={style.gridItem}>
        <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/jEhbKWBwaww"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
        <div className={style.gridItem}>
        <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/osMWTYDn-8c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
        <div className={style.gridItem}>
        <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/HOWortnaiIc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
        <div className={style.gridItem}>
        <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/_WI9FwWK5oA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
        <div className={style.gridItem}>
        <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/W9R6d25_Zxs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
