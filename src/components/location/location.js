import './location.css'

import { Link } from 'react-router-dom'
//import loc from '../../datas/logements.json'


function Location(props) {
    const e = props.e

    return( 
        <div className="card">
            <Link to = {"/location/"+e.id}>
            <span>{e.title}</span>
            <img src={e.cover} alt={e.title}></img>
            </Link>
        </div>
    )
    


}

export default Location;

