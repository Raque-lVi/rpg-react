

export default function li(props) {
    return (
        <li>
            <a href="" id= {props.id}>
                <p className ="icon_nome">{props.nome}</p>
                <img className ="icon" src= {props.src} alt={props.alt} />
            </a>
        </li>
    )
}