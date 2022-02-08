import { useCallback, useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';

const countTotal = (num) => {
    console.log('useMemo');
    return num + 10
}

//! Функц. компонент HOOKS: useState, useEffect, useCallback, useMemo
const Slider = (props) => {

    //! ______    useState  __________

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    function changeSlide(i) {                      // фун. setState +1\-1
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {                    // фун. setState toggle
        setAutoplay(autoplay => !autoplay)
    }

    //! ______    useEffect  __________
    useEffect(() => {
        console.log('useEffect SLide');
        document.title = `Slide: ${slide}`;

    }, [slide]);

    useEffect(() => {
        console.log('useEffect autoplay')
    }, [autoplay])

    //! ______    useCallback  __________

    //  функція що типу отримує з сервера масив фото, обгорнута в useCallback
    const getSomeImages = useCallback(() => {
        console.log('useCallback');
        return [
            "https://rudenkooleg.com//images/rdgalleries/nature/alive/rudenkooleg-com-mother-nature.jpg",
            "https://rudenkooleg.com//images/rdgalleries/landscape/rudenkooleg-com-frozen-kingdom.jpg"
        ]
    }, []);

    //! ______    useMemo  __________
    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);                             //відслідковуєм зміну стейта slide

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide])

    useEffect(() => {
        console.log('useEffect style!')
    }, [style])

    return (
        <Container>
            <div className="slider w-50 m-auto">

                <Slide getSomeImages={getSomeImages} />

                <div className="text-center mt-5"> Active slide {slide} <br />
                    {autoplay ? 'auto' : null}
                </div>

                <div style={style} className="text-center mt-5"> Total Slides: {total} </div>

                <div className="buttons mt-3">
                    <button className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

//! Батьківський компонент для useCallback, приймає дочірню fn 
const Slide = ({ getSomeImages }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])                 //! відслідковуєм зміну самої функції

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}

export default Slider;

//! Класовий компонент
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 2
//         }
//     }
//     // ______________________________
//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`
//     }

//     // ______________________________
//     changeSlide = (i) => {
//         this.setState(({ slide }) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({ autoplay }) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br /> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

