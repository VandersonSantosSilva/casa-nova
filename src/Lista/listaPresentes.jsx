import { useSelector, useDispatch } from "react-redux"
import styles from "../CSS-Modules/listaPresentes.module.css"
import {useEffect, useState } from "react"
import { updateDoc, doc, setDoc} from "firebase/firestore";
import {db} from "./fire-store"
import { useNavigate } from "react-router-dom";




function List(){
    const itens = useSelector((state) => state.itens)
    const selection = useSelector((state) => state.selecionar.Select)
    const present = useSelector((state) => state.selecionar.Item)
    const dispatch = useDispatch()
    const [localNome, setLocalNome] = useState("") 
    const [localEmail, setLocalEmail] = useState("") 
    const [localPhone, setLocalPhone] = useState("") 
    const navigate = useNavigate()


    
    const disponibilidade = itens.map((item_disponibilidade)=>{
        return(
            <button className={styles.btn} onClick={() => selecionar(item_disponibilidade.Nome)} key={item_disponibilidade.Nome} disabled={item_disponibilidade.Disponibilidade === "Indisponível"}>
                <li className={styles.listPresent} key={item_disponibilidade.Nome}>
                    <img className={styles.imagem} src={item_disponibilidade.Imagem} alt="Imagem"/>
                    <h3>{item_disponibilidade.Nome}</h3>
                    <h4 className={item_disponibilidade.Disponibilidade === "Disponível" ? styles.disponivel : styles.indisponivel}>{item_disponibilidade.Disponibilidade}</h4>
                </li>
            </button>
        )
    })

   
    

    const selecionar = (item) =>{
        dispatch({
            type: "ITEM_SELECIONADO",
            payload: {Select: true, Item: item}
        })
    }


    const fechar = ()=>{
        dispatch({
            type:"ITEM_SELECIONADO",
            payload: {Select: false, Item: null}
        })

    }

    function localNamee(event){
        setLocalNome(event.target.value)
    }

    function localEmaill(event){
        setLocalEmail(event.target.value)
    }

    function localPhonee(event){
        setLocalPhone(event.target.value)
    }


    async function confirmdPresent() {
        try {
            const itemRef = doc(db, "Presentes", present)
            await updateDoc(itemRef, {
                Disponibilidade: "Indisponível"
            })
        } catch (error) {
            console.error("Erro ao atualizar documento:", error);
        }

        try {
            const add = doc(db, "Presenteador", localNome)
            await setDoc(add, {
                Nome: localNome,
                Email: localEmail,
                phone: localPhone,
                presente: present
            })
        } catch (error) {
            console.log("Item não adcionado", error)
        }

        window.location.reload()
    }

    return (

        <div>
            <h3 className={styles.store}>Nos Presentei</h3>
            <div className={styles.container}>
                {selection && (
                    <div className={styles.container_form}>
                        <div className={styles.form}>
                            <button className={styles.btn_fechar} onClick={()=> fechar()}>X</button>
                                <h3>Informe seus dados para confirmar</h3>
                                <input value={localNome} onChange={localNamee} className={styles.input} type="text" name="Nome" id="0" placeholder="Digite seu nome e Sobrenome" />
                                <input value={localEmail} onChange={localEmaill} className={styles.input} type="email" name="Email" id="1" placeholder="Digite seu E-mail" />
                                <input value={localPhone} onChange={localPhonee} className={styles.input} type="tel" name="Phone" id="2" placeholder="Digite seu telefone" />
                                <h3>{`Você selecionou: ${present}`}</h3>
                            <button onClick={() => confirmdPresent()} className={styles.btn_confirm} disabled={localNome === "" || localEmail === "" || !localEmail.includes("@") || localPhone === ""}>Confirmar</button>
                        </div>
                    </div>
                )}

                <ul className={styles.ulPrensents}>
                    {disponibilidade}
                </ul>

            </div>
        </div>
    )

}

export default List