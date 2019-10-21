import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={5}
                isPlaying= {true}
                infinite={true}>
                
                <Slider>
                    <Slide index={0}><Image src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cute Dog Peeking over Ledge"/></Slide>
                    <Slide index={1}><Image src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cute Dog Peeking over Ledge"/></Slide>
                    <Slide index={2}><Image src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cute Dog Peeking over Ledge"/></Slide>
                    <Slide index={3}><Image src="https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cute Dog Peeking over Ledge"/></Slide>
                    <Slide index={4}><Image src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cute Dog Peeking over Ledge"/></Slide>
                </Slider>
                
                <div className="carouselBtns">
                <ButtonBack><i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                </ButtonBack>
                <ButtonNext><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </ButtonNext>
                </div>
                
            </CarouselProvider>
        )
    }
    
}

export default Carousel