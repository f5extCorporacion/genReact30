import './../App.css'
import quotes from'./../db/quotes.json';
import rojo from'./../assets/img/rojo.png';
import { Ramdon } from '../utils/randon.js';
import {Howl, Howler} from 'howler';
import buttonClick from './../assets/sonidos/buttonClick.mp3';
import cartoon from './../assets/sonidos/cartoon.mp3';

const Frase = ({quote, setFranse}) => {

  var sound = new Howl({
    src: [cartoon]
  });

  /**Evento del click */
    const handlera =()=>{
        setFranse(Ramdon(quotes));
          sound.play()
          Howler.volume(0.9);
        
      };
  
      
  return (
    <div className='ap'>
         <div className="lemale">
               <img src={rojo} alt="" />
          </div>
          <br />
          <div className="frase">
            <div className="item">
              <h3>Frases <br /> </h3> <hr /><br />
              <p> {quote.phrase}</p><br />
              <h5> Author: {quote.author} </h5>
              </div>
          </div><br />
          <button onClick={handlera}> <h3>Siguiente</h3> </button>
          
    </div>
  )
 
}
export default Frase;