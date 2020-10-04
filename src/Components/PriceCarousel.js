import React, { Component } from 'react'  
import {Card, Button} from 'react-bootstrap'; 


class PriceCarousel extends Component {  
    render() {  
        return (  
            <div className="priceSection">
                <h1 className="text-center smHeader">PRICES</h1>
                <div className='row align-items-center'>
                    <div className="w-50 mx-auto">
                    <Card className="my-2">        
                        <h2 class="card-header text-center align-items-center">DAILY</h2>
                        <div className="card-body text-center">
                            <p className="card-paragraoh">
                                <span className="card-text">Complimentary Tour</span>
                                <br/>
                                <span className="card-text">One Fitness Class Pass</span>
                                <br/>
                                <span className="card-text">Access to Lockers and Sauna</span>
                                <br/>
                                <span className="card-text">Free Water Bottle</span>
                            </p>
                            <div>
                            <Button className="joinBtn mr-1 my-3">JOIN NOW</Button>
                                <br/>
                                <span className="prices text-center">$14.99</span>
                            </div>
                        </div>
                    </Card>
            
            
                    <Card className="priceCard">
                    <h2 class="card-header text-center align-items-center">MONTHLY</h2>
                        <div className="card-body text-center">
                            <p className="card-paragraoh">
                                <span className="card-text">Unlimited Fitness Classes</span>
                                <br/>
                                <span className="card-text">One Complimentary Guest Passes</span>
                                <br/>
                                <span className="card-text">One Personal Training Sessions</span>
                                <br/>
                                <span className="card-text">Free Diet Consultation</span>
                            </p>
                            <div>
                            <Button className="joinBtn mr-1 my-3">JOIN NOW</Button>
                                <br/>
                                <span className="prices text-center">$29.99</span>
                            </div>
                        </div>
                    </Card>
        
                    <Card className="priceCard">
                    <h2 class="card-header text-center align-items-center">ANNUALLY</h2>
                        <div className="card-body text-center">
                            <p className="card-paragraoh">
                                <span className="card-text">Unlimited Fitness Classes</span>
                                <br/>
                                <span className="card-text">our Complimentary Guest Passes</span>
                                <br/>
                                <span className="card-text">Two Personal Training Sessions</span>
                                <br/>
                                <span className="card-text">Free Diet Consultation</span>
                            </p>
                            <div>
                            <Button className="joinBtn mr-1 my-3">JOIN NOW</Button>
                                <br/>
                                <span className="prices text-center">$299.99</span>
                            </div>
                        </div>
                    </Card>
                    </div>
                    </div> 
            </div> 
    
      
        );
    }  
}  


export default PriceCarousel