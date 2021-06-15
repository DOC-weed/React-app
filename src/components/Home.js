import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  '../assets/css/Home.css';
import FirstSlide from '../assets/images/FirstSlide.jpg';
import SecondSlide from '../assets/images/SecondSlide.jpg';
import ThirdSlide from '../assets/images/ThirdSlide.jpg';
import Button from 'react-bootstrap/Button'
import video from '../assets/images/video.mp4';
/*import lenguajes from '../assets/images/lenguajes.png';*/
/*import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/

class Home extends React.Component{
    render(){
        return(
          <>
            <Carousel className="carrusel_custom">
  <Carousel.Item>
    <img
      className="FirstSlide"
      src={FirstSlide}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Aprovecha nuestros descuentos</h1>
      <p>En esta pandemia, aprecha los descuentos de hasta el 50%</p>
      <Button size="lg" variant="outline-warning">Ver descuentos</Button>{' '}
      <br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="FirstSlide"
      src={SecondSlide}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1> ¡Inscribete ya mismo!</h1>
      <p>Tenemos más de 1000 cursos para ti</p>
      <Button size="lg" variant="outline-warning">Ir a cursos</Button>{' '}
      <br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> 
      
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="FirstSlide"
      src={ThirdSlide}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Tenemos los cursos más completos</h1>
      <p>¡No te quiebres la cabeza buscando!,  Aqui tenemoa los mejores cursos para ti </p>
      <Button size="lg" variant="outline-warning">Ver descuentos</Button>{' '}
      <br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<section>
  <div>
    <div className="contenedor"><h1>Construye el futuro que deseas</h1><br></br>
    <p className="letras">En Cursos.utags, sabemos que es muy importante la preparación en los jovenes, por ello, hemos preparado más de 1000 cursos de tecnologías de la informaión.
      Nuestros cursos son los más completos del mercado, posicionando a nuestra pagina como uno de los medios de aprendizaje más importantes en América Latina.
      Los cursos más populares de nuestra plataforma son:  Java, JavaScript, PHP, Python, Angular y React JS.
    </p>
    </div> 
 </div>
</section>
<section>
  <div className="segundaSeccion">
    <div className="video">
    <video src={video}width="900" height="600" controls="controls" />
    </div>
    <div className="tittle2">
      <h1>¿Quiénes somos?</h1>
    </div>
  </div>
</section>
        </>)
    }
}
export default Home;

