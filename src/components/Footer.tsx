import styles from './Footer.module.css'

export function Footer(){
    return(
        <footer className={styles.footer}>
                <div id='footer'>
                    <h5 className={styles.contato}>Contato: <a href="mailto:pernambucomun@gmail.com">pernambucomun@gmail.com</a> </h5>
                    <p>Developed By Victor Medeiros <br/> Copyright © 2023</p>
                    

                    </div>
        </footer>
    );
}