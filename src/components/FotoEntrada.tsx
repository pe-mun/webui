import Foto_Entrada from '../assets/Foto_Entrada.png'
import styles from './FotoEntrada.module.css'
export function FotoEntrada(){
    return(
        <div>
            <img className={styles.img}src={Foto_Entrada}/>
        </div>
    );
    
}