/* import data from "../../components/mockData"; */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./styles.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const {id} = useParams();  
    const [producDetail, setProductDetail] = useState([]);

    useEffect (() => {
        getItem();
        
    },)

    const getItem = () => {
        const db = getFirestore();
        const queryDoc = doc(db, "Items", id);
        getDoc(queryDoc).then((res) =>{
            setProductDetail({id: res.id, ...res.data()});
        }).catch((err) => console.log(err));
    }

    
    return (
        <div className="contenedorDetalle">
            <ItemDetail lista = {producDetail} />
        </div>
    )

}

export default ItemDetailContainer