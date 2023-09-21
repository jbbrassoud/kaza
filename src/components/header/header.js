import logo from './logo.svg';
import './header.css';
/* import { Link, BrowserRouter as Router } from 'react-router-dom';


function Header() {
    return (<header>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/a-propos">Apropos</Link>
                    </nav>
            </header>
    )
} */



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