import "./menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Experience</a>
                </li>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#skill">Skill</a>
                </li>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#blog">My Blog</a>
                </li>
                <li onClick ={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
export default Menu;