
import './css/reset.css'
import './css/App.css'
import Cenario from './script/componentes/cenario'

import LiMenu from './script/componentes/liMenu'
import Para from './script/componentes/Parag'
import Questoes_dado from './script/componentes/Questoes_dado'
/*import cen from './img/cenario/cn_grande_bunker.jpg'*/
import Mulher from './img/icon_mulher.png'
import Bolsa from './img/icon_bolsa-de-livro-escolar.png'
import Compras from './img/icon_mosca.png'
import Mapa from './img/icon_mapa-do-tesouro.png'

{/*todo o componente importado tem de ter um retorno unico, ou seja, retornar uma unica teg cheia de 
tegs filhos, porem se eu não quiser ter de retornar toda vida um div com coisas dentro eu posso 
no lugar da div colocar um abre e fecha de teg vazio ex: return( <> conteudos </> ); */}


var CenariosD = [
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_grande_bunker.jpg?raw=true',
        nome: 'Grande Bunker',
        lugar: 1
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_gameOver.jpg?raw=true',
        nome: 'Game Over',
        lugar: 0
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_escada.jpg?raw=true',
        nome: 'Escada',
        lugar: 2
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_rua.jpg?raw=true',
        nome: 'Rua escura',
        lugar: 3
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_casaVelha.jpg?raw=true',
        nome: 'Casa Assombrada de longe',
        lugar: 4
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_porta.jpg?raw=true',
        nome: 'Porta',
        lugar: 5
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/casa_abandonadaDentro.jpg?raw=true',
        nome: 'Casa abandonada por dentro',
        lugar: 6
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_floresta_neblina.jpg?raw=true',
        nome: 'Floresta Nebulosa',
        lugar: 7
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_igreja_dentro.jpg?raw=true',
        nome: 'Igreja Dentro',
        lugar: 8
    },
    {
        src: 'https://github.com/Raque-lVi/rpg-react/blob/master/src/img/cenario/cn_antigo_bunker.jpg?raw=true',
        nome: 'Antigo Bunke',
        lugar: 9
    },
        //tem de colocar muito mais depois como por exemplo o laboratorio com placas dos seus
        //"pacientes" (duplicatas), a rosa com a carta diferente, e o gato e sua adoção.
        // depois tem de ter a loja perdida e a falsa salvadora. 
]


function App() {
  return (

    <div className="cenarios">

      <Cenario objeto = {CenariosD}/*{cen}*/ /> 

      <main className ="containe" id="conteine_index">
            
        <section className='tudo' >

            <div className ="lateral"> 
                <div className ="coisas_menu">
                    <div className ="historia">
                        <h2>HISTORIA</h2>
                        <br />
                        <Para id= {`p1`} evento = "inicio" lugar = {1} ></Para>
                        <Para id= {`p2`} evento = "inicio" lugar = {1} ></Para>
                        <Para id= {`p3`} evento = "inicio" lugar = {1} ></Para>
                    </div>

                    <div className="menu" >
                        <ul>
                            <LiMenu src= {Mulher} nome= "avatar" id = "avatar" alt = "imagem de uma pessoa" />
                            <LiMenu src= {Bolsa} nome= "bolsa" id = "bolsa" alt = "imagem de uma bolsa" />
                            <LiMenu src= {Compras} nome= "compras" id = "mapa" alt = "imagem de um mapa" />
                            <LiMenu src= {Mapa} nome= "menu" id = "casa" alt = "imagem de uma casa" />
                            
                        </ul>
                    </div>

                </div>
            </div>

            <Questoes_dado objeto = {CenariosD} />

        </section>
        </main>
    </div>
  );
}


export default App;



