import React from 'react'
import {card, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Pricetag = () => {
  return (
      <div className='p-3'>
    <div className='container text-center'>
      <h1 className='display-4 p-4'>Pricing</h1>
    </div>
    <div className='container text-center'>
       <div className='row'>
           <div className='col'>
           <div className='card'>
            <div className='card-header'>
            <h4 className='p-1'>OCEAN FIBERMAX</h4>
            </div>
            <div className='card-body p-2'>
                
      
        <h1 className='my-0 font-weight-normal'>$95<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
            <p>Up to Max/500mbps</p>
            <p>Ultra-Unlimited Broadband</p>
            <p>SuperSpeed</p>
            <p>Dedicated broadband tech support</p>
            <p>Free Modem 12 month Term</p>
            
            <Link className='btn btn-primary' to="/customisebundle">ORDER NOW!</Link>
            
        </div>
            </div>
        </div>
           </div>
           <div className='col'>
           <div className='card'>
            <div className='card-header'>
            <h4 className='p-1'>OCEAN FIBER - RESIDENTIAL</h4>
            </div>
            <div className='card-body p-2'>
                
      
        <h1 className='my-0 font-weight-normal'>$80<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
            <p>Up to 300/100mbps</p>
            <p>Unlimited Broadband</p>
            <p>Dedicated broadband tech support</p>
            <p>Free modem on 12m term</p>
            <p>BYO modem available</p>
            <Button variant="primary">Order Now!</Button>
        </div>
            </div>
        </div>
           </div>
           <div className='col'>
           <div className='card'>
            <div className='card-header'>
            <h4 className='p-1'>OCEAN BUSINESS FIBER</h4>
            </div>
            <div className='card-body p-2'>
                
      
        <h1 className='my-0 font-weight-normal'>$149<small className='text-muted'>/mo</small></h1>
        <div className='mt-3 mb-4'>
            <p>Postage and handling fee of $14.95 applies</p>
            <p>Minimum 18-month term applies</p>
            <p>Total of $1349 in early termination fees</p>
            <p>power charges are additional and vary based on usage</p>
            <Button variant="primary">Order Now!</Button>
        </div>
            </div>
        </div>
           </div>
       </div>
    </div>
    </div>
  )
}

export default Pricetag
