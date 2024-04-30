import React from 'react'
import './about.css'


const About = () => {

  return (
    <div>
      <div className="bg-about">
        <h1>ÜBER UNS</h1>
        <h2>Herzlich willkommen bei <span>Nerd's ComputerShop</span> !</h2>
        <p>Wir sind stolz darauf, unseren Kunden hochwertige Computerprodukte und erstklassigen Service anzubieten. Unser Team besteht aus erfahrenen Experten, die Ihnen gerne bei der Auswahl des perfekten Computers oder Zubehörs helfen. Wir legen großen Wert auf Kundenzufriedenheit und streben danach, Ihre Erwartungen zu übertreffen. Besuchen Sie unseren Computershop und entdecken Sie die Vielfalt und Qualität unserer Produkte. Unser Team steht Ihnen gerne zur Seite, um Ihnen bei der Auswahl des perfekten Computers oder Zubehörs zu helfen.</p>
      </div>
<br />
    <hr className='horizon'/>
      <div className='container_about'>
        <div className="about" data-aos="fade-up" data-aos-duration="1500">
          <div className="desc-about">
            <h2 className='shop-about-tittle1'>WAS WIR ANBIETEN</h2>
              <ul>
                <li className='detail'><span>Für diejenigen, die nach einem leistungsstarken und zuverlässigen Desktop-Computer suchen, haben wir eine Auswahl an PCs in verschiedenen Konfigurationen und Preisklassen im Angebot. Von Gaming-PCs für die ultimative Spielerfahrung bis hin zu All-in-One-PCs für den Bürogebrauch.</span></li><br />
                <li className='detail'><span>Wenn Sie lieber mobil sein möchten, bieten wir auch eine Auswahl an Laptops, die sowohl für den täglichen Gebrauch als auch für anspruchsvolle Aufgaben geeignet sind. Unsere Laptops zeichnen sich durch ihre hohe Leistungsfähigkeit, lange Akkulaufzeit und kompakte Bauweise aus.</span></li><br />
                <li className='detail'><span>Für ein komfortables und effizientes Arbeiten am Computer bieten wir eine Auswahl an Tastaturen und Computermäusen an, die ergonomisch gestaltet sind und eine präzise Steuerung ermöglichen. Von kabellosen Bluetooth-Tastaturen bis hin zu Gaming-Mäusen mit programmierbaren Tasten - bei uns finden Sie das passende Zubehör für Ihre Bedürfnisse.</span></li><br />
                <li className='detail'><span>Zu guter Letzt bieten wir auch eine Auswahl an hochauflösenden Monitoren in verschiedenen Größen und Ausführungen an. Ob Sie einen Monitor für Gaming, Grafikdesign oder den Bürogebrauch benötigen, wir haben das passende Modell für Sie.</span></li>
              </ul>
          </div>

          <div className='container_about_mainInfo'>
            <div className='box_about_mainInfo'>
              <p className='about_mainInfo_par1'>5+</p>
              <p className='about_mainInfo_par2'>Jahre</p>
              <p className='about_mainInfo_par2'>Erfahrung</p>
            </div>
            <div className='box_about_mainInfo'>
              <p className='about_mainInfo_par1'>50K+</p>
              <p className='about_mainInfo_par2'>Verkaufte</p>
              <p className='about_mainInfo_par2'>Produkte</p>
            </div>
            <div className='box_about_mainInfo'>
              <p className='about_mainInfo_par1'>10K+</p>
              <p className='about_mainInfo_par2'>Glückliche</p>
              <p className='about_mainInfo_par2'>Kunden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;