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
                    CII: Comitê de Imprensa Internacional
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
                    CII: Comitê de Imprensa Internacional
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
                    CII: Comitê de Imprensa Internacional
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
                    CII: Comitê de Imprensa Internacional
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
                    CII: Comitê de Imprensa Internacional
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
                    CII: Comitê de Imprensa Internacional
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
