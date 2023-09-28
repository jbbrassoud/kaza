import './logement.css'
import title from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import Carousel from '../carrousel/carousel'



function Logement() {

    const {id} = useParams()
    let idSrc = title.filter((e) => e.id === id)
    const loc = idSrc[0]
    const imgSrc = loc.pictures
    const images = imgSrc;

    return <section className="logement">
        
        <div className='gallery'>
            <Carousel images={images}/>
        </div>
        <div className="location">
            <h1>{loc.title}</h1>
            <p>{loc.location}</p>
        </div>
        
    </section>
}

export default Logement;
