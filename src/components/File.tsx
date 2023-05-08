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
                <Accordion className={styles.accordionn} allowZeroExpanded>
                <AccordionItem uuid="item-1" onClick={() => onAccordionButtonClick("item-1")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      Edital para Isenção de Taxa de Inscrição
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            <a href="https://drive.google.com/file/d/1BtWjlCZ3-2rz-PX7Cfn5Ay4QXcpphO5H/view" target='_blank'>ISENÇÃO DA TAXA DE INSCRIÇÃO</a>
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
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            <a href="https://drive.google.com/file/d/1aUOu6AUvqo8Bz7e5EMkKEL8c-RrSqpc6/view" target='_blank'>MANUAL DO DELEGADO E DA DELEGADA</a>
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
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias de Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/1gxwuf3nJEBShR2U8IF5eCtfFSnE5MqGq/view" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/1B3m-GSt-hJJc-JUeTCmj4DmjU3GExhUc/view" target='_blank'>OEA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/13mH5_UpIPpzg8CaUlVW8nod6ThrB4HgH/view" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/11SZ7bcjFQG4QCkHDc1I-4bcn8j2qxkUy/view" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/19Yjo5C4CDL3-4-btqRLl_EMjo9H3cA0v/view" target='_blank'>TIDM</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/1VkVwyd_ZAy6WZ0DsbbWjCynuZcrccZ2j/view" target='_blank'>UNSC</a>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexos
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/1zJOHp4udopEW85b1D07CwgWjvTePhfk3/view?usp=sharing" target='_blank'>CII</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/1Vk0FOj2YQrC17O3OByhj461ag11W6Ex5/view?usp=sharing" target='_blank'>OEA</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/1vKnLM9abEsWXwebyL6pC5T1EpXaUj25Q/view?usp=sharing" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/1yoPTjhD76b_mdbzEYGc--J_TIpKgqqMQ/view?usp=sharing" target='_blank'>OMC</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/10qr8yUyvHLNM-9QnY5MTxX2Z4_VakGP_/view?usp=sharing" target='_blank'>TIDM</a>
                          </AccordionItemPanel>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <a href="https://drive.google.com/file/d/10qr8yUyvHLNM-9QnY5MTxX2Z4_VakGP_/view?usp=sharing" target='_blank'>UNSC</a>
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
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias De Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
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
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias De Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
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
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias De Estudo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Guias Anexo
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
                          </AccordionItemPanel>
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
