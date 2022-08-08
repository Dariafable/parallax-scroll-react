import { Parallax } from 'react-parallax';
import stars1 from '../img/stars1.jpg'

const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={stars1} strength={200} bgImageStyle={{minHeight: '100vh'}}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
        
    </Parallax>
);

export default ImageOne