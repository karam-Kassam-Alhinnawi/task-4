import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../assets/img/hero-carousel/hero-carousel-1.jpg';
import carouselImg2 from '../assets/img/hero-carousel/hero-carousel-2.jpg';
import carouselImg3 from '../assets/img/hero-carousel/hero-carousel-3.jpg';

const carouselItems = [
  {img: carouselImg1, heading: 'Temporibus autem quibusdam', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {img: carouselImg2,  heading: 'Temporibus autem quibusdam', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {img: carouselImg3,  heading: 'Temporibus autem quibusdam', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
]

function MainCarousel() {
  return (
    <div>
      <Carousel data-bs-theme="light" >

      {carouselItems.map((item) => (
      <Carousel.Item>
        <img className="d-block w-100" src={item.img} style={{height: '550px'}} />
        <Carousel.Caption>
        <div className='bg-light w-100 text-dark d-flex justify-content-center align-items-center flex-column' style={{borderTop: '4px solid #3fbbc0', height: '240px'}}>
          <p className='fw-bolder h1 carousel-heading'>{item.heading}</p>
          <p style={{fontSize: '15px'}}>{item.desc}</p>
          <button className='mainColor border-0 text-light rounded' style={{paddingInline: '18px', paddingBlock: '8px'}}>Get Started</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}

    </Carousel>
    </div>
  );
}

export default MainCarousel;