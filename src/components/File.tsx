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
                    Arquivos
                </h1>
                <p className={styles.subtitulo}>
                    Guias de orientação para os comitês.
                </p>
            </div>
      </div>
      <div className={styles.container}>
        <div className={styles['card']}>
          <div className={styles['card-body']}>
                <Accordion className={styles.accordionn} allowZeroExpanded>
                <AccordionItem uuid="item-1" onClick={() => onAccordionButtonClick("item-1")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      PMA: PROGRAMA MUNDIAL DE ALIMENTOS
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            <a href="https://www.w3schools.com/" target='_blank'>Visit W3Schools.com!</a>
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Item #2
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-2" onClick={() => onAccordionButtonClick("item-2")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      CIJ1: CORTE INTERNACIONAL DE JUSTIÇA
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-3" onClick={() => onAccordionButtonClick("item-3")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      UNESCO: ORGANIZAÇÃO DAS NAÇÕES UNIDAS PARA A EDUCAÇÃO, CIÊNCIA E CULTURA
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-4" onClick={() => onAccordionButtonClick("item-4")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      GRU1: GABINETE RUSSO-UCRANIANO
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
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
                      AGNU50: ASSEMBLEIA GERAL DAS NAÇÕES UNIDAS 2050
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
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
                      CEPAL1: COMISIÓN ECONÓMICA PARA AMÉRICA LATINA Y CARIBE
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-7" onClick={() => onAccordionButtonClick("item-7")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      SCONY1: SUPREMA CORTE DO ESTADO DE NOVA YORK
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-8" onClick={() => onAccordionButtonClick("item-8")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      UNSC: UNITED NATIONS SECURITY COUNCIL
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-9" onClick={() => onAccordionButtonClick("item-9")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      UNOOSA: ESCRITÓRIO DAS NAÇÕES UNIDAS PARA ASSUNTOS DO ESPAÇO SIDERAL
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 2 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="item-10" onClick={() => onAccordionButtonClick("item-10")} >
                  <AccordionItemButton className={styles.accordion__button}>
                      CII: COMITÊ DE IMPRENSA INTERNACIONAL
                  </AccordionItemButton>
                  <AccordionItemPanel className={styles.accordion__panel}>
                    <div className={styles.nested}>
                      <Accordion allowZeroExpanded>
                        <AccordionItem uuid="nested-item-1" onClick={() => onAccordionButtonClick("nested-item-1")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #1
                          </AccordionItemButton>
                          <AccordionItemPanel className={styles.accordion__panel}>
                            <p>Conteúdo do item aninhado 1 do acordeão.</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="nested-item-2" onClick={() => onAccordionButtonClick("nested-item-2")}>
                          <AccordionItemButton className={styles.accordion__button}>
                            Nested Accordion Item #2
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
