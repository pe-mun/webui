import styles from './Footer.module.css'

export function Footer(){
    return(
        <footer className={styles.footer}>
                <div id='footer'>
                    <h5 className={styles.contato}>Contato: <a href="mailto:pernambucomun@gmail.com">pernambucomun@gmail.com</a> </h5>
                    <p>Developed By BirDD <br/> Copyright ©</p>
                    

                    </div>
        </footer>
    );
}