import logo from './logo.svg';
import './header.css';
import { NavLink} from 'react-router-dom';

//récupération et soulignement du lien avec la classe "active"



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
var currentPageURL = window.location.href;
var navLinks = document.querySelectorAll('nav NavLink');
console.log(navLinks);
navLinks.forEach(function(link) {
  if (link.href === currentPageURL) {
    link.classList.add('active');
  }
});

export default Header