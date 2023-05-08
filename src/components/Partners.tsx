import styles from './Partners.module.css'
import Parceiros from '../assets/Parceiros.png'

export function Partners(){
    return(
        <div classname={styles.divParceiros} id="partners">
            <h1 className={styles.titulo}>
            Parceiros
            </h1>
            <h5 className={styles.subtitulo}>
            Parceiros do PEMUN
            </h5>
            <img className={styles.img} src={Parceiros}/>
        </div>
    );
}