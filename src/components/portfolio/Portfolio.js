import './portfolio.scss';

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Desing</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;