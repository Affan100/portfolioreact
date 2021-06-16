import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import {
    featuredPortfolio,
    webPortfolio,
    mobliePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "moblie App",
            title: "Moblie App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "moblie App":
                setData(mobliePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>

            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>

            <div className="container">
                {data.map((data) => (
                    <div className="item">
                        <img
                            src={data.img}
                            alt=""
                        />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Portfolio;