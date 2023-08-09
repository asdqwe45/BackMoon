import Carousel from 'react-bootstrap/Carousel';
import './RemoteplayCarousel.css';
import { useNavigate } from 'react-router-dom'


const Remoteplaycarousel = (props) => {

    console.log(props.urgentdog,'하위에서 받은 값.')
    const urgentdog = props.urgentdog


    const navigate = useNavigate()
    const reservation = (id, e) => {
        console.log(id)
        navigate(`/straydog-detail/${id}`)
    }



    return (
        <Carousel id="carouselExampleDark" variant="dark" slide={false} prevIcon={true} nextIcon={true} className="fullscreen-carousel1">
            <Carousel.Item interval={10000} onClick={(e)=>{reservation(urgentdog[0].DogID, e)}} >
                <img className="d-block" src="/dog1.jpg" alt="First slide" style={{width : '500px', height : '700px'}} />
                <Carousel.Caption className="d-none d-md-block">

                    <p style={{
                        fontSize: '15px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'Arial Black',
                        textAlign : 'center'
                    }}>놀고 싶으면 클릭하라고해
                    </p>



                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} onClick={(e)=>{reservation(urgentdog[1].DogID, e)}}>
                <img className="d-block" src="/dog2.jpg" alt="Second slide" style={{width : '500px', height : '700px'}}/>
                <Carousel.Caption className="d-none d-md-block">
                    <p style={{
                        fontSize: '15px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'Arial Black',
                        textAlign : 'center'
                    }}>놀고 싶으면 클릭하라고해
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item onClick={(e)=>{reservation(urgentdog[2].DogID, e)}}>
                <img className="d-block" src="/dog3.jpg" alt="Third slide" style={{width : '500px', height : '700px'}}/>
                <Carousel.Caption className="d-none d-md-block">
                    <p style={{
                        fontSize: '15px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'Arial Black',
                        textAlign : 'center'
                    }}>놀고 싶으면 클릭하라고해
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item onClick={(e)=>{reservation(urgentdog[3].DogID, e)}}>
                <img className="d-block" src="/dog6.jpg" alt="Third slide" style={{width : '500px', height : '700px'}}/>
                <Carousel.Caption className="d-none d-md-block">
                    <p style={{
                        fontSize: '15px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'Arial Black',
                        textAlign : 'center'
                    }}>놀고 싶으면 클릭하라고해
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Remoteplaycarousel;