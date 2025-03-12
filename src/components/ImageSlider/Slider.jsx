import React from 'react'
import ImageSlider from './ImageSlider';
 // by using import method src group 12(2)
import imagge1 from '../../assets/Group 12 (2).png'
import imagge2 from "../../assets/Group 12 (2).png";
import imagge3 from "../../assets/Group 12 (2).png";
const images = [
  imagge1,
  imagge2,
  imagge3
];


const content = [
  "Your harvest, our promise,Krisaanjh",
  "Your harvest, our promise,Krisaanjh",
  "Your harvest, our promise,Krisaanjh",
];


const Slider=()=>{
    return (
      <>
        <div className=''>
                 <ImageSlider images={images} content={content} delay={10000} />
        </div>
      </>
    );
}
export default Slider;