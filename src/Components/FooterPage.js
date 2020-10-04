import React from "react";
import {Link} from'react-router-dom';
import './css/style.css';

const FooterPage = () => {
  return (
    <footer className="page-footer pt-4">
      <h3 className="text-center">Lockin Fitness</h3>
      <hr/>
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto mb-3">
            <h5 className="font-weight-bold text-uppercase mt-2 mb-2 text-center">GYM HOURS</h5>
            <p className="text-center">
              Monday – Friday: 6am – 9pm
              <br/>
              Saturday/Sunday: 9am – 6pm
              <br/>
            </p>
          </div>
          <div className="col-md-4 mx-auto mb-3">
            <h5 className="font-weight-bold text-uppercase mt-2 mb-2 text-center">Location</h5>
            <p className="text-center">
              Lockin Fitness
              <br/>
              123 Main Street
              <br/>
              Arlington VA 22203
              <br/>
              (213) 345-6789
            </p>
          </div>
         
          <div className="col-md-4 mx-auto mb-3">
            <span>
                <Link className="btn-floating btn-fb mx-1" to="https://www.facebook.com/"><a className="btn btn-social-icon btn-facebook list" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}<span className="social-links">Facebook</span></Link>
                <br/>
                <Link className="btn-floating btn-tw mx-1" to="https://twitter.com/"><a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}<span className="social-links">Twitter</span></Link>
                <br/>
                <Link className="btn-floating btn-gplus mx-1" to="https://www.instagram.com/"><a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}<span className="social-links">Instagram</span></Link>
                <br/>
                <Link className="btn-floating btn-li mx-1" to="https://www.youtube.com/"><a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a><span className="social-links">Youtube</span></Link>
              </span>
          </div>
        </div>
        
      </div>
      <hr/>
      <h5 className="text-center pb-3">LockinFitness.com</h5>

  </footer>
    
  );
}

export default FooterPage;