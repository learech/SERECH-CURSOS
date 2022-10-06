import ItemList from "../ItemList";
import React, { useEffect, useState } from "react";
import Title from "../Title";
import { useParams } from "react-router-dom";

const cursos = [
  {
    id: 1,
    image:
      "https://www.mndelgolfo.com/blog/wp-content/uploads/2017/09/herramientas-para-electricista.jpg",
    category: "cursos",
    titulo: "Electricista",
  },
  {
    id: 2,
    image:
      "https://www.institutogiuseppe.com/wp-content/uploads/2019/05/img-tecnica-03-reparador-pc.jpg",
    category: "cursos",
    titulo: "Reparador de pc",
  },
  {
    id: 3,
    image:
      "https://plomero-gasista-sanisidro.com/wp-content/uploads/2018/05/plomero-gasista-san-isidro.jpg",
    category: "cursos",
    titulo: "Plomero gasista",
  },
  {
    id: 4,
    image:
      "https://tutorialesonline.net/wp-content/uploads/2021/11/instalador-de-aire-acondicionado-y-calefaccion-barcelona-1-678x381.jpg",
    category: "proximos",
    titulo: "Instalador de split",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/photos/handyman-fitting-a-new-door-picture-id1191080420?k=20&m=1191080420&s=612x612&w=0&h=iMhtZZMw_IuQw2HsTr9Mow-hK6r91pMqWWcnny_obKM=",
    category: "proximos",
    titulo: "Cerrajero",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(cursos);
      }, 1000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((curso) => curso.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);



  return (
    <>
      <Title greeting={texto} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
