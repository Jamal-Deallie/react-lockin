import React, { Component } from 'react';
import LatRaise from '../assets/images/latraise.png';
import {Container} from 'react-bootstrap'; 



class  Benefits extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            benefititems:[
                "Unlimited Fitness Classes* ", 
                "Personal Fitness Assessment", 
                "Access to Pool, Spa, and Sauna", 
                "Sports Leagues*", "Personal Training", 
                "Daycare Babysitting",
            ]
         };
    }
    render() { 
        return(
            <Container fluid className="benefits">
                <div><h1 className="smHeader text-center">MEMBERSHIP BENEFITS</h1></div>
                    <div className="row">
                        <div className="col text-center">
                            <img className="benefitpic img-fluid" src={LatRaise} alt="Third slide" />
                            <ul className="benefitList list-unstyled text-center">{this.state.benefititems.map(benefititem=> <li key={benefititem}>{benefititem}</li>)}</ul>
                        </div>
                    </div>
            </Container>
        );
    }
}
 
export default Benefits;




