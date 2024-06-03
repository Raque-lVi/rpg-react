

import SelectQuestoes from './filhos dos filhos/selectQuestoes'



export default function questoes (props){

    return(
        <div className={props.class}> {/*"questoes_esquerda"*/}

            <SelectQuestoes num={props.inicio} text = {props.inicio == 1? "Seguir" : " "} />  

            <SelectQuestoes num={props.inicio + 1} text = {props.inicio == 1? "Desista do futuro" : " "} />

            <SelectQuestoes num={props.inicio + 2} text = '' />

            <SelectQuestoes num={props.inicio + 3} text = '' />

        </div>
    )
}