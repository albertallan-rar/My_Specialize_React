import './styles.css';

interface PresenceAreaProps{
    name: string,
    time: string,
}

function Card(props: PresenceAreaProps){
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

export default Card