import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/Home.css';
import Button from 'react-bootstrap/Button'
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import slider1 from '../assets/images/Slider1.png';
import slider2 from '../assets/images/Slider2.png';
import slider3 from '../assets/images/Slider3.png';


/*import lenguajes from '../assets/images/lenguajes.png';*/
/*import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/

class Home extends React.Component {
  render() {
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{number.name}</h5>
          <p className="card-text">{number.description}</p>
          <p href="#" className="card-text">${number.price}</p>
        </div>
      </div>
      );
      return (
        <div className="conttt">{listItems}</div>
      );
    }
     const arrayP =
    [{"id":"a672fe3e-e45c-429f-ab86-edf522547224","customer_id":"7efe29c5-5214-464b-9ec7-dbb9e489875a","sku":"ddac0bfa-f4a6-4050-ada6-4d39d5a45f87","name":"Wordify","price":67,"description":"Contusion of gallbladder, subsequent encounter","create_date":"7/15/2021","stock":44},
    {"id":"218aeb14-6262-473d-ae13-ca4cc609f316","customer_id":"0e9f52e9-aab1-444b-9981-d1f028b3588e","sku":"f5b3f291-fff6-478d-985a-1fcdf903d727","name":"Bubbletube","price":66,"description":"Echinococcus multilocularis infection of liver","create_date":"7/9/2021","stock":10},
    {"id":"1f05e25f-f9d6-423a-9083-2efd9d278b40","customer_id":"e0bba890-10a3-4814-8e5b-ae32f4b5fd2d","sku":"31597d48-ef6a-48ec-81a5-4ee6fd7fb635","name":"Jatri","price":89,"description":"Nondisplaced fracture of body of scapula, right shoulder, subsequent encounter for fracture with nonunion","create_date":"3/28/2021","stock":44},
    {"id":"8ac2d80e-f36c-459f-a01a-2ad3f9176781","customer_id":"d1eb029c-0e9b-4163-8629-e7500314e94b","sku":"30869a46-d1e8-48b5-8cb1-a00438f85196","name":"Youfeed","price":19,"description":"Disorders resulting from impaired renal tubular function","create_date":"10/20/2020","stock":7},
    {"id":"1b4b0aec-adc6-4f45-ab1f-e8c81f90f040","customer_id":"954c0a7b-b8c9-48fa-9981-bdd6a98a9658","sku":"b8c6108b-3347-4533-aa6e-c1d72dc806e1","name":"Jabbercube","price":40,"description":"Exposure to bed fire due to unspecified burning material, initial encounter","create_date":"1/24/2021","stock":67},
    {"id":"d2094b0d-f492-4a9c-9d0f-a5984f0ef93e","customer_id":"ee830063-85f1-4968-8a5e-4d962e5efa40","sku":"d9991add-1d5e-4855-bd3a-a3703523d903","name":"Feedmix","price":61,"description":"Malignant neoplasm of tonsillar fossa","create_date":"7/2/2021","stock":55},
    {"id":"640f6950-0f18-4493-b6ff-6d1e078e7cdf","customer_id":"4f68b6eb-6b64-4c37-84a0-febbf1cbc554","sku":"a4c7b396-9452-4129-a661-aea8c50b492e","name":"Quimm","price":82,"description":"Intentional self-harm by exposure to extremes of cold","create_date":"7/16/2021","stock":46},
    {"id":"0d711915-a3bb-487a-a459-c1d3dd13c57b","customer_id":"d5d87058-a2a9-4d48-b3ac-8795fb13af60","sku":"259ad8de-5185-471b-97fa-be77ab74e084","name":"Lajo","price":97,"description":"Traumatic rupture of unspecified ulnar collateral ligament","create_date":"10/18/2020","stock":54},
    {"id":"011af679-060a-499c-8ce6-7125fc49e6d8","customer_id":"fd1b1dc7-2a6d-461b-80ea-a92d9929d809","sku":"c3fbaa6c-f65a-4cbe-94fd-6ec5bacf1a4b","name":"Tagpad","price":44,"description":"Partial traumatic amputation of one unspecified lesser toe, sequela","create_date":"4/3/2021","stock":56},
    {"id":"6aa7511b-ded4-4091-b675-92706197f836","customer_id":"b29a77bc-2863-4de8-967e-6a5bba147406","sku":"5629f7fc-cc3d-49cb-a138-d7c3195d88e1","name":"Yata","price":97,"description":"Urethral discharge, unspecified","create_date":"4/16/2021","stock":87},
    {"id":"85d17294-07b5-47a7-8d92-35165f6e66b2","customer_id":"45e89034-7610-4052-a685-d12a5c6fe86e","sku":"896ec51e-9cce-4060-b6f8-25dd3240e397","name":"Fliptune","price":35,"description":"Displaced fracture of lateral condyle of left humerus, initial encounter for closed fracture","create_date":"7/23/2020","stock":13},
    {"id":"e324c70e-35a7-4e08-a5b0-6a44fe46ed5d","customer_id":"df8fcfb7-0e29-48a2-8f18-d95dce01f8d4","sku":"feffec52-11c9-42ed-8b4e-11da4aa0de37","name":"Zoozzy","price":35,"description":"Other sequelae of unspecified cerebrovascular disease","create_date":"1/22/2021","stock":51},
    {"id":"d9a52f9b-cc64-44ed-a589-61788e0535c2","customer_id":"d1088550-6e69-475b-a36e-bedbe3e9019c","sku":"4d2aacd1-238f-48a9-94bf-f0739bbe3a4e","name":"Centidel","price":77,"description":"Type II occipital condyle fracture, left side, sequela","create_date":"6/1/2021","stock":94},
    {"id":"bf0446c9-140c-4c63-bcbe-da6e654e196b","customer_id":"74677ae3-362c-4aa7-98d0-7e6444ad902f","sku":"88f67747-3b7e-44fc-9eb7-634af65696c8","name":"Meezzy","price":75,"description":"Nondisplaced fracture of lateral malleolus of unspecified fibula","create_date":"10/24/2020","stock":96},
    {"id":"8df74f5b-5a34-4f2d-a7c1-c874c8255ffe","customer_id":"f40846b6-cb10-4716-a570-2709a135c2d9","sku":"6f823b63-f82a-4a0f-a71b-11fff5c4d210","name":"Avamba","price":36,"description":"Adverse effect of tricyclic antidepressants","create_date":"5/17/2021","stock":93},
    {"id":"f8bb92c9-1006-4e0e-9a34-2f1ab1d2dc1a","customer_id":"cb5873c9-8df4-4d73-845c-64f5fb83f85b","sku":"caadfb39-5023-4aca-94f2-f389a4537307","name":"Blognation","price":26,"description":"Abnormal immunological findings in specimens from respiratory organs and thorax","create_date":"2/4/2021","stock":58},
    {"id":"d68425c7-684f-43b0-b09b-6ec33855030f","customer_id":"761fe95f-fa79-4156-a300-295eee93a918","sku":"52583c74-c0c8-4076-ac28-89b46531a96a","name":"Yoveo","price":18,"description":"Partial physeal arrest, left distal tibia","create_date":"10/16/2020","stock":6},
    {"id":"6588a7cb-6c60-4c1f-8163-59c317de3aa6","customer_id":"807b274d-616d-4313-9a4c-6fa5926d2d94","sku":"33cdb0cf-e585-4d94-8708-79164e4b177c","name":"Browsedrive","price":16,"description":"Complete traumatic transphalangeal amputation of left ring finger, subsequent encounter","create_date":"2/8/2021","stock":59},
    {"id":"0d1fd84f-bef2-481f-81bd-ba7b690d46c1","customer_id":"7e2ecc9f-265b-475d-9356-f901011614c0","sku":"a9a1f85f-e248-4230-8d84-59609d01b318","name":"Yodo","price":78,"description":"Unspecified effects of vibration, initial encounter","create_date":"7/22/2020","stock":7},
    {"id":"0b52367e-5ec9-4bee-8d38-f2c8c27621cd","customer_id":"717d822d-d320-4cb7-b544-8714680af0c9","sku":"b82800e7-27bb-4284-b019-fd32b95683c2","name":"Skiba","price":37,"description":"Exfoliation due to erythematous condition involving 50-59 percent of body surface","create_date":"12/8/2020","stock":54}];
    return (
      < >
        
        <div className="father">

          <div className="container_1_home">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-slider "
                  src={slider1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-slider"
                  src={slider2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-slider"
                  src={slider3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="container_2_home">
            <div className="childrenone">
              <h2>OFFERS</h2>
              <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Product</h5>
                  <p className="card-text">Description short about the product</p>
                  <p href="#" className="card-text">$200</p>
                </div>
              </div>
              <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Product</h5>
                <p className="card-text">Description short about the product</p>
                <p href="#" className="card-text">$200</p>
              </div>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Product</h5>
                <p className="card-text">Description short about the product</p>
                <p href="#" className="card-text">$200</p>
              </div>
            </div>
              
            </div>
            <div className="childrentwo">
            <NumberList numbers={arrayP} />

            </div>

          </div>




       
        </div>



      </>)
  }
}
export default Home;

