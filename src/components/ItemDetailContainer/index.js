import React, {useEffect,useState} from 'react';
import { getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

// const cursos = [
//     {
//       id: 1,
//       price: 14000,
//       image:
//         "https://www.mndelgolfo.com/blog/wp-content/uploads/2017/09/herramientas-para-electricista.jpg",
//       category: "actuales",
//       titulo: "Electricista",
//     },
//     {
//       id: 2,
//       price: 14000,
//       image:
//         "https://www.institutogiuseppe.com/wp-content/uploads/2019/05/img-tecnica-03-reparador-pc.jpg",
//       category: "actuales",
//       titulo: "Reparador de pc",
//     },
//     {
//       id: 3,
//       price: 14000,
//       image:
//         "https://plomero-gasista-sanisidro.com/wp-content/uploads/2018/05/plomero-gasista-san-isidro.jpg",
//       category: "actuales",
//       titulo: "Plomero gasista",
//     },
//     {
//       id: 4,
//       price: 14000,
//       image:
//         "https://tutorialesonline.net/wp-content/uploads/2021/11/instalador-de-aire-acondicionado-y-calefaccion-barcelona-1-678x381.jpg",
//       category: "proximos",
//       titulo: "Instalador de split",
//     },
//     {
//       id: 5,
//       price: 14000,
//       image:
//         "https://media.istockphoto.com/photos/handyman-fitting-a-new-door-picture-id1191080420?k=20&m=1191080420&s=612x612&w=0&h=iMhtZZMw_IuQw2HsTr9Mow-hK6r91pMqWWcnny_obKM=",
//       category: "proximos",
//       titulo: "Cerrajero",
//     },
//   ];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'cursos', detalleId);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
    }, [detalleId])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;