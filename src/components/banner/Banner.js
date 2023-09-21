import banner from './banner.png'
import './banner.css'

//const bannerCover = document.getElementsByClassName('banner');


function Banner() {
    return <div className='banner'>
    <h1>Chez vous, partout et ailleurs</h1>
    <img src={banner} alt='banner'></img>
    </div>
}



export default Banner
