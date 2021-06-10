import './intro.scss'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer"],
        });
    }, []);


    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='itemContainer'>
                    <img className="img1" src="assests/portfolio1.png" alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Affan Pathan</h1>
                    <h3>Front End <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    {/* <ExpandMoreIcon className="icon" /> */}
                    <img src="assests/down-icon.png" alt="" />
                </a>
            </div>

        </div>
    )
}
export default Intro;