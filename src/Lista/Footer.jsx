import styles from "../CSS-Modules/Footer.module.css"

function Footer(){
    return(
        <div className={styles.containerFooter}>
            <h3 className={styles.titleH1}>Acompanhe-me através das minhas redes sociais:</h3>

            <ul className={styles.listFooter}>
                <a className={styles.linksFooter} href="https://www.instagram.com/vandersoon.santoos/" rel="nofolow" target="_blanck"><li>Instagram</li></a>
                <a className={styles.linksFooter} href="https://github.com/VandersonSantosSilva" rel="nofolow" target="_blanck"><li>GitHub</li></a>
                <a className={styles.linksFooter} href="https://portfolio-one-iota-20.vercel.app/" rel="nofolow" target="_blanck"><li>Portfólio</li></a>
            </ul>

            <h3>VS Develop &copy;</h3>
        </div>
    )

}


export default Footer