import React from 'react';
import LatRaise from '../assets/images/latraise.png';
import {Container} from 'react-bootstrap'; 

const Benefits = () => {
return(
    <Container fluid className="benefits">
        <div><h1 className="smHeader text-center">MEMBERSHIP BENEFITS</h1></div>
            <div className="row">
                <div className="col text-center">
                    <img className="benefitpic img-fluid" src={LatRaise} alt="Third slide" />
                    <p className="benefitList">
                        Unlimited Fitness Classes* 
                        <br/>  
                        Personal Fitness Assessment
                        <br/>  
                        Access to Pool, Spa, and Sauna
                        <br/>  
                        Sports Leagues*
                        <br/>  
                        Personal Training
                        <br/>  
                        Daycare Babysitting
                        <br/>  
                    </p>
                </div>
            </div>
    </Container>
    )
}

export default Benefits;