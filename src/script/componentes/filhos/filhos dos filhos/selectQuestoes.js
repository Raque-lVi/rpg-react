

var lugar = 1, momento = "inicio";

export default function select (props){
    
    const key = `select_${+ props.num}`;
    return(
         

        <p className="select" onClick={() => Andar(key, props.objeto)} id={key} >
            .{props.text}
        </p>
    )
}


function Andar (id, objeto){

    const p = document.getElementById(id).textContent; 

 
    if (p == ".Seguir" || p == ".Recomeçar") {
        lugar = lugar + 1;
        pesquisa (objeto)
    }

    else if (p == ".Voltar" || p == ".Desista do futuro"){
        lugar = lugar - 1;
        pesquisa (objeto)
    }
}


function pesquisa (objeto){

    const cenario = document.getElementById("cenarioFundo");
    const p2 = document.getElementById("select_2");
    const p1 = document.getElementById("select_1");

    objeto.forEach(ele => {
        if(ele.lugar == lugar){

            cenario.src = ele.src; 

            if (lugar == 2){
                p2.textContent = ".Voltar"; 
            }else if (lugar == 1){
                p1.textContent = ".Seguir";
                p2.textContent = ".Desista do futuro"; 
            }else if (lugar == 0){
                p1.textContent = ".Recomeçar";
                p2.textContent = ".";
            }
        }
    });
}





