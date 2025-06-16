import React from 'react'
import './Promo.css'
import {Row,Col} from 'react-bootstrap'  

function Promo() {
  return (
    <div>
        <br></br>
        <h1 className='promo-head'>Promotion</h1>
        <p className='promo-content'>offers a comprehensive range of services to help your business grow. We help you overcome the challenges and solve problems related to maximizing your online reach. We have a team of expert digital marketers to help you with the A to Z of online marketing. We offer a complete range of digital marketing services to ensure that your business website reaches the top and is able to stay there despite the competition in the market. From SEO to SMO, SMM, PPC, ORM, content marketing, and more, we excel at every aspect of online marketing and create a perfect mix of these strategies to bring a result-oriented digital plan for your business.</p>
        <br></br>
        <Row>
            <Col>
            <div className='promo1-container'>
                <img src="bpro1.gif" alt="" className='pro1'/>
            </div>
            <br></br>
            </Col>
            <Col>
            <div className='promo1'>
                <h1 className='pro1-head'>Brand Promotion</h1><br></br>
                <p className='pro1-content'>is the key business tool for enterprises today as it enables them to harness the power of the internet to take their business to the next level. It helps them gain visibility across the search engines, boost the website traffic, and engage users so that they get converted into customers. With most of the competitors in the market investing in a digital strategy, it becomes imperative for the business to stay in the race. More importantly, having a robust digital presence has emerged as a powerful branding idea that propels the business to new heights. Every business, therefore, needs to avail of digital marketing services to get the winning edge.</p>
            </div>
            <br></br>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className='promo2'>
                <h1 className='pro2-head'>Business Promotion</h1><br></br>
                <p className='pro2-content'>In business, promotion is any communication that attempts to influence people to buy products or services. Businesses generally promote their brand, products, and services by identifying a target audience and finding ways to bring their message to that audience.</p>
            </div>
            </Col>
            <Col>
            <div className='promo2-container'>
                <img src="bpro2.gif" alt="" className='pro2'/>
            </div>
            </Col>
        </Row>
        
    </div>
  )
}

export default Promo