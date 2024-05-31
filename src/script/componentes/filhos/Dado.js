<script src="/home/vivian/Documentos/rpgTerror/projt/src/script/logic/dadoLogic.js" ></script>



function DadoSim (){

    return (
        <div className="dado">
            <p className="nomeDados">o numero do dado é:</p>
            <p className="resposta" id="resposta">  0   </p>
            <button className="botao_dado" id="botao_dado">Girar dado</button>
        </div>
    );
}

export default DadoSim;



