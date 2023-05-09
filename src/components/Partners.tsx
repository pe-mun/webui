import styles from './Partners.module.css'
import Parceiros from '../assets/Parceiros.png'

export function Partners(){
    return(
        <div className={styles.divParceiros} id="partners">
            <h1 className={styles.titulo}>
                PARCEIROS
            </h1>
            <h5 className={styles.subtitulo}>
                Conheça os parceiros da PEMUN
            </h5>
            <img className={styles.img} src={Parceiros}/>
        </div>
    );
}