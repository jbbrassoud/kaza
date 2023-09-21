import logo from './logo.svg';
import './header.css';
//import { Link } from 'react-router-dom'

/* "can not destructure basename"

function Header() {
    return (<header>
                    <img src={logo} className="App-logo" alt="logo"></img>
                    <nav>
                        <Link to="/">Accueil</Link>
                        <Link to="/a-propos">Apropos</Link>
                    </nav>
            </header>
    )
}

*/

function Header() {
    return <header>
                    <img src={logo} className="App-logo" alt="logo"></img>
                    <nav>
                        <a href='index.html'>Accueil</a>
                        <a href='index.html'>A propos</a>
                    </nav>
            </header>
}

export default Header