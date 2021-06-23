import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import {
    webPortfolio,
    workPortfolio,
    designPortfolio,
} from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "work",
            title: "Work Experience",
        },
        {
            id: "design",
            title: "Design",
        },
    ];

    useEffect(() => {

        switch (selected) {
            case "web":
                setData(webPortfolio);
                break;
            case "work":
                setData(workPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>My Experience</h1>

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