
export default function cenario (props){
    return(
        <div className="cenario" id="conteine_index">
            
            {console.log(props.src)}

            <img id="cenarioFundo" className="cenarioFundo" src = {props.src} />
            
        </div>
    );
}