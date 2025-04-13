import { useRef } from "react";
import "./Portafolio.css";
import portfolio1 from "../../assets/portfolio-1.jpg";
import portfolio2 from "../../assets/portfolio-2.jpg";
import portfolio3 from "../../assets/portfolio-3.jpg";
import portfolio4 from "../../assets/portfolio-4.jpg";
import portfolio5 from "../../assets/portfolio-5.jpg";
import portfolio6 from "../../assets/portfolio-6.jpg";
import portfolio7 from "../../assets/portfolio-7.jpg";
import portfolio8 from "../../assets/portfolio-8.jpg";
import previewVideo from "../../assets/previewColegioWS.mp4";

const Portafolio = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "block";
      videoRef.current.play();
    }
  };

  const portfolioItems = [
    { src: portfolio1, onClick: playVideo },
    { href: "https://umontealban.edu.mx", src: portfolio2 },
    { href: "https://www.tinkercad.com/things/5VigfSTczX7-v1prototipoimpresora?sharecode=Rz8PJhcfpLaK2N89cqN02_zfxByNnm66SQxiDf7UxPg", src: portfolio3 },
    { href: "https://github.com/Wizt-Jaegger/MicroWord", src: portfolio4 },
    { href: "https://www.youtube.com/watch?v=QKqrrb_dqAI&ab_channel=Gixarde3", src: portfolio5 },
    { href: "https://jardin-sorelu.pages.dev/", src: portfolio6 },
    { href: "https://pa-tours.pages.dev/", src: portfolio8 },
    { href: "https://guess-number-sandy.vercel.app/", src: portfolio7 },
  ];

  return (
    <section className="portfolio section" id="portfolio" style={{ paddingTop: "120px", marginTop: "-120px" }}>
      <div className="container">
        
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item padd-15" key={index}>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img src={item.src} alt="portfolio" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="portfolio-item-inner shadow-dark" onClick={item.onClick}>
                  <div className="portfolio-img">
                    <img src={item.src} alt="portfolio" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <video ref={videoRef} style={{ display: "none" }} controls>
        <source src={previewVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Portafolio;
