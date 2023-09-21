import '../locations/locations.css'

import { Link } from 'react-router-dom'
import loc from '../../datas/logements.json'
console.log(loc);

function Locations() {
 
/*     title.forEach((e) => {
        console.log(e.cover);
        return(
            <div className="logement">
                <Link to = "#">
                <span>{e.title}</span>
                <img src={e.cover} alt="loc1"></img>
                </Link>
            </div>
        ) 
    }) */
    //<Link to = "/$title.id">
    return(
        <section className='locations'>
            {loc.map((e)=> (
            <div className="logement">
            <Link to = "#">
            <span>{e.title}</span>
            <img src={e.cover} alt="loc1"></img>
            </Link>
        </div>
            ))}
        </section>
    )
    


}

export default Locations;

/*return <section className="locations">
<div className="location">
    <Link to="#">
    <span>Titre de la location1</span>
    <img src={0.[cover]} alt="loc1"></img>
    </Link>
</div>
<div className="location">
    <span>Titre de la location2</span>
</div>
<div className="location">
    <span>Titre de la location3</span>
</div>
<div className="location">
    <span>Titre de la location4</span>
</div>
<div className="location">
    <span>Titre de la location5</span>
</div>
<div className="location">
    <span>Titre de la location6</span>
</div>
</section>*/