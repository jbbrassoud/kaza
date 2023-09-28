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

    return <content>
        
        <div className='gallery'>
            <Carousel images={images}/>
        </div>
        <div className='loc-head'>
            <div className="title">
                <h1>{loc.title}</h1>
                <p>{loc.location}</p>
            </div>
            <div className="loc-host">
                <span>{loc.host.name}</span>
                <img src={loc.host.picture} alt={"photo de"+loc.host.picture}/>
            </div>
        </div>

        
    </content>
}

export default Logement;
