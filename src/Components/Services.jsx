import { Button, Card, Link } from '@nextui-org/react'
import React from 'react'

export default function Services({image, text}) {
  return (
    <>
    <div className='services-container'>
    <Card >
            <Card.Body>
                <div className="image-services">
                    <img src={image}  alt="" height={140}/>
                </div>
               <div className='link-container'>
                <Button auto flat>Ir a {text}</Button>
               </div>
            </Card.Body>
        </Card>
    </div>
     
    </>
  )
}
