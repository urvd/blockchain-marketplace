import './images-slider.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../../logo.svg";
//import logo192 from ".././../logo192.png";
import logo512 from "../../../logo512.png";




function ImageSlider(props){
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-50"
                src={logo512}
                alt="First slide"
                />
                <Carousel.Caption>
                <p>name</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-50"
                src={logo512}
                alt="Second slide"
                />
                <Carousel.Caption>

                <p>name</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-50"
                src={logo512}
                alt="Third slide"
                />
                <Carousel.Caption>

                <p>name</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageSlider