import styles from "../CSS-Modules/Home.module.css"
import {animate, motion} from 'framer-motion'
import { useRef, useState, useEffect } from "react"
import { db } from "./fire-store"
import { setDoc, doc, collection, getDocs, updateDoc } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux"



function Home(){
    const sl1 = "https://i.ibb.co/56vfGfD/DSC00281.jpg"
    const sl2 = "https://i.ibb.co/QjfnZWx/Screenshot-2.png"
    const sl3 = "https://i.ibb.co/xLrXGdn/Screenshot-2-qq.png"
    const sl4 = "https://i.ibb.co/897kfH4/Screenshot-2-t.png"
    const sl5 = "https://i.ibb.co/V9bWdkX/Screenshot-2-tt.png"
    const sl6 = "https://i.ibb.co/PFgBSKj/Screenshot-eee.png"
    const image = [sl1, sl2, sl3, sl4, sl5, sl6]
    const fb = "Comentarios"
    const sgbd = collection(db, fb)
    const dispatch = useDispatch()
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    const [name, setName] = useState("")
    const [coment, setComent] = useState("")
    const coomentario = useSelector((state) => state.comentarios)


    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

    function valor(event){
        setName(event.target.value)
    }

    function comentar(event){
        setComent(event.target.value)
    }


    async function enventComent(){
        const dados = doc(db, "Comentarios", name)
        await setDoc(dados, {
            Nome: name,
            Comentario: coment
        })

        window.location.reload()
    }

    const comenta = async ()=>{
        const push = await getDocs(sgbd)
        push.forEach((comentaario) =>{
            dispatch({
                type: "COMENTARIOS",
                payload: {
                    Nome: comentaario.data().Nome,
                    Comentario: comentaario.data().Comentario
                }
            })
        })
    }

    useEffect(()=>{
        comenta()
    },[])


    return(
        <div className={styles.ContainerHome}>
            <h1 className={styles.Title}>Sejam Bem-vindos!</h1>

            <p className={styles.text}>
                Olá, primeiramente gostariamos de agradecer pela sua presença em nosso site, ele foi criado com muito carinho e amor,
                além de podermos nos apresentar melhor para vocês esse site também ficará guardado em nossos corações, espero que gostem
                e fiquem a vontade para navegar em nossa bela história.
            </p>

            <p className={styles.text}>
                Somos Jardeson Reynaldo e Wilma Sarah, somos um jovem casal de 28 anos e 23 anos iniciamos a nossa história a 11 anos atrás
                uma história construída com muitas lutas e guerras, mas todas elas vencidas para honra e glória do nosso Deus que até aqui vem nos abençoado.
                Somos pais da Jasmim uma jovem adolecente de 11 anos a qual amamos muito e lutamos diariamente para que no futuro ela possa escreve
                uma história ainda mais linda que a nossa. 
            </p>

            <p className={styles.text}>
               Somos um casal que está sempre próximo da nossa família e nossos amigos, amamos uma aventura junto a todos eles pois são nessas aventuaras
               que podemos viver e nos alegrar juntos. Convidamos você a conhecer um pouco mais dessa história atráves de um belo carrossel de fotos aqui em baixo.
            </p>

            <div className={styles.containerCarousel}>
                <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
                    <motion.div className={styles.inner} drag="x" dragConstraints={{right: 0, left: -width}} initial={{x: 100}} animate={{x:0}} transition={{duration: 0.8}}>
                        {image.map(img => (
                            <motion.div className={styles.item} key={img}>
                                <img src={img} alt="imagem" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <p className={styles.text}>
               Essas fotos representam um pouco da nossa história em imagens, um pouco do que vimos, sentimos e vivemos. Segundo <span className={styles.span}>Denise Campos </span>
               Os momentos únicos da vida são vivenciados com alegria e registrados com um clique. Somos gratos ao nosso Deus por ter nos deixado viver cada momento desses e no dia 03 de Dezembro de 2023 
               será mais um motivo de agradecimento e dessa vez poderemos agradecer com cada um de vocês, poderemos registrar com um clique mais um momento alegre em nossas vidas.
            </p>


            <p className={styles.text}>
               Obrigado por ter lido um pouco sobre nós até aqui, obrigado por participar desse momento marcante em nossas vidas. 
               Apraveitamos a oportunidade para pedir em carecidamente que deixe sua menssagem de carinho ou apoio para gente nos comentários aqui a baixo, pode ter plena certeza 
               que ficará marcado em nossos corações também. &#10084;
            </p>
            
            <hr className={styles.linha} />

            <h3 className={styles.comentario}>Deixe sua menssagem!</h3>
            <div className={coomentario.length === 0 ? styles.disable : styles.comentariosFixed }>
                    {coomentario.map((menssagem) => {
                        return(
                            <ul key={menssagem.Nome}>
                                <li><h3 className={styles.h3Comentario}>{menssagem.Nome}</h3></li>
                                <li><p className={styles.pComentario}>{menssagem.Comentario}</p></li>
                            </ul>
                        )
                    })}
            </div>
            <div className={styles.containerComentario}>
                <input value={name} onChange={valor} type="text" name="nome" id="name" placeholder="Digite seu nome"/>
                <textarea value={coment} onChange={comentar} name="coment" id="comentario" cols="30" rows="10" placeholder="Escreva sua menssagem..."></textarea>
                <button className={styles.btnEnviar} onClick={()=> enventComent()}>Enviar</button>
            </div>
            

        </div>
    )

}

export default Home