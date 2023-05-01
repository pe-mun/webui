import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isLinkClicked) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLinkClicked]);

  const handleClick = () => {
    setIsLinkClicked(true);
    setIsVisible(false);

    setTimeout(() => {
      setIsLinkClicked(false);
    }, 1000);
  };

  return (
    <header className={isVisible ? styles.header : styles.hidden}>
      <nav className={styles.nav}>
        <a href="#about" onClick={handleClick}>
          SOBRE NÓS
        </a>
        <a href="#committes" onClick={handleClick}>
          COMITÊS
        </a>
        <a href="#nosso-time" onClick={handleClick}>
          NOSSO TIME
        </a>
        <a href="#footer" onClick={handleClick}>
          CONTATO
        </a>
        <a href="#files" onClick={handleClick}>
          ARQUIVOS
        </a>
      </nav>
    </header>
  );
}