import React from 'react'
import './Footer.css'
import {Row,Col} from 'react-bootstrap'

function Footer() {
  return (
    <div className='foot-bg'>
        <Row>
            <Col>
        <div className='foot-bg1'>
        <img src="footer-logo.png" alt=""  className='logo-img'/><br /><br />
        <p className='foot-content'>Founded by 2 digital marketing passionate affilates after working as a freelancer . 
            After playing( working hard) for 8 hard years in the digital marketing industry and after completed so many 
            wonderful projects for clients all over europe and north america , we thought this is the right time to get 
            in here in our own country to introduce the digital marketing's best practises. During our days we explored 
            new strategies and new technologies and it always have worked well . We at Kaira Technologies are so very
             excited all the time to make businesses reach higher heights.</p>
             </div>
             </Col>
             <Col>
       <div class="footer-section">
    <h3 className='quick'>QUICK LINKS</h3>
    <div className='list'> 
    <ul >
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Our work</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    </div>
  </div>
   </Col>
  <Col>
  
  <div className="footer-contact">
    <h3 className='quick'>CONTACT US</h3><br/>
    
    <div className="contact-item">
      <i className="fas fa-map-marker-alt icon-style"></i>
      <div><img src="home.png" alt="" />
        <strong className='items'>
            KOVILPATTI</strong><br />
        <p className='items1'>New Road, above union bank, Kovilpatti 628501.</p>
      </div>
    </div><br />

    <div className="contact-item">
      <i className="fas fa-map-marker-alt icon-style"></i>
      <div><img src="home.png" alt="" />
      
        <strong className='items'>
            TIRUNELVELI</strong><br />
        <p className='items1'>STC main road, perumalpuram, Tirunelveli 627007.</p>
      </div>
    </div><br />

    <div className="contact-item">
      <i className="fas fa-envelope icon-style"></i>
      <img src="mail.png" alt="" />
      <div className='items'>
        support@kairatechnologies.in</div>
    </div><br />

    <div className="contact-item">
      <i className="fas fa-phone icon-style"></i>
      <img src="call.png" alt="" />
      <div className='items'>
        04632-210895</div>
    </div><br />

    <div className="contact-item">
      <i className="fas fa-phone icon-style"></i>
       <img src="call.png" alt="" />
      <div className='items'>
       9025824763</div>
    </div><br />
  </div>
</Col>
        </Row>
        <hr className='hr' ></hr>
        <Row>
            <Col>
            <div className='foot'>
            <p className='foot1'>© 2022 Kaira Technologies | All Rights Reserved</p>
            </div>
            </Col>
            <Col>
            <div className='log'>
            <img src="1.png" alt="" />
            <img src="2.png" alt="" />
            <img src="4.png" alt="" />
            </div></Col>
        </Row>
    </div>
  )
}

export default Footer