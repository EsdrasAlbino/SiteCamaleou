import './mecanica.css';



export default function Mecanica(props){
    return(
        <div id="mecanica">
            <img src='{props.icon}'/>
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
        </div>
    )
}