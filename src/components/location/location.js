import './location.css'

import { Link } from 'react-router-dom'
import loc from '../../datas/logements.json'
console.log(loc);

function Location(props) {
    const e = props.e

    return( 
        <div className="logement">
            <Link to = {"/location/"+e.id}>
            <span>{e.title}</span>
            <img src={e.cover} alt="loc1"></img>
            </Link>
        </div>
    )
    


}

export default Location;

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