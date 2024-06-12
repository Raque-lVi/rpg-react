

import SelectQuestoes from './filhos dos filhos/selectQuestoes'



export default function questoes (props){

    return(
        <div className={props.class}> {/*"questoes_esquerda"*/}

            <SelectQuestoes objeto = {props.objeto}  num={props.inicio} text = {props.inicio == 1? "Seguir" : " "} />  

            <SelectQuestoes objeto = {props.objeto}  num={props.inicio + 1} text = {props.inicio == 1? "Desista do futuro" : " "} />

            <SelectQuestoes objeto = {props.objeto}  num={props.inicio + 2} text = '' />

            <SelectQuestoes objeto = {props.objeto}  num={props.inicio + 3} text = '' />

        </div>
    )
}