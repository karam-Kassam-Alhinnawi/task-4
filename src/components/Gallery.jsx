import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/img/gallery/gallery-1.jpg';
import img2 from '../assets/img/gallery/gallery-2.jpg';
import img3 from '../assets/img/gallery/gallery-3.jpg';
import img4 from '../assets/img/gallery/gallery-4.jpg';
import img5 from '../assets/img/gallery/gallery-5.jpg';
import img6 from '../assets/img/gallery/gallery-6.jpg';
import img7 from '../assets/img/gallery/gallery-7.jpg';
import img8 from '../assets/img/gallery/gallery-8.jpg';

const Gallery = () => {
  const galleryImgs = [
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5},
    {img: img6},
    {img: img7},
    {img: img8},
  ]  
  return (
    <div className='my-5'>

<h2 className="text-center">Gallery</h2> 
       <hr className="mx-auto" style={{width: '6%', border: '3px solid #3fbbc0'}} />
       <p className="mb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, consequuntur.</p>

    <Carousel data-bs-theme="dark">
       {galleryImgs.map((img) => (
         <Carousel.Item>
         <img
           className="d-block w-100" style={{height: '500px'}}
           src={img.img}
         />
       </Carousel.Item>
       ))}
    </Carousel>
    </div>
  )
}

export default Gallery