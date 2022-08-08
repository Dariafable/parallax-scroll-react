import { Parallax } from 'react-parallax';
import galaxy3 from '../img/galaxy3.jpg'

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={galaxy3} strength={400} bgImageStyle={{minHeight: '100vh'}}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
        
    </Parallax>
);

export default ImageTwo