import Image from 'next/image';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = () => {
  return (
    <div className="flex justify-center">
    <ReactCarousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
    >
      <div className='w-full h-auto'>
        <Image src="/carousel1.jpg" alt="Image 1" width={400} height={400} />
        <p className="legend">Caption 1</p>
      </div>
      <div className='w-full h-auto'>
        <Image src="/carousel2.jpg" alt="Image 2" width={400} height={400} />
        <p className="legend">Caption 2</p>
      </div>
      <div className='w-full h-auto'>
        <Image src="/carousel3.jpg" alt="Image 3" width={400} height={400} />
        <p className="legend">Caption 3</p>
      </div>
    </ReactCarousel>
    </div>
  );
};

export default Carousel;
