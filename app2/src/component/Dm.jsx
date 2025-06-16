import React from 'react'
import './Dm.css'
import {Row,Col} from 'react-bootstrap'  

function Dm() {
  return (
    <div>
        <h1 className='dm-head'>Digital Marketing</h1>
        <p className='dm-p'>"Marketing is no longer about the stuff that you make, but about the stories you tell.”</p>
        <h4 className='dm-name'>–Seth Godin,</h4>
        <p className='dm-p2'>Bestselling Author and Blogger While modern day digital marketing is an enormous system of channels to which marketers simply must onboard their brands, advertising online is much more complex than the channels alone. In order to achieve the true potential of digital marketing, marketers have to dig deep into today’s vast and intricate cross-channel world to discover strategies that make an impact through engagement marketing. Engagement marketing is the method of forming meaningful interactions with potential and returning customers based on the data you collect over time. By engaging customers in a digital landscape, you build brand awareness, set yourself as an industry thought leader, and place your business at the forefront when the customer is ready to buy.</p>
      <div className='containers'>
        <Row>
          <Col>
        <div className='card-container'>
          <div className='card'>
          <img src="dm1.png" alt="" className='dm1' />
          <button type='button'>Lead Generation</button>
        </div>
       </div>
          </Col>
          <Col>
       <div className='card-container2'>
          <div className='card2'>
          <img src="dm2.png" alt="" className='dm1' />
          <button type='button'>Website Developement</button>
        </div>
       </div>
          </Col>
          <Col>
        <div className='card-container3'>
          <div className='card3'>
          <img src="dm3.png" alt="" className='dm1' />
          <button type='button'>Social Media Marketing</button>
        </div>
       </div>
          </Col>
        </Row>
        <Row>
          <Col>
        <div className='card-container4'>
          <div className='card4'>
          <img src="dm4.png" alt="" className='dm1' />
          <button type='button'>Pay Per Click</button>
        </div>
       </div>
          </Col>
          <Col>
       <div className='card-container5'>
          <div className='card5'>
          <img src="dm5.png" alt="" className='dm1' />
          <button type='button'>Content Writing</button>
        </div>
       </div>
          </Col>
          </Row>
      </div>
    </div>
  )
}

export default Dm