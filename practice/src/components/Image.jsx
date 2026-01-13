import React, { useState } from 'react'
import image1 from '../components/image1.jpg'
import image2 from '../components/image2.jpg'
import image3 from '../components/image3.jpg'

const Image = () => {
    const [image, setImage] = useState(0);
    const images = [
        image1,
        image2,
        image3
    ]
    function next(){
      setImage((image + 1) >= images.length ? 0 : image +1);
    }
    function prev(){
      setImage((image - 1) < 0 ? images.length - 1 : image - 1);
      
    }
  return (
    <div>
      <button onClick={() => prev()}>Prev</button>

      <img src={images[image]} width="300" />

      <button onClick={() => next()}>Next</button>
    </div>
  );
}

export default Image
