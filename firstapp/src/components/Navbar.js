import reactLogo from '../images/logo192.png';

const Navbar = () => (
    <header className="header">
        <nav  className="nav">
            <div className='nav-main'>
                <img className='nav-image' src={reactLogo} alt="react"/>
                <h3 className='nav-title'> React Facts</h3>
            </div>
            <h4 class='nav-info'> React Course - Project 1</h4>
        </nav>
    </header>
)

export default Navbar;