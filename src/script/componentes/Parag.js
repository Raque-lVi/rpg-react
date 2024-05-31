
import React from 'react';
{/*import Objet from '/home/vivian/Documentos/rpgTerror/projt/src/script/logic/objetText';

export default function Para(props) {
    let textoObj = <Objet evento={props.evento} lugar={props.lugar} />;

    {console.log(textoObj)}

    return (
        <p id={props.id}>
            {textoObj}
        </p>
    );
}*/}

const linha = ''
const obj = [
    {
        text:
            `A meu querido Jogador, um
            conselho dou: não confie em Ninguem,
            nem em si mesmo`,

        lugar: 1,
        evento: "inicio",
        id: `p1`,
    },
    {
        text:
            `A comida é escaça e você so tem um
            sanduiche para 4 pessoas saia do
            esconderijo e busque comida antes
            que morra de fome! `,

        lugar: 1,
        evento: "inicio",
        id: `p3`,
    },
    

    {
        text:
            `Os minutos pareciam horas enquanto 
            o grupo se apressava pelas ruas vazias. 
            O anoitecer caía rapidamente, 
            engolindo tudo em sua escuridão mortal. 
            O desespero começava a se infiltrar 
            nas mentes dos heróis, quando...
            ${linha}`,
        lugar: 3,
        evento: "inicio",
        id: `p1`,
    },

    {
        text:
            `De repente, avistaram uma casa
            humilde ao longe. seu grupo via
            a pequena casa como esperança
            e oportunidade, porem Carmem
            (a mais medrosa do grupo) receava
            a casa
            ${linha}`,
        lugar: 4,
        evento: "inicio",
        id: `p1`,
    },
    {
        text:
            `A casa possuia uma porta estremamente emperrada.
            Você tera de tentar com a sorte para abrir a porta
            e por fim ter um teto sobre suas cabeças e talvez uma 
            cama quentinha para a noite
            ${linha}
            `,
        lugar: 5,
        evento: "casa abandonada",
        id: `p1`,
    },
    {
        text:
            `O cheiro de mofo e abandono preenchia
            ar, enquanto adentravam a residência. 
            Por um momento, a sensação de alívio os invadiu,
            acreditando terem encontrado um abrigo seguro.

            ${linha}
            Porém, perceberam, que as duplicatas estavam por toda
            parte, em diferentes estágios de deformidade. 
            Alguns tinham braços estendidos desproporcionalmente, 
            enquanto outros exibiam rostos grotescamente distorcidos. 

            ${linha}
            A visão era aterrorizante, mas não havia tempo para hesitar..`,
        lugar: 6,
        evento: "casa abandonada",
        id: `p1`,
    },



];

function Textos(evento, lugar, id) {

    const textoObj = obj.find(item => item.lugar === lugar && item.evento === evento  && item.id === id);
    let texto = textoObj.text;
    return texto;

}

export default function Para(props) {
    
    var textoObjjj = '';

    {props.id != "p2" && (  
        textoObjjj = Textos(props.evento, props.lugar, props.id)
    )
    }

    { console.log(textoObjjj) }

    {props.id == "p2" && (  
        textoObjjj = '______________________________________'
    )
    }
    return (
        <p className="p_historia" id={props.id}>
            {textoObjjj}
        </p>
    );
}