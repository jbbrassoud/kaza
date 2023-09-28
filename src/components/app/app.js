//app = home, à corriger lorsque tout fonctionnera bien

import './app.css'
import Location from '../location/location'
import Banner from '../banner/Banner'
import banner from './banner.png'
import loc from '../../datas/logements.json'

function App() {
  return <content>

    <Banner h1="Chez vous, partout et ailleurs" img={banner}/>
    <section className='locations'>
            {loc.map((e)=> (
             <Location key={e.id} e={e} />
            ))}
        </section>

  </content>
}

export default App