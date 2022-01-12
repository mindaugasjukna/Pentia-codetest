import { useRef } from "react";
import "./Home.scss";

// Components
import ImageTextInfo from "../Components/ImageHeaderText/ImageHeaderText";

// Assets
import zeppeliner from "../assets/zeppeliner_white.svg";
import arrow_down from "../assets/arrow_down.svg";
import illustration1 from "../assets/illustration1.svg";
import illustration2 from "../assets/illustration2.svg";
import prize from "../assets/prize.svg";
import NewsletterForm from "../Components/NewsletterForm/NewsletterForm";

export default function Home() {
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <div className="Home">
      <div className="section hero">
        <h6 className="hero--loremipsum">Lorem ipsum</h6>
        <div className="hero--image">
          <img src={zeppeliner} alt={zeppeliner} />
        </div>

        <div className="hero--text">
          <h1 className="hero__presentation">Digital Transformation</h1>
          <h3 className="hero__catchphrase">
            Rådgivning. Implementering. Resultater
          </h3>

          <h6 className="hero__info">
            Hvordan bliver din virksomhed en digital vinder i fremtiden? Hvilke
            tiltag skal der til strategisk og taktisk for at dreje forretningen
            i den rigtige retning? Hvilke elementer indeholder en successfuld
            digital transformation? Vi har svarene. Pentia kan hjælpe dig på
            hele rejsen fra strategisk rådgivning til implementering
          </h6>
        </div>

        <div className="hero__scroll" onClick={executeScroll}>
          <p className="hero__scrolltext">Start din rejse her</p>
          <div className="hero__scrollarrow">
            <img src={arrow_down} alt={arrow_down} />
          </div>
        </div>
      </div>

      <div className="section info" ref={scrollRef}>
        <h2>Vi kan hjælpe dig med digital transformation på to fronter</h2>
        <div className="info--grid">
          <ImageTextInfo
            image={illustration1}
            header="Strategisk Rådgivning om digital transformation"
            text="Udnytter din virksom sit digitale potentiale? Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan?"
          />

          <ImageTextInfo
            image={illustration2}
            header="Eksekvrering af digital transformation"
            text="I ved, hvad i vil, men i har brug for hjælp til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a. på Sitecore. Det handler om mennesker og resultater."
          />
        </div>
      </div>

      <div className="section signup">
        <div className="signup--headers">
          <h2>Få 10 gode råd om digital transformation</h2>
          <h4>Ja tak, jeg vil gerne høre mere om digital transformation</h4>
        </div>

        <NewsletterForm />

        {/* <div>
          <Button text="Ring mig op" />
        </div> */}

        <div className="signup--prize">
          <img src={prize} alt={prize} />
          <h6>Pentia vinder pris for digital innovation 2017</h6>
        </div>
      </div>
    </div>
  );
}
