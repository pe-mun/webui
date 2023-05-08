import styles from './About.module.css'

export function About(){
  return(
    <div>
      <div id="about">
        <h1 className={styles.titulo}>
          SOBRE NÓS
        </h1>
        <h5 className={styles.subtitulo}>
          Conheça um pouquinho sobre o que é a PEMUN, sua criação e seus membros
        </h5>
      </div>
      <div className={styles.content}>
        <div className={styles['card-container']}>
          <div className={styles['card']}>
            <h2 className={styles['card-title']}>MUNs</h2>
            <div className={styles['card-body']}>
              <p className="card-text">Modelo das Nações Unidas (MUN) é um formato de simulação das negociações e reuniões de instâncias da Organização das Nações Unidas (ONU) no formato de comitês. As sessões de debate realizadas durante a simulação promovem a prática diplomática nos moldes das regras e procedimentos oficiais dos órgãos internacionais</p>
            </div>
          </div>
          <div className={styles['card']}>
            <h2 className={styles['card-title']}>PEMUN</h2>
            <div className={styles['card-body']}>
              <p className="card-text">Somos o primeiro Modelo das Nações Unidas para universários(as) no estado de Pernambuco. A partir da vontade de incluir Pernambuco na tradição de simulações, trazendo a oportunidade para a prática de habilidades de diplomacia, oratória, negociação e cooperação internacional, estudantes de Ciência Política e Direito da UFPE se uniram para criar o projeto em 2017, realizando nossa 1ª edição em 2018.</p>
            </div>
          </div>
          <div className={styles['card']}>
            <h2 className={styles['card-title']}>QUEM PARTICIPA</h2>
            <div className={styles['card-body']}>
              <p className="card-text"><strong>Delegadas(os):</strong> Estudantes de Ensino Superior (de qualquer curso e instituição), Médio (+16 anos) ou Pós-Graduação; cada participante representará uma delegação (país, agente ou organização internacional) nos debates do comitê escolhido. Inscrição como participante no evento.
<br/><strong>Diretoras(es):</strong> Estudantes de Ensino Superior ou Pós-Graduação; a diretoria é responsável pela idealização do comitê, produção dos materiais de estudo utilizados pelos(as) delegados(as) e condução do comitê durante o evento da simulação. Mandato anual.
<br/><strong>Secretariado:</strong> Estudantes de Ensino Superior ou Pós-Graduação; o secretariado, dividido em subsetores, se responsabiliza pela gestão das diretorias e pela organização geral da edição da PEMUN. Mandato anual.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
