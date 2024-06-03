

import '/home/vivian/Documentos/rpgTerror/projt/src/css/SectionBaixo.css'
import DadoSim from './filhos/Dado'
import Questoes from './filhos/questoes'




export default function Questoes_dado (props){
    return(
        <div className="Questoes_dado">
            
            <div className="questoes">
                
                <Questoes objeto = {props.objeto} class="questoes_esquerda" inicio ={1}/>
                
                <Questoes objeto = {props.objeto} class="questoes_direita" inicio = {5}/>

            </div>

            < DadoSim />
        </div>
    )
}