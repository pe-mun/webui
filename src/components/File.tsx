import styles from './File.module.css'
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export function File() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const onAccordionButtonClick = (itemId: string) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter(item => item !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  return (
    <div>
      <div>
      <div id="files">
                <h1 className={styles.titulo}>
                    ARQUIVOS
                </h1>
                <p className={styles.subtitulo}>
                    Consulte aqui o Edital para Isenção de Taxa de Inscrição, o Manual do(a) Delegado(a) e os Guias de Estudo/Anexo das edições anteriores
                </p>
            </div>
      </div>
      <div className={styles.container}>
        <div className={styles['card']}>
          <div className={styles['card-body']}>
                <Accordion className={styles.accordion} allowZeroExpanded>
                <AccordionItem uuid="item-1" onClick={() => onAccordionButtonClick("item-1")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      Edital para Isenção de Taxa de Inscrição
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1BtWjlCZ3-2rz-PX7Cfn5Ay4QXcpphO5H/view" target='_blank'>ISENÇÃO DA TAXA DE INSCRIÇÃO</a>
                          </AccordionItemButton>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-2" onClick={() => onAccordionButtonClick("item-2")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      Manual do(a) Delegado(a)
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1aUOu6AUvqo8Bz7e5EMkKEL8c-RrSqpc6/view" target='_blank'>MANUAL DO DELEGADO E DA DELEGADA</a>
                          </AccordionItemButton>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-3" onClick={() => onAccordionButtonClick("item-3")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      IV Edição (2022)
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias de Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1gxwuf3nJEBShR2U8IF5eCtfFSnE5MqGq/view" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1B3m-GSt-hJJc-JUeTCmj4DmjU3GExhUc/view" target='_blank'>OEA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/13mH5_UpIPpzg8CaUlVW8nod6ThrB4HgH/view" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/11SZ7bcjFQG4QCkHDc1I-4bcn8j2qxkUy/view" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/19Yjo5C4CDL3-4-btqRLl_EMjo9H3cA0v/view" target='_blank'>TIDM</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1VkVwyd_ZAy6WZ0DsbbWjCynuZcrccZ2j/view" target='_blank'>UNSC</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexos
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1zJOHp4udopEW85b1D07CwgWjvTePhfk3/view?usp=sharing" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1Vk0FOj2YQrC17O3OByhj461ag11W6Ex5/view?usp=sharing" target='_blank'>OEA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1vKnLM9abEsWXwebyL6pC5T1EpXaUj25Q/view?usp=sharing" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1yoPTjhD76b_mdbzEYGc--J_TIpKgqqMQ/view?usp=sharing" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/10qr8yUyvHLNM-9QnY5MTxX2Z4_VakGP_/view?usp=sharing" target='_blank'>TIDM</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/10qr8yUyvHLNM-9QnY5MTxX2Z4_VakGP_/view?usp=sharing" target='_blank'>UNSC</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-4" onClick={() => onAccordionButtonClick("item-4")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      III Edição (2020-2021)
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias De Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1ORcVivY31jC5fZpqz1rB7W5JimZ7IJik/view?usp=sharing" target='_blank'>APEC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1-hARYUwJh6rt3tEibMHt_NzMkq0NZsdO/view?usp=sharing" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1ljIK0K1Nytzqq207rFky9Md957hp5_zz/view?usp=sharing" target='_blank'>COP25</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1MOOUdUA6xNI0EFpk6FvlHDr8nRCh1xn1/view?usp=sharing" target='_blank'>ONU Mulheres</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1go5VySZGIDP0jiqy7Tdju60ccHc2gOZQ/view?usp=sharing" target='_blank'>TPIR</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1DPWA8hRgA7vKFWys4tVRizgrUO3iO_bd/view?usp=sharing" target='_blank'>UNOOSA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1RpNXmwYdPhUVfVP4ZLkoJVzeH7LggTVn/view?usp=sharing" target='_blank'>UNSC</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1O4fXPSJqaARR0XyKJDrPx3rEpPHaL-0r/view?usp=sharing" target='_blank'>APEC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1vHMdYarb_ZLkjiMH8NEJCwcrwZDHELCA/view?usp=sharing" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1XTi4QOAi8z_JHJltRFIqlSvCkQVuksMe/view?usp=sharing" target='_blank'>COP25</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1ZEE5Y_pPuNOzOWCoMbTRqZ-qzswFja4D/view?usp=sharing" target='_blank'>ONU Mulheres</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1tofkoKW06MnQjGQZr4vX7mtXOmhXKj7D/view?usp=sharing" target='_blank'>TPIR</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1tofkoKW06MnQjGQZr4vX7mtXOmhXKj7D/view?usp=sharing" target='_blank'>UNOOSA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/15ko4UibsMNTZgDTLtT0SYBtAan25sbAU/view?usp=sharing" target='_blank'>UNSC</a>
                            <br />
                            <a className={styles.a} href="https://drive.google.com/file/d/1SjJRPmOFSbtiHykIh7eKEJG_f31h5yei/view?usp=sharing" target='_blank'>UNSC (COVID-19 Guide)</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-5" onClick={() => onAccordionButtonClick("item-5")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      II Edição (2019)
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias De Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1oyVIJORbRJk1DE-JxcEkGbJgzVWvgxUZ/view?usp=sharing" target='_blank'>CEPAL</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1czL3m-3LAxLyWEdtQRAWP6lQa_JwkOXi/view?usp=sharing" target='_blank'>CIJ</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1qLoDX1Ii6HTiYDPIIpTVFRT4txQg06Da/view?usp=sharing" target='_blank'>CPCJC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1heI_LlopJ6THHo8kta8Ok44CWdlGQ0QL/view?usp=sharing" target='_blank'>GABINETE</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/13TGn3eI-y8_K7akaoPeUE1VvvbAFDI6w/view?usp=sharing" target='_blank'>PNUMA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/14YHDi_EVabnSCOj-UTu5XvXcDgflSY-2/view?usp=sharing" target='_blank'>UNSC</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1SrOasQcA-hVJ5W1hJPB990USVnNI3UgL/view?usp=sharing" target='_blank'>CEPAL</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1xF8C6COWcBwDEgVY9_aCuM3xbm-Dk37w/view?usp=sharing" target='_blank'>CIJ</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1xF8C6COWcBwDEgVY9_aCuM3xbm-Dk37w/view?usp=sharing" target='_blank'>CPCJC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1AHNAmgAbviWaSkUDYMQHHqQfDPHP_SV5/view?usp=sharing" target='_blank'>GABINETE</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1M5zV0umqG9SQSWFlEZtkxiTKO5dJLvYn/view?usp=sharing" target='_blank'>PNUMA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1_iLhqA0p89Ia2qL4rBEor28SV9aJ6l4j/view?usp=sharing" target='_blank'>UNSC</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-6" onClick={() => onAccordionButtonClick("item-6")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      I Edição (2018)
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias De Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/12SeuBOipQ9c4ggxLv1I1ixMk_31Df9RG/view?usp=sharing" target='_blank'>CIDH</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1Np7J9F5Bdp6c7ey70WMy1chHAfBLJfM_/view?usp=sharing" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1bFraBiMlCxU6T9Y4sDJyA9tWwfBwX2YX/view?usp=sharing" target='_blank'>DISEC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1t0vCdi3vzBrD2gYRInUR_EEHjhc7Y5Mj/view?usp=sharing" target='_blank'>SOCHUM</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1sJJTR6FIKFAdVMMa3jFTSHNsDEMoRlLO/view?usp=sharing" target='_blank'>UNCTAD</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1GgqsmHddPxIiKHXuCnb5oxph3JB5QUyQ/view?usp=sharing" target='_blank'>UNSC</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1MoJi0rGZF4dUdvGU5G1CYVMedxya929p/view?usp=sharing" target='_blank'>CIDH</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1iyFbkK-RPHfDxjz-Irw9hCz-FYvA--FV/view?usp=sharing" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1iyFbkK-RPHfDxjz-Irw9hCz-FYvA--FV/view?usp=sharing" target='_blank'>DISEC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/198_0zQqS0PAm4MWTKLFeqbYOzEm3US0P/view?usp=sharing" target='_blank'>SOCHUM</a>
                            <br />
                            <a className={styles.a} href="https://drive.google.com/file/d/1Tbse6L_GVTXfeEKr_ulOn2qrHmbEo7eF/view?usp=sharing" target='_blank'>SOCHUM (Guia de Regras)</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/1MsjpsCHkHueSyiVHATHR5OY1SJuijfFj/view?usp=sharing" target='_blank'>UNCTAD</a>
                            <br />
                            <a className={styles.a} href="https://drive.google.com/file/d/1MsjpsCHkHueSyiVHATHR5OY1SJuijfFj/view?usp=sharing" target='_blank'>UNCTAD (Guia de Regras)</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                            <a className={styles.a} href="https://drive.google.com/file/d/18LK1608WJg-v7QStNu6psxg9l3rIiBUs/view?usp=sharing" target='_blank'>UNSC</a>
                            <br />
                            <a className={styles.a} href="https://drive.google.com/file/d/1rpsWIZ9G0caWbWLe7tJK_IiUysgukOvw/view?usp=sharing" target='_blank'>UNSC (Guia de Regras)</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-7" onClick={() => onAccordionButtonClick("item-7")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      Autorização para menores de 18 anos nas festas
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel_1advw_133}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            <a className={styles.a} href="https://drive.google.com/file/d/16u55EbZJh5AP5O0G1JON8q4aziTWBQUH/view?usp=sharing" target='_blank'>DECLARAÇÃO DE PAIS OU RESPONSÁVEIS PARA MENORES (FESTAS)</a>
                          </AccordionItemButton>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>

              </Accordion>                     
            </div>
      </div>
      </div>
    </div>
  );
}
