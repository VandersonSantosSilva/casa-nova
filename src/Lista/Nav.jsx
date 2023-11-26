import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import styles from "../CSS-Modules/Nav.module.css"
import c1 from "../Imagens/c1.jpg"
import c2 from "../Imagens/c2.jpg"
import music01 from "../music/audio5.mp3"
import { useDispatch, useSelector } from "react-redux"



function Nav(){

    const audio = useRef(null)
    const controls = useSelector((state) => state.acesso)
    const dispatch = useDispatch()
    

    const playAudio = () => {
        if (audio.current) {
        audio.current.play();
        }

        dispatch({
            type: "ACESSO",
            payload: false
        })
    };


    return(
        <div>


            <div className={styles.container}>
                <img className={styles.img1} src={c1} alt="c1"/>
                <img className={styles.img1} src={c2} alt="c2"/>
                <div className={styles.overlay}></div>
    
                <div className={styles.containerText}>
                    <h1 className={styles.titleJW}>jardeson & wilma</h1>
                    <p className={styles.textJW}>Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.</p>
                    <h4 className={styles.versiculo}>Colossenses 3:14</h4>
                </div>
    
            </div>

            <nav>
                <Link to="/"><button className={styles.btn1}> Nossa História </button></Link> 
                <Link to="/ListaPresentes"><button className={styles.btn2}> Nos Presentei </button></Link>
            </nav>

            <div className={styles.containerAudio}>
                <audio controls ref={audio}>
                    <source src={music01} type="audio/mp3" />
                </audio>
            </div>

            <div className={controls ? styles.acessar : styles.esconder}>
                <div className={controls? styles.confirmar : styles.esconder}>
                    <p className={styles.acessoText}>Navegue pelo nosso site e conheça um pouco mais da nossa história</p>
                    <p className={styles.acessoText}>Agradedecemos o carinho!</p>
                    <h1 className={styles.titleJW}>J &#10084;W</h1>
                    <button className={styles.btnAcesso} onClick={playAudio}>Continuar</button>
                </div>
            </div>

        </div>

    )

}

export default Nav