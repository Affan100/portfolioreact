import React from 'react'
import './blog.scss';

const Blog = () => {
    return (
        <div className='blog' id='blog'>
            <div className='container_bl'>
                <div className="aboutme">
                    <div className="top">
                        <a href='https://www.youtube.com/channel/UCo6Mums08THZNvYlW6PYAzQ'>
                            <img src="assests/youtube.png" className='left' alt="" />
                        </a>
                        <a href='https://www.facebook.com/affan.pathan.5203/'>
                            <img src="https://scontent.fhdy4-1.fna.fbcdn.net/v/t1.6435-9/191230156_1702326139977122_3516734536661739854_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFPf67jmVg0PVXEx8LSWwn4lcDL3G8rWL6VwMvcbytYvhstazokUkiAgpPnM4lzvWUY3MsI5-j_CgcgMTSvEFP9&_nc_ohc=kNtEy45MYR0AX-TRqbo&_nc_ht=scontent.fhdy4-1.fna&oh=32856b0c5a41bcc2197a209da70fbcfd&oe=60D79AB7" className='user' alt="" />
                        </a>
                        <a href="https://medium.com/@affanpathan/c0d0ce169d45">
                            <img src="assests/medium.png" className='right' alt="" />
                        </a>
                    </div>
                    <h2 className="topic">About Me</h2>
                    <div className='center'>
                        <h2>I’m a new graduate, Prince of Songkla University Phuket Campus from the Faculty of Computer Engineering.
                            I’m a diligent person and responsible for work and always ready to learn In the future.
                        </h2>
                    </div>
                    <div className='bottom'>
                        <h3>Affan</h3>
                        <h4>Pathan of Student</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;