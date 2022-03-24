import Logo from '../airbnb1.png'

export default function Joke(props) {
  
    return (
        <div>
            <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
            <h3>Punchline: {props.punchline}</h3>
            <hr />
            
        </div>
    )
}