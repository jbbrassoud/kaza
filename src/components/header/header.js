import logo from './logo.svg';
import './header.css';
import { NavLink} from 'react-router-dom';


function Header() {
    return (<header>
                <NavLink to="/"><img src={logo} className="App-logo" alt="logo"/></NavLink>
                    
                    <nav>
                        <NavLink to="/">Accueil</NavLink>
                        <NavLink to="/a-propos">Apropos</NavLink>
                    </nav>
            </header>
    )
} 



/*function Header() {
    return <header>
                    <img src={logo} className="App-logo" alt="logo"></img>
                    <nav>
                        <a href='index.html'>Accueil</a>
                        <a href='index.html'>A propos</a>
                    </nav>
            </header>
}*/


export default Header