import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Stay prepared for your journey with real-time weather updates for your destination. Explore with confidence, knowing the conditions ahead.',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'We provide exceptional tour guides to make your journey seamless and enriching. Experience every destination through the eyes of an expert.',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'We offer personalized travel experiences to your unique preferences. From destinations to activities, every detail is customized just for you.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
