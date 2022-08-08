import { Parallax } from 'react-parallax';
import nasa from '../img/nasa.jpg'

const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={nasa} strength={400} bgImageStyle={{minHeight: '100vh'}}>
        <div className='content'>
            <span className='img-txt'>A trip to Space</span>
        </div>
        
    </Parallax>
);

export default ImageThree