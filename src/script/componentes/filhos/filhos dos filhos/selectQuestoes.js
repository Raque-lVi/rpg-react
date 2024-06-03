

export default function select (props){
    
    const key = `select_${+ props.num}`;
    return(
         

        <p className="select" onClick={() => Andar(key, props.text)} id={key} >
            .{props.text}
        </p>
    )
}


function Andar (id, text){

    const p = document.getElementById(id);  

    if (text == "Seguir") {
        PraFrente(p);
    }

    else if (text == "Voltar"){
        PraTras(p);
    }
    else if (text == "Desista do futuro"){
        // aparece imagem de desistir do futuro e um botão para recomeço
        alert("A brincadeira acabou parsa")
    }
}

    function PraFrente(p){
        console.log("Andando para frente" + p)
    }
    function PraTras(p){
        console.log("Andando para tras" + p)
}
