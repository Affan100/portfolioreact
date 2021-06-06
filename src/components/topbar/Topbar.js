// import './topbar.scss'
// import { AddIcCall } from "@material-ui/icons"
// import '../Navbar.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import { Nav, Navbar } from 'react-bootstrap';

// const Topbar = () => {
//     return (
//         <div className='topbar'>
//             <div className='wrapper'>
//                 <div className='left'>
//                     <a href="#intro" className='logo'>Portfolio</a>
//                     {/* <div className='itemContainer'>
//                         <AddIcCall className='icon'/>
//                         <span>096 424 7877</span>
//                     </div> */}
//                 </div>

//                 <div className='right'>
//                     <div>
//                         <Navbar bg="secondary" variant="dark" expand='sm' collapseOnSelect>
//                             <Navbar.Toggle />
//                             <Navbar.Collapse>
//                                 <Nav>
//                                     <Navbar.Collapse>
//                                         <Nav.Link href='#intro'>Home</Nav.Link>
//                                         <Nav.Link href='#about'>About</Nav.Link>
//                                         <Nav.Link href='#education'>Education</Nav.Link>
//                                         <Nav.Link href='#skill'>Skill</Nav.Link>
//                                         <Nav.Link href='#contact'>Contact</Nav.Link>
//                                     </Navbar.Collapse>
//                                 </Nav>
//                             </Navbar.Collapse>
//                         </Navbar>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Topbar;



// -----------------------------------------------------------------------------------------------
import './topbar.scss'
import '../Navbar.css';
import { AddIcCall, MailOutline } from "@material-ui/icons"
import 'bootstrap/dist/css/bootstrap.css'

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>Portfolio</a>
                    <div className='itemContainer'>
                        <AddIcCall className='icon' />
                        <span>096 424 7877</span>
                    </div>
                    <div className='itemContainer'>
                        <MailOutline className='icon' />
                        <span>Affan_pathan@hotmail.com</span>
                    </div>
                </div>


                <div className='right'>
                    <div className='bar' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Topbar;