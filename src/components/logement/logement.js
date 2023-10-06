import './logement.css'
import title from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import Carousel from '../carrousel/carousel'
import Dropdown from '../dropdown/dropdown'
import DropdownStuff from '../dropdown/dropdownStuff'
import Tags from '../tags/tags'
import Stars from '../stars/stars'



function Logement() {

    const {id} = useParams()
    let idSrc = title.filter((e) => e.id === id)
    const loc = idSrc[0]
    const imgSrc = loc.pictures
    const images = imgSrc;
    const stuff = loc.equipments
    const tagsList = loc.tags
    console.log(stuff);

    

    return <content>
        

            <Carousel images={images}/>

        <section className='loc-top'>
            <div className="title">
                <h1>{loc.title}</h1>
                <p>{loc.location}</p>

                <Tags tags={tagsList}/>
            </div>
        
            <div className='loc-mid'>
                <div className="loc-host">
                    <span>{loc.host.name}</span>
                    <img src={loc.host.picture} alt={"photo de"+loc.host.picture}/>
                </div>
                <div className="starsBar">
                    <Stars scaleValue={loc.rating}/>
                </div>
            </div>
        </section>
        <div className='loc-bot'>

            <Dropdown title="Description" description={loc.description}/>
            <DropdownStuff title="Equipements" stuffList={stuff} className="stuff"/>
        </div>


        
    </content>
}


export default Logement;
