import styles from './About.module.css'

export function About(){
  return(
    <div>
      <div>
        <h1 className={styles.titulo}>
          Sobre nós
        </h1>
      <h5 className={styles.subtitulo}>
        Conheça nossa história, o evento e o público
        </h5>
      </div>
      <div className={styles.content}>
        <div className="row justify-content-center">
          <div className="col-sm-2">
            <div className="card h-100 ">
              <div className="card-body">
                <h2 className="card-title">Pemun</h2>
                <p className="card-text">Somos o primeiro Modelo das Nações Unidas para universários em Pernambuco. Nascemos em 2017, da vontade de graduandos de Ciência Política e Direito (UFPE) de incluir Pernambuco na tradição de simulações e, assim, praticar habilidades diplomáticas e compartilhar conhecimentos acerca de questões globais.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card h-100 ">
              <div className="card-body">
                <h2 className="card-title">MUNs</h2>
                <p className="card-text">Modelo das Nações Unidas (MUNs), é um formato de evento que simula as negociações da Organização das Nações Unidas, ONU, no formato de comitês. As sessões promovem a prática diplomática nos moldes das regras e procedimentos oficiais.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Quem participa</h2>
                <p className="card-text">Como delegado(a): Estudantes de graduação de qualquer estado, incluso país. Como diretor(a): Mesmo requisito para delegado + interesse na produção acadêmica, planejamento e execução de algum comitê.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
}