import { useSelector, useDispatch } from "react-redux"
import styles from "../CSS-Modules/listaPresentes.module.css"

function List(){

    const itens = useSelector((state) => state.itens)
    const selection = useSelector((state) => state.selecionar)
    const dispatch = useDispatch()
    const present = useSelector((state) => state.item)

    const selecionar = (item) =>{
        dispatch({
            type: "ITEM_SELECIONADO",
            payload: true
        })

        dispatch({
            type: "ITEM",
            payload: item 
        })

    }

    return (
        <div className={styles.container}>
            {selection && (
                <div>
                    <div className={styles.form}>
                        <input className={styles.input_name} type="text" name="name" id="0" placeholder="Digite seu nome e Sobrenome" />
                        <input type="email" name="email" id="1" placeholder="Digite seu E-mail" />
                        <input type="tel" name="phone" id="2" placeholder="Digite seu telefone" />
                        <h2>{`Você selecionou o presente: ${present}`}</h2>
                    </div>
                </div>
            )}

            <ul>
                {itens.map((item) =>{
                    return(
                        <button className={styles.btn} onClick={() => selecionar(item.Nome)} key={item.Nome}>
                            <li className={styles.listPresent} key={item.Nome}>
                                <img className={styles.imagem} src={item.Imagem} alt="Imagem"/>
                                <h3>{item.Nome}</h3>
                            </li>
                        </button>
                    )
                })}
            </ul>
        </div>
    )

}

export default List