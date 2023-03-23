import styles from './Header.module.css'


export function Header(){
    return(
       <header className={styles.header}> 
            <a href="#">SOBRE NÓS</a>
            <a href="#">COMITÊS</a>
            <a href="#">EVENTOS</a>
            <a href="#">NOSSO TIME</a>
            <a href="#">CONTATO</a>
            <a href="#">ARQUIVOS</a>

        </header>
    ); 
}