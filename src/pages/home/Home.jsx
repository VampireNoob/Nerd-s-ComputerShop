import React, { useEffect, useState } from 'react';
import './home.css';
import Services from '../../components/UI/Services/Services';
import Team from '../../components/UI/Team/Team';
import Slider from '../../components/UI/Slider/Slider';
import FeaturedItems from '../../components/UI/Featured/FeaturedItems';
import imgSlide from './slide1.jpg'


const Home = () => {
  const [hideSlider, setHideSlider] = useState(true)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setHideSlider(true);
      } else {
        setHideSlider(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {hideSlider ? <Slider /> : <img src={imgSlide} alt="slide" className='img-mobile'/> }

    <hr className='horizon' />
    <section className='popular-products'>
      <FeaturedItems />
    </section>

    <section className='team' data-aos="fade-up" data-aos-duration="1500">
      <div>
        <h2 className='team-title'>UNSER TEAM</h2>
        <h4 className='team-text'>Unser Team besteht aus leidenschaftlichen und erfahrenen Experten, die sich darauf freuen, Ihnen bei all Ihren technischen Fragen zu helfen.<br />Jedes Mitglied unseres Teams bringt einzigartige Fähigkeiten und Fachkenntnisse mit, um sicherzustellen, dass Sie die bestmögliche Beratung und Unterstützung erhalten.<br />Wir legen großen Wert auf Kundenservice und sind stets bemüht, Ihre Erwartungen zu übertreffen.<br />Egal, ob es um die Auswahl des richtigen Produkts, die Einrichtung von Zubehör oder die Lösung von technischen Problemen geht - unser Team steht Ihnen mit Rat und Tat zur Seite.<br />Besuchen Sie uns und lassen Sie sich von unserem engagierten Team unterstützen.</h4>
      </div>
        <Team />
    </section>

    <hr className='horizon'/>
      <Services />
    </div>
  )
}

export default Home;