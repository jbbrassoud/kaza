import './tags.css'

function Tags(props) {
const {tags} = props

    return <div>
        <ul className="tag-list">

            {tags.map((tag, index) => 
                <li key={index}>{tag}</li>
            )}
        </ul>
    </div>
}

export default Tags