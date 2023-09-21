import './app.css'
import Location from '../location/location'
import Banner from '../banner/Banner'

import loc from '../../datas/logements.json'

function App() {
  return <content>

    <Banner />
    <section className='locations'>
            {loc.map((e)=> (
             <Location key={e.id} e={e} />
            ))}
        </section>

  </content>
}

export default App