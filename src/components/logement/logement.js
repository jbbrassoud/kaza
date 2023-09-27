import './logement.css'
import title from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import Carousel from '../carrousel/carousel'



function Logement() {

    //const {idUrl} = useParams() ;
    const {id} = useParams()
    console.log(id);
    let idSrc = title.filter((e) => e.id === id)
    const loc = idSrc[0]
    console.log(loc.pictures[0]);

    return <section className="logement">
        <Carousel imgSrc={loc.pictures[0]}/>
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
