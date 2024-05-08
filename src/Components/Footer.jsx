import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <footer className="mar-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-12">
              <Link className="logo smooth-leave" to="/"></Link>
              </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="footer-contacts">
                <div className="wrap">
                  <div className="address">
                    <p>26 Hillside Street<br/>House 35<br/>London, UK</p>
                    </div>
                    <Link className="footer-info email" to="mailto:hello@blunes.com">hello@blunes.com</Link><br />
                    <Link className="phone" to="tel:5226669113">522-666-9113</Link>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12">
                <div className="social-links">
                  <ul>
                    <li><Link className="facebook" to="#"></Link></li>
                    <li><Link className="twitter" to="#"></Link></li>
                    <li><Link className="instagram" to="#"></Link></li>
                    <li><Link className="dribbble" to="#"></Link></li>
                    <li><Link className="behance" to="#"></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer