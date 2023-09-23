import './apropos.css'
import Banner from '../banner/Banner';
import Dropdown from '../dropdown/dropdown';
import banner from './banner.png'

function Apropos() {

    return <section className="apropos">
            <Banner h1="" img={banner}/>
            <Dropdown title="Fiabilité" description="LLorem ipsum"/>
            <Dropdown title="Respect" description="LLorem ipsum"/>
            <Dropdown title="Service" description="LLorem ipsum"/>
            <Dropdown title="Sécurité" description="LLorem ipsum"/>


        </section>
        
}

export default Apropos;