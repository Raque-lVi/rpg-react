
import './css/reset.css'
import './css/App.css'
import Cenario from './script/componentes/cenario'
import cen from './img/cenario/cn_grande_bunker.jpg'
import LiMenu from './script/componentes/liMenu'
import Para from './script/componentes/Parag'
import Questoes_dado from './script/componentes/Questoes_dado'

import Mulher from './img/icon_mulher.png'
import Bolsa from './img/icon_bolsa-de-livro-escolar.png'
import Compras from './img/icon_mosca.png'
import Mapa from './img/icon_mapa-do-tesouro.png'

{/*todo o componente importado tem de ter um retorno unico, ou seja, retornar uma unica teg cheia de 
tegs filhos, porem se eu não quiser ter de retornar toda vida um div com coisas dentro eu posso 
no lugar da div colocar um abre e fecha de teg vazio ex: return( <> conteudos </> ); */}
function App() {
  return (



    <div className="cenarios">
      <Cenario src = {cen} /> 

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

            <Questoes_dado />

        </section>
        </main>
    </div>
  );
}


export default App;
