import styles from './Team.module.css'

import secretariaGeral from '../assets/secretariaGeral.png'
import viceSecretariaGeral from '../assets/viceSecretariaGeral.png'
import secretariaAcademica1 from '../assets/secretariaAcademica1.png'
import secretariaAcademica2 from '../assets/secretariaAcademica2.png'
import secretariaAcademica3 from '../assets/secretariaAcademica3.png'
import secretariaAcademica4 from '../assets/secretariaAcademica4.png'
import secretariaAcademica5 from '../assets/secretariaAcademica5.png'
import secretariaAcademica6 from '../assets/secretariaAcademica6.png'
import secretariaAcademica7 from '../assets/secretariaAcademica7.png'
import secretarioAdmFin from '../assets/secretarioAdmFin.png'
import secretariaComunicacao1 from '../assets/secretariaComunicacao1.png'
import secretariaComunicacao2 from '../assets/secretariaComunicacao2.png'
import secretariaComunicacao3 from '../assets/secretariaComunicacao3.png'


export function Team() {
    return (
      <div className="container">
        <div>
          <h1 className={styles.titulo}>Nosso Time</h1>
          <h5 className={styles.subtitulo}>A função de cada um do nosso time</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaGeral} />
                <h5 className="name">Rafaella Almeida</h5>
                <p>Secretária Geral</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={viceSecretariaGeral}/>
                <h5 className="name">Alice Pimentel</h5>
                <p>Vice Secretária Geral</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaAcademica1}/>
                <h5 className="name">Ana Beatriz Alves</h5>
                <p>Secretária Acadêmica</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaAcademica2}/>
                <h5 className="name">Anna Luiza Moura</h5>
                <p>Secretária Acadêmica</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaAcademica3}/>
                <h5 className="name">Maria Helena Mendes</h5>
                <p>Secretária Acadêmica</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaAcademica4}/>
                <h5 className="name">Maria Vitória Sousa</h5>
                <p>Secretária Acadêmica</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaAcademica5}/>
                <h5 className="name">Maria Tereza Barbosa</h5>
                <p>Secretária Acadêmica</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaAcademica6}/>
                <h5 className="name">Mariana Carvalho</h5>
                <p>Secretária Acadêmica</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaAcademica7}/>
                <h5 className="name">Helen Marinho</h5>
                <p>Secretária Acadêmica</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretarioAdmFin}/>
                <h5 className="name">Artur Macedo</h5>
                <p>Secretário Administrativo-Financeiro</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaComunicacao1}/>
                <h5 className="name">Hanna Elize</h5>
                <p>Secretária de Comunicação</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaComunicacao2}/>
                <h5 className="name">Isabella Menezes</h5>
                <p>Secretária de Comunicação</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="flex-column d-flex flex-column justify-content-center text-center" style={{ listStyleType: "none" }}>
              <li>
                <img className={styles.img + " mx-auto"} src={secretariaComunicacao3}/>
                <h5 className="name">Louise Guerra</h5>
                <p>Secretária de Comunicação</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
