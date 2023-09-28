import './apropos.css'
import Banner from '../banner/Banner';
import Dropdown from '../dropdown/dropdown';
import banner from './banner.png'

function Apropos() {

    return <content>
            <Banner h1="" img={banner}/>
            <Dropdown title="Fiabilité" description="Chez Kaza, nous considérons la fiabilité comme l'un de nos piliers fondamentaux. Nous comprenons que nos clients comptent sur nous pour leur offrir des logements de qualité, à chaque réservation. C'est pourquoi nous nous efforçons constamment de maintenir un haut niveau de fiabilité dans toutes nos opérations. De la précision des informations sur nos appartements à la ponctualité de nos équipes de nettoyage, nous faisons de la fiabilité une priorité pour que nos clients puissent avoir une expérience de location sans souci."/>
            <Dropdown title="Respect" description="Le respect est une valeur essentielle chez Kaza. Nous croyons en la nécessité de respecter à la fois nos clients et nos partenaires. Nous traitons chaque client avec dignité et respect, en veillant à répondre à leurs besoins et préoccupations de manière courtoise et professionnelle. De plus, nous respectons nos partenaires locaux en collaborant de manière éthique et transparente, ce qui nous permet de maintenir des relations mutuellement bénéfiques. Chez Kaza, le respect guide notre conduite à chaque étape de notre parcours."/>
            <Dropdown title="Service" description="Nous nous engageons à offrir un service exceptionnel à nos clients. Chez Kaza, nous croyons que chaque séjour devrait être mémorable et sans tracas. C'est pourquoi notre équipe dévouée est disponible 24 heures sur 24 pour répondre à vos questions, résoudre les problèmes et vous assurer une expérience de location inoubliable. De la réservation initiale à l'enregistrement et au-delà, nous nous efforçons de fournir un service de classe mondiale à chaque étape de votre séjour."/>
            <Dropdown title="Sécurité" description="La sécurité de nos clients est notre priorité numéro un. Chez Kaza, nous avons mis en place des normes de sécurité rigoureuses pour nos appartements, en veillant à ce qu'ils soient équipés des dernières technologies de sécurité. De plus, nos processus de nettoyage et de maintenance respectent les normes les plus élevées pour garantir un environnement sûr et sain. Vous pouvez avoir l'esprit tranquille en choisissant Kaza pour votre prochain séjour, car nous mettons tout en œuvre pour assurer votre sécurité."/>


        </content>
        
}

export default Apropos;