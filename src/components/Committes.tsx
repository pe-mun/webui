import styles from './Committes.module.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

function ModalPMA(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            PMA: PROGRAMA MUNDIAL DE ALIMENTOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                  Tópico: A insegurança alimentar no contexto escolar e sua relação com a desigualdade de gênero
                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1PiFeO4qY0a8TQhpNyBKIlW1uc3jPmTs7/view?usp=sharing" target="blank" className={styles.btn}>Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1xVhrxmExeMsbEFe6zcZvz4BwCiPszE26/view?usp=sharing" target="blank" className={styles.btn}>Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc31pQW8LBQGnrUxBvjBPByFWxVCpjXXtJlmfR35Jx_RBybCQ/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEtfGwv-avEDuYMQnMByj16L4uvsaEc02BVk6QHBEr2q3MYg/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalCIJ(props: any) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                CIJ: CORTE INTERNACIONAL DE JUSTIÇA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    Caso A: República da Croácia x República da Sérvia - Aplicação da Convenção para a Prevenção e Repressão do Genocídio (2015).
                    <br/>
                    Caso B: República da Nicarágua x Estados Unidos da América - Atividades Militares e Paramilitares na e contra a Nicarágua (1984).
                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1iYnRZLDGTa7xFKGtGdOCrfOYJXU2mXt4/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1Z_93gMRvhoVX3tu4GAAbxmd6c_HvhWFP/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSffkLoSuAe9UcTAwJILr1X0o-FP9g2jJadmoRaB3L1u1Vh8cQ/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior e Médio</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalUNESCO(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                UNESCO: ORGANIZAÇÃO DAS NAÇÕES UNIDAS PARA A EDUCAÇÃO, CIÊNCIA E CULTURA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    Tópico A: Crise sanitária e os efeitos no setor cultural e na diversidade patrimonial.
                    <br/>
                    Tópico B: Economia criativa e o desenvolvimento inclusivo.
                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1sT3pihQgoF-g6Nfqz0ivIAWYCGLlWqA4/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1gMMAxSwo38suykjBP1sbM9QCJQJdb5mN/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeN4VeVqayzC_43SOGNkQYOM7pR5fH2ItaK88ByoCirOKOtFg/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdbC07LMsqkjs_QhjMektJKjQCgf1mueDpG89fCXXVv1Jmkg/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalGRU(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            GRU: GABINETE RUSSO-UCRANIANO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    Tópico: Guerra da Ucrânia.
                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1MZdVEopddjL5BmlOojMtO-hfhBEztCdK/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/15l64L4FyAGEXeQHLTwiL7zHO3rh_cQro/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
                <a href="https://drive.google.com/file/d/1Y-Ymkw1Bc5dofoFvtQFMzUDNkoVDTYXJ/view?usp=sharing" target="blank" className={styles.btn} >Guia de Regras</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSebBcr6GsefS_qKrVqHpAsHZdP_1aIAVf94UHZaOksOTJ9S6w/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsbgeuIGBHVzmDr9brIKumUgXX_2gAzyjLf1hXide5A-DHVg/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalAGNU50(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                AGNU50: ASSEMBLEIA GERAL DAS NAÇÕES UNIDAS 2050
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    Tópico A: Enfrentando a catástrofe ambiental e a miséria após o colapso global dos recursos não renováveis.
                    <br/>
                    Tópico B: Consequências da crise de recursos hídricos e do esgotamento das reservas de petróleo.                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1AkieikFo2r_O4fGpDvrWs2YmpPKqZ4zR/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1Q6Y0VrTXTpyLZFjK39ulJ7D8FQYzxwa5/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScsp9MVqqdGfLQtV1CL-R0K3cbd3tok5VVHhB4UofQegDEo-g/viewform" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgYgaEakB2O1S6G9SfnBRLvrpTC356TuynXAVYzKmA_uRjrA/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalCEPAL(props: any) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                CEPAL: COMISIÓN ECONÓMICA PARA AMÉRICA LATINA Y CARIBE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    Tópico A: La crisis de la democracia y sus consecuencias económicas.                    <br/>
                    Tópico B: Desafíos del desarrollo social en medio al descontrol de la inflación en América Latina.                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/19lbJgPAub__xoDh-Ofdxg-wootNaH140/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1-3kC4NsPb99AT-chD8COJYB0d5rjJtdA/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEFrN3P2JWoXd3SxSleEE42hWPZ6aP7pKwId7a1Il3SC66OA/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOYv58uCWQWZnO-XNo6-OBu-jHQqib6nOAkNkqGRZiu3QGSA/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
            <div><p className={styles.p}><i>*Comitê será simulado em Espanhol</i></p></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalSCONY(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                SCONY: SUPREMA CORTE DO ESTADO DE NOVA YORK
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    1º Julgamento: The People of The State of New York vs. Antron McCray, Yusef Salaam e Raymond Santana.
                    <br/>
                    2º Julgamento: The People of The State of New York vs. Kevin Richardson e Korey Wise.
                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1nO57rQHidh40dYPYvpCKWWxD0Ws8qDfX/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1ecaqSyhMq1o-al2W2ele5OTM0Na6s1LF/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3gxwZW9UpxBwk3aNN6DdFnrLaLPOs5lciMoVavZRhXcGY7A/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfzKKbFGVDXuLEznJ4qISYGsUCvWVmophYnWQ7ennBQgtUL4A/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalUNSC(props: any) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                UNSC: UNITED NATIONS SECURITY COUNCIL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <div>
                  <p>
                    Topic A: Non-Proliferation of Weapons of Mass Destruction 
                    <br/>
                    
                    Topic B: The Situation In Palestine
                    <br/>
                  </p>
                </div>
                
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1ZpvNNykus4N0rbRy_3MzrKrcahTnJKOr/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1lB-TQGmIX2eLcSWScIHNPGYt4IrQ3Zt0/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLphRKJ6fJL9sCmiRqwjz7YZSBPIsQ9BtTHut1tBA4uHK-qA/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFCrpN4VOK2wntISsDnp3Lh6-dotgkHiz4n2e1lDk-H4TE1A/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
            <div><p className={styles.p}><i>*Comitê será simulado em Inglês</i></p></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalUNOOSA(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                UNOOSA: ESCRITÓRIO DAS NAÇÕES UNIDAS PARA ASSUNTOS DO ESPAÇO SIDERAL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    Tópico A: O espaço como ferramenta para combater o aquecimento global.
                    <br/>
                    Tópico B: Democratização do acesso ao ambiente aeroespacial por meio da cooperação internacional entre nações.
                    <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/1ArSVQfgR42_SiEHJExyUBLneXBlljxcg/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1t9WFT4U7HIzUtv9kd5LvESm_VeBFAXi5/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHSfkzBI69ORcw6g640nuBdszNsOW_v1YReSNLToEX9y28Ng/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN6eMqfS-yF9WMb4goqVwFXgoFiD8Zzsbnt466Cp9051S__Q/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Médio</a>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function ModalCII(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                CII: COMITÊ DE IMPRENSA INTERNACIONAL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                  <p>
                    COBERTURA: O GLOBO, FOX NEWS, LE MONDE DIPLOMATIQUE, EL PAÍS + Twitter, Site, Instagram, Fotojornalismo e Telejornalismo.
                  <br/>
                  </p>
            </div>
            <div className={styles.container}>
                <a href="https://drive.google.com/file/d/11qrt5ZxktdlQXQx1Q744D_tPH2TQTOBo/view?usp=sharing" target="blank" className={styles.btn} >Guia Estudos</a>
                <a href="https://drive.google.com/file/d/1nL9EUc0OVN03lTEamFrxGBJA2u9te9f3/view?usp=sharing" target="blank" className={styles.btn} >Guia Anexo</a>
            </div>
            <hr />
            <div className={styles.container}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8qBAXQYWam3z-Q85JPCvujjK2iGMaq1E-Fw6JQffr7rVJHA/viewform?usp=sf_link" target="blank" className={styles.btn}>Inscrições - Ensino Superior e Médio</a>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }



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
    const [modalPMAShow, setModalPMAShow] = React.useState(false);
    const [modalCIJShow, setModalCIJShow] = React.useState(false);
    const [modalUNESCOShow, setModalUNESCOShow] = React.useState(false);
    const [modalGRUShow, setModalGRUShow] = React.useState(false);
    const [modalAGNU50Show, setModalAGNU50Show] = React.useState(false);
    const [modalCEPALShow, setModalCEPALShow] = React.useState(false);
    const [modalSCONYShow, setModalSCONYShow] = React.useState(false);
    const [modalUNSCShow, setModalUNSCShow] = React.useState(false);
    const [modalUNOOSAShow, setModalUNOOSAShow] = React.useState(false);
    const [modalCIIShow, setModalCIIShow] = React.useState(false);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <div className={"row"}>
                        <div className={"col-lg-3 col-md-6 col-sm-6 col-xs-12"}>
                        <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, PMA: PMA_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, PMA: PMA })} onClick={() => setModalPMAShow(true)}>
                            <div className={styles['card-body']}>
                                <img className={styles['card-img']} src={cardImages.PMA}/>
                            </div>
                            <div className={styles['card-footer']}>
                                <h5>PMA: PROGRAMA MUNDIAL DE ALIMENTOS</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, CIJ1: CIJ_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, CIJ1: CIJ1 })} onClick={() => setModalCIJShow(true)}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.CIJ1}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>CIJ: CORTE INTERNACIONAL DE JUSTIÇA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, UNESCO: UNESCO_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, UNESCO: UNESCO })}onClick={() => setModalUNESCOShow(true)}>
                                <div className={styles['card-body']}>
                                <img className={styles['card-img']} src={cardImages.UNESCO}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>UNESCO: ORGANIZAÇÃO DAS NAÇÕES UNIDAS PARA A EDUCAÇÃO, CIÊNCIA E CULTURA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, GRU1: GRU_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, GRU1: GRU1 })}onClick={() => setModalGRUShow(true)}>
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
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, AGNU50: AGNU_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, AGNU50: AGNU50 })}onClick={() => setModalAGNU50Show(true)}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.AGNU50}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>AGNU50: ASSEMBLEIA GERAL DAS NAÇÕES UNIDAS 2050</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, CEPAL1: CEPAL_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, CEPAL1: CEPAL1 })}onClick={() => setModalCEPALShow(true)}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.CEPAL1}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>CEPAL: COMISIÓN ECONÓMICA PARA AMÉRICA LATINA Y CARIBE</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, SCONY1: SCONY_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, SCONY1: SCONY1 })}onClick={() => setModalSCONYShow(true)}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.SCONY1}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>SCONY: SUPREMA CORTE DO ESTADO DE NOVA YORK</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, UNSC: UNSC_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, UNSC: UNSC })}onClick={() => setModalUNSCShow(true)}>
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
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, UNOOSA: UNOOSA_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, UNOOSA: UNOOSA })}onClick={() => setModalUNOOSAShow(true)}>
                                <div className={styles['card-body']}>
                                    <img className={styles['card-img']} src={cardImages.UNOOSA}/>
                                </div>
                                <div className={styles['card-footer']}>
                                    <h5>UNOOSA: ESCRITÓRIO DAS NAÇÕES UNIDAS PARA ASSUNTOS DO ESPAÇO SIDERAL</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['card']} onMouseOver={() => setCardImages({ ...cardImages, CII: CII_Equipe })} onMouseOut={() => setCardImages({ ...cardImages, CII: CII })}onClick={() => setModalCIIShow(true)}>
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
            <ModalPMA
                show={modalPMAShow}
                onHide={() => setModalPMAShow(false)}
            />
            <ModalCIJ
                show={modalCIJShow}
                onHide={() => setModalCIJShow(false)}
            />
            <ModalUNESCO
                show={modalUNESCOShow}
                onHide={() => setModalUNESCOShow(false)}
            />
            <ModalGRU
                show={modalGRUShow}
                onHide={() => setModalGRUShow(false)}
            />
            <ModalAGNU50
                show={modalAGNU50Show}
                onHide={() => setModalAGNU50Show(false)}
            />
            <ModalCEPAL
                show={modalCEPALShow}
                onHide={() => setModalCEPALShow(false)}
            />
            <ModalSCONY
                show={modalSCONYShow}
                onHide={() => setModalSCONYShow(false)}
            />
            <ModalUNSC
                show={modalUNSCShow}
                onHide={() => setModalUNSCShow(false)}
            />
            <ModalUNOOSA
                show={modalUNOOSAShow}
                onHide={() => setModalUNOOSAShow(false)}
            />
            <ModalCII
                show={modalCIIShow}
                onHide={() => setModalCIIShow(false)}
            />

        </div>

    );
}
