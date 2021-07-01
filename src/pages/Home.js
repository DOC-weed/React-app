import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  '../assets/css/Home.css';
import Button from 'react-bootstrap/Button'

/*import lenguajes from '../assets/images/lenguajes.png';*/
/*import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/

class Home extends React.Component{
    render(){
        return(
          < >
          <div className="father">
                <div className="single-slide" id="slide-1"></div>
                <div className="single-slide" id="slide-2"></div>
                <div className="single-slide" id="slide-3"></div>
                <div className="single-slide" id="slide-4"></div>
                <div className="single-slide" id="slide-5"></div>
            <div className="childrenone">
              <h2>OFFERS</h2>
                <div class="card promos">
                  <img class="card-img-top" src="https://th.bing.com/th/id/Rf0daae3e8d4c6f519271c6bca348230c?rik=3%2fDVkC4m3mEcsw&riu=http%3a%2f%2fventes-pas-cher.com%2fimages%2fstories%2fthomson_65ud6326.jpg&ehk=LGVR0TEC%2bf91%2f%2bDcWS9X4VGwBX8ONk9bMc8tquc1nI4%3d&risl=&pid=ImgRaw" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Pss... watch me</h5>
                    <p class="card-text">TVs hope to go now!, we have irresistible offers.</p>
                    <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Watch</a>
                  </div>
                </div>
                <div class="card promos">
                  <img class="card-img-top" src="https://66.media.tumblr.com/272a7b5cb9e691aa2392423e25708fa5/tumblr_o0xhwe5rUI1u94u3so1_640.jpg" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">We also sell books!</h5>
                    <p class="card-text">We understand that books are part of life, so we give you a 30% - 40% discount.</p>
                    <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Watch</a>
                  </div>
                </div>
                <div class="card promos">
                  <img class="card-img-top" src="https://th.bing.com/th/id/OIP.2bBg4d1JQ3QwRV-I71T7dQAAAA?pid=ImgDet&rs=1" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">When it's man's day?</h5>
                    <p class="card-text">here's always man's day, so, we have 30% - %50 off on men's clothing.</p>
                    <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Watch</a>
                  </div>
                </div>
            </div>
            <div className="childrentwo">

              <div className="products">
                <div className="children_products">
                  <div class="card product"  >
                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/71-yOrgk3dL._AC_SX522_.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">$10,600</h5>
                      <p class="card-text">2021 Newest HP 15.6 Inch HD Screen Laptop...</p>
                      <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>
                  <br></br>



                </div>
                <div className="children_products">
                <div class="card product" >
                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/81KKpbAy0OS._AC_SL1500_.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">$3,100</h5>
                      <p class="card-text">JVC Television 32 " Led HD 720p A 60Hz with HDMI LT-32MAW200...</p>
                      <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>
 
                </div>
                <div className="children_products">
                <div class="card product" >
                    <img class="card-img-top" src="https://cdn.awsli.com.br/600x450/625/625788/produto/26377416/26c8d69b0e.jpg" alt="Card image cap"  style={{height:'200px', width:'200px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">$8,199</h5>
                      <p class="card-text">Apple iPhone X, 64GB, Silver - Fully unlocked.</p>
                      <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>


                </div>
                <div className="children_products">
                <div class="card product">
                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/71%2B661UpYQL._AC_SL1500_.jpg" alt="Card image cap" style={{height:'200px', width:'200px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">$7,000</h5>
                      <p class="card-text">CROWNFUL 19 quart air fryer, original recipe and 8 accessories...</p>
                      <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>


                </div>

                <div className="children_products">
                <div class="card product">
                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/618s0Kf1ipL._AC_SL1500_.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">$1,199</h5>
                      <p class="card-text">SOUNDPEATS Bluetooth Audiophones, Trueshift2 True Wireless Audiophones 100 Hours of Playtime...</p>
                      <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>


                </div>

                <div className="children_products">
                <div class="card product">
                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/818qlMJA4ML._AC_SL1500_.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">$350</h5>
                      <p class="card-text">Serum Vitamin C + Hyaluronic Acid + Vitamin E- Facial Serum -95% Natural Ingredients- Brightens, Revitalizes, Restores, Moisturizes and ...</p>
                      <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>


                </div>

                <div className="children_products">
                <div class="card product">
                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51M-obE01HL._AC_.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">$240</h5>
                      <p class="card-text">Corona Extra Beer, 12 Bottles of 355 c / u.. ...</p>
                      <a href="#"  type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>


                </div>

                <div className="children_products">
                <div class="card product">
                    <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51XfEk15pGL._AC_SL1000_.jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">$799</h5>
                      <p class="card-text">Riddell NFL Speed Mini Casco.</p>
                      <a href="#" type="button" class="btn btn-primary btn-lg btn-block">Buy</a>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
       
         </>)
    }
}
export default Home;

