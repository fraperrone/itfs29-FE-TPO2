import React from 'react';
import styles from './Footer.module.css'; // Los estilos no cambian

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        {/* Columna 1: Información del Proyecto */}
        <div className={styles.footerSection}>
          <h4>TP 2 Con React</h4>
          <p>&copy; {currentYear} Grupo 9</p>
        </div>

        {/* Columna 2: Información Académica */}
        <div className={styles.footerSection}>
          <h4>IFTS 29</h4>
          <p>Desarrollo Front-End</p>
          <p>Profesor: [Nombre del Profesor]</p>
        </div>

        {/* Columna 3: Enlaces Relevantes */}
        <div className={styles.footerLinks}>
          <a 
            href="https://github.com/fraperrone/itfs29-FE-TPO2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Repositorio en GitHub
          </a>
          <a 
            href="[Enlace a la web de la materia o facultad]" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Cátedra
          </a>
        </div>

      </div>
    </footer>
  );
};


export default Footer; // ¡Muy importante exportarlo!