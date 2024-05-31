import React from 'react';

const obj = [
    {   
        text : 
`Em um mundo pós apocaliptico onde tudo é 
muito escaço, você mais 4 pessoas
deveram lutar para sobreviver

____________________________________

A meu querido Jogador, um
conselho dou: não confie em Ninguem,
nem em si mesmo
____________________________________

A comida é escaça e você so tem um
sanduiche para 4 pessoas saia do
esconderijo e busque comida antes
que morra de fome! `,

        lugar: 1,
        evento: "inicio",
    },

    {
        text:
`Os minutos pareciam horas enquanto 
o grupo se apressava pelas ruas vazias. 
O anoitecer caía rapidamente, 
engolindo tudo em sua escuridão mortal. 
O desespero começava a se infiltrar 
nas mentes dos heróis, quando...`,
        lugar: 3,
        evento: "inicio",
    },

    {
        text:
    `De repente, avistaram uma casa
    humilde ao longe. seu grupo via
     a pequena casa como esperança
    e oportunidade, porem Carmem
    (a mais medrosa do grupo) receava
    a casa`,
    lugar: 4,
    evento: "inicio"
}



]


{/*
const cenario = (ev) => [
    {
        img: "",
        lugar: 1,
        questoes: ["Seguir", "Desistir da Vida"],
        evento: () => {
            if (ev == "inicio"){
                return "inicio";
            }
            else{
                return ev;
            }
        }
    }
]
*/}

function Textos(props) {
   
    const textoObj = obj.find(item => item.lugar === props.lugar && item.evento === props.evento);
    return textoObj.text ;
    
}

export default Textos;
    





