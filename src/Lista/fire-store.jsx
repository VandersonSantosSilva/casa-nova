import { initializeApp } from "firebase/app";
import { getFirestore, collection,getDocs } from 'firebase/firestore';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const firebaseConfig = {
    apiKey: "AIzaSyBqKmbakgJTCprQeNUlYCN7K3zttYufqB0",
    authDomain: "cha-casa-nova-40aab.firebaseapp.com",
    projectId: "cha-casa-nova-40aab",
    storageBucket: "cha-casa-nova-40aab.appspot.com",
    messagingSenderId: "65074332308",
    appId: "1:65074332308:web:3beaf4a9d780953a48aa81"
};

function Firebase() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const col = "Presentes";
    const dados = collection(db, col);
    const dispatch = useDispatch()


    const coll = async () => {
        try {
            const querySnapshot = await getDocs(dados);
            querySnapshot.forEach((doc) => {
                dispatch({
                    type:"ITEM",
                    payload: {
                        Nome: doc.data().Nome,
                        Imagem: doc.data().Imagem,
                        Disponibilidade: doc.data().Disponibilidade
                    }
                })
            });
        }catch (error) {
            console.error(error);
        }
    }
    

    useEffect(()=>{
        coll()
    }, [])

  /*   const document = async ()=>{
        try {
            for(const item of itens){
                const add = doc((dados), item.Nome)
                await setDoc(add, item)
                console.log(`Item "${item.Nome}" adicionado`);
            }
        } catch (error) {
            
        }

    }

    useEffect(() => {
        document();
    }, []); */




}

export const db = getFirestore(initializeApp(firebaseConfig))
export default Firebase;