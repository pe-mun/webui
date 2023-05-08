import styles from './Committes.module.css'
import React, { useState } from 'react';

import PMA from '../assets/PMA.png'
import PMA_Equipe from '../assets/PMA_Equipe.jpeg'
import CIJ1 from '../assets/CIJ1.png'
import CIJ_Equipe from '../assets/CIJ_Equipe.jpeg'
import UNESCO from '../assets/UNESCO.png'
import UNESCO_Equipe from '../assets/UNESCO_Equipe.jpeg'
import GRU1 from '../assets/GRU1.png'
import GRU_Equipe from '../assets/GRU_Equipe.jpg'
import AGNU50 from '../assets/AGNU50.png'
import AGNU_Equipe from '../assets/AGNU_Equipe.jpg'
import CEPAL1 from '../assets/CEPAL1.png'
import CEPAL_Equipe from '../assets/CEPAL_Equipe.jpg'
import SCONY1 from '../assets/SCONY1.png'
import SCONY_Equipe from '../assets/SCONY_Equipe.jpeg'
import UNSC from '../assets/UNSC.png'
import UNSC_Equipe from '../assets/UNSC_Equipe.jpeg'
import UNOOSA from '../assets/UNOOSA.png'
import UNOOSA_Equipe from '../assets/UNOOSA_Equipe.jpeg'
import CII from '../assets/CII.png'
import CII_Equipe from '../assets/CII_Equipe.jpg'


export function Committes(){
    const [cardImages, setCardImages] = useState({
        PMA: PMA,
        PMA_Equipe: PMA_Equipe,
        CIJ1: CIJ1,
        CIJ_Equipe: CIJ_Equipe,
        UNESCO: UNESCO,
        UNESCO_Equipe: UNESCO_Equipe,
        GRU1: GRU1,
        GRU1_Equipe: GRU_Equipe,
        AGNU50: AGNU50,
        AGNU50_Equipe: AGNU_Equipe,
        CEPAL1: CEPAL1,
        CEPAL1_Equipe: CEPAL_Equipe,
        SCONY1: SCONY1,
        SCONY1_Equipe: SCONY_Equipe,
        UNSC: UNSC,
        UNSC_Equipe: UNSC_Equipe,
        UNOOSA: UNOOSA,
        UNOOSA_Equipe: UNOOSA_Equipe,
        CII: CII,
        CII_Equipe: CII_Equipe,
    });
    return(
        <div>
            <div id="committes">
                <h1 className={styles.titulo}>
                    V EDIÇÃO - 2023
                </h1>
                <p className={styles.subtitulo}>
                    Nossa próxima edição acontecerá de 12 a 16 de julho.
                    Confira abaixo os comitês a serem simulados e acompanhe nosso instagram @pernambucomun para atualizações sobre as inscrições e o evento!
                </p>
            </div>
            <div>
            <div className={styles.content}>
                <div className={styles['card-container']}>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, PMA: PMA_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, PMA: PMA })}>
                            <div className={styles['card-body']}>
                                <img className={styles['card-img']} src={cardImages.PMA}/>
                            </div>
                            <div className={styles['card-footer']}>
                                <h5>PMA: PROGRAMA MUNDIAL DE ALIMENTOS</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, CIJ1: CIJ_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, CIJ1: CIJ1 })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.CIJ1}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>CIJ: CORTE INTERNACIONAL DE JUSTIÇA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, UNESCO: UNESCO_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, UNESCO: UNESCO })}>
                                <div className={styles['card-body']}>
                                <img className={styles['card-img']} src={cardImages.UNESCO}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>UNESCO: ORGANIZAÇÃO DAS NAÇÕES UNIDAS PARA A EDUCAÇÃO, CIÊNCIA E CULTURA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, GRU1: GRU_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, GRU1: GRU1 })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.GRU1}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>GRU: GABINETE RUSSO-UCRANIANO</h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, AGNU50: AGNU_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, AGNU50: AGNU50 })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.AGNU50}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>AGNU50: ASSEMBLEIA GERAL DAS NAÇÕES UNIDAS 2050</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, CEPAL1: CEPAL_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, CEPAL1: CEPAL1 })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.CEPAL1}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>CEPAL: COMISIÓN ECONÓMICA PARA AMÉRICA LATINA Y CARIBE</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, SCONY1: SCONY_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, SCONY1: SCONY1 })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.SCONY1}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>SCONY: SUPREMA CORTE DO ESTADO DE NOVA YORK</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, UNSC: UNSC_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, UNSC: UNSC })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.UNSC}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>UNSC: UNITED NATIONS SECURITY COUNCIL</h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, UNOOSA: UNOOSA_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, UNOOSA: UNOOSA })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.UNOOSA}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>UNOOSA: ESCRITÓRIO DAS NAÇÕES UNIDAS PARA ASSUNTOS DO ESPAÇO SIDERAL</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, CII: CII_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, CII: CII })}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.CII}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>CII: COMITÊ DE IMPRENSA INTERNACIONAL</h5>
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
