import './stars.css'
import gstar from './greystar.svg'
import rstar from './redstar.svg'


function Stars(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='stars-list'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <img className="redstar" key={rangeElem.toString()} src={rstar} alt=""></img> : <img src={gstar} alt=""/>
            )}
        </div>
    )
}

export default Stars