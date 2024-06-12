<script src="/home/vivian/Documentos/rpgTerror/projt/src/script/logic/dadoLogic.js" ></script>

var vidaInimigo = 100, vidaPrso = 100;

function RolaDado(){






}

function luta(/*objet(ou API) personalidade*/){

    const pers = document.getElementById("select_4");
    const inim = document.getElementById("select_8"); 


    let rand = Math.floor(Math.random() * 20 );



    if ( vidaPrso > 0){//personagem age
        vidaInimigo = vidaInimigo - rand;
        inim.innerHTML = `Inimigo: ${vidaInimigo}`;
        if( vidaInimigo > 0){


            //dependendo do mostro no futuro eu farei o rand = rand + bonusForçaMostro
            // vidaPrso = vidaPrso + bonusArmadura/resistencia

            rand = Math.floor(Math.random() * 20 );

            vidaPrso = vidaPrso - rand;
            pers.innerHTML = `Você: ${vidaPrso}`;

            if (vidaPrso <= 0){
                preguisa(" PERDEU OTARIO ")
            }
        }
        else{
            preguisa(" Né que tu venceu CRIA ")
        }
    }else{
        preguisa(" PERDEU OTARIO ")
    }

}

function NumeroAleat(){

    const resposta = document.getElementById("resposta");

    var rand = Math.floor(Math.random() * 20 );// isso porque o numero posto nâo pode ser sorteado

    resposta.innerHTML = rand+1;
}

function preguisa(mensagem){
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");

    p1.innerHTML = mensagem;
    p2.innerHTML = "";
    p3.innerHTML = "";
}

function DadoSim (){

    return (
        <div className="dado">
            <p className="nomeDados">o numero do dado é:</p>
            <p className="resposta" id="resposta">  0   </p>
            <button onClick={NumeroAleat/*luta*/}  className="botao_dado" id="botao_dado">Girar dado</button>
        </div>
    );
}

export default DadoSim;



