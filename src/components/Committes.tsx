import styles from './Committes.module.css'

import viceSecretariaGeral from '../assets/viceSecretariaGeral.png'


export function Committes(){
    return(
        <div>
            <div id="committes">
                <h1 className={styles.titulo}>
                    V Edição 2023
                </h1>
                <p className={styles.subtitulo}>
                    Nossa próxima edição acontecerá de 13 a 17 de julho. <br/>
                    Conheça os comitês a serem simulados abaixo e acompanhe nosso Instagram @pernambucomun para mais atualizações.
                </p>
            </div>
            <div>
            <div className={styles.content}>
                <div className={styles['card-container']}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={styles['card']}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={viceSecretariaGeral}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h4>CII: Comitê de Imprensa Internacional</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles['card']}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={viceSecretariaGeral}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h4>OEA: Organização dos Estados Americanos</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles['card']}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={viceSecretariaGeral}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h4>OMC: Organização Mundial do Comércio</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={styles['card']}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={viceSecretariaGeral}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h4>OMS: Organização Mundial da Saúde</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles['card']}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={viceSecretariaGeral}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h4>TIDM: Tribunal Internacional do Direito do Mar</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles['card']}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={viceSecretariaGeral}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h4>UNSC: United Nation Security Council</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
                </div>
            </div>
        </div>

    );
}