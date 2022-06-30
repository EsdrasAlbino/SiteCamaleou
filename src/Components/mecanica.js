import './mecanica.css';

export default function Mecanica(props){
    return(
        <div>
            <h3>{props.NomeMecanica}</h3>
            <p>{props.DescricaoMecanica}</p>
        </div>
    )
}