import {Link} from 'react-router-dom';
import './Paises.css';

function Paises({data}){

    function aleatorio(inferior = 0, superior = data.length) {
        var numPosibilidades = superior - inferior;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }
    
    return (
        <main className='container-paises'>
            <p className='container-p'>Paises</p>
            <ul className='container-ul'>
                <li>{data[aleatorio()].name}</li>
                <li>{data[aleatorio()].name}</li>
                <li>{data[aleatorio()].name}</li>
            </ul>
        </main>
    )
}

export default Paises;