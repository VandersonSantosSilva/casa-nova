import { useSelector, useDispatch } from "react-redux"
import styles from "../CSS-Modules/listaPresentes.module.css"
import { useState } from "react"
import { updateDoc, doc, setDoc, getDoc } from "firebase/firestore";
import {db} from "./fire-store"


function List(){
    const itens = useSelector((state) => state.itens)
    const selection = useSelector((state) => state.selecionar.Select)
    const present = useSelector((state) => state.selecionar.Item)
    const dispatch = useDispatch()
    const [localNome, setLocalNome] = useState("") 
    const [localEmail, setLocalEmail] = useState("") 
    const [localPhone, setLocalPhone] = useState("") 

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
            console.log("item adicionado com exito!")
        } catch (error) {
            console.log("Item não adcionado", error)
        }

        window.location.reload()
    }


     
      
    return (
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

            <ul>
                {itens.map((item) =>{
                    return(
                        <button className={styles.btn} onClick={() => selecionar(item.Nome)} key={item.Nome} disabled={item.Disponibilidade === "Indisponível"}>
                            <li className={styles.listPresent} key={item.Nome}>
                                <img className={styles.imagem} src={item.Imagem} alt="Imagem"/>
                                <h3>{item.Nome}</h3>
                                <h4 className={item.Disponibilidade === "Disponível" ? styles.disponivel : styles.indisponivel}>{item.Disponibilidade}</h4>
                            </li>
                        </button>
                    )
                })}
            </ul>
        </div>
    )

}

export default List