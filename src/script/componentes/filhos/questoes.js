

import SelectQuestoes from './filhos dos filhos/selectQuestoes'

export default function questoes (props){
    return(
        <div className={props.class}> {/*"questoes_esquerda"*/}
            <SelectQuestoes num={props.inicio} text = 'Seguir' />
            
            <SelectQuestoes num={props.inicio + 1} text = 'Desista do futuro' />

            <SelectQuestoes num={props.inicio + 2} text = '' />

            <SelectQuestoes num={props.inicio + 3} text = '' />

        </div>
    )
}