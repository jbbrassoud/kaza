import './logement.css'
import title from '../../datas/logements.json'
import { useParams } from 'react-router-dom'

function Logement() {

    //const {idUrl} = useParams() ;
    const {id} = useParams()
    console.log(id);
    let idSrc = title.filter((e) => e.id === id)
    const loc = idSrc[0]

    return <section className="logement">
        <div className='gallery'>
            <img src={loc.cover} alt='Cover'></img>
        </div>
        <div className="location">
            <h1>{loc.title}</h1>
            <p>{loc.location}</p>
        </div>
        
    </section>
}

export default Logement;
