import './banner.css'

function Banner(props) {
    return <div className='banner'>
    <h1>{ props.h1 }</h1>
    <img className="banner-img"src={ props.img } alt='banner'></img>
    </div>
}



export default Banner
