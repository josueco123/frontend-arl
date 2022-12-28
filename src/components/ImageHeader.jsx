import React from 'react';
import { Carousel, Image } from 'antd';


const ImageHeader = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <Image
          height={200}
          width={1375}
          preview={false}
          src="https://www.purosviajes.com/wp-content/uploads/2021/11/vuelos.jpg"
        />
      </div>
      <div>
      <Image
          height={200}
          width={1375}
          preview={false}
          src="https://s1.1zoom.me/b4430/160/Passenger_Airplanes_Sky_Clouds_547402_3840x2160.jpg"
        />
      </div>
      <div>
      <Image
          height={200}
          width={1375}
          preview={false}
          src="https://www.purosviajes.com/wp-content/uploads/2021/11/vuelos.jpg"
        />
      </div>
      <div>
      <Image
          height={200}
          width={1375}
          preview={false}
          src="https://s1.1zoom.me/b4430/160/Passenger_Airplanes_Sky_Clouds_547402_3840x2160.jpg"
        />
      </div>
    </Carousel>
  );
};
export default ImageHeader;