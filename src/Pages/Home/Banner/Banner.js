import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider'
import './Banner.css'

import femaleChef from '../../../images/femaleChef.webp';
import lunchBoxes from '../../../images/lunchBoxes.webp'
import foodWork from '../../../images/foodWork.webp'

// const sliderImages = [{ femaleChef }, { lunchBoxes }, { foodWork }];
/*const sliderImages1 = ({
    femaleChef: String,
    lunchBoxes: undefined,
    foodWork: undefined,
} | {
    femaleChef: undefined,
    lunchBoxes: String,
    foodWork: undefined,
} | {
    femaleChef: String,
    lunchBoxes: undefined,
    foodWork: undefined,
})*/

const Banner = () => {
    return (

        <div id='slideshow' className='banner'>
            <div>
                <img src={lunchBoxes} alt="" />
            </div>
            <div>
                <img className='img2' src={femaleChef} alt="" />
            </div>
            <div>
                <img src={foodWork} alt="" />
            </div>
        </div>

        // <div>
        //     <SimpleImageSlider
        //         width={896}
        //         height={504}
        //         image={sliderImages}
        //         showBullets={true}
        //         showNavs={true}
        //     />
        // </div>

    );
};

export default Banner;