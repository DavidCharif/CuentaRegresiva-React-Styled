import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../helpers/urlBack";
import {
  CardIzquierda,
  cardsStyle as Card,
  CloseButton,
  ContainerFilter,
  DivInterno,
  Feature,
  FilterCard,
  H4,
  Img,
  InnerCardDerecha,
  InnerCardIzquierda,
  NewFeature,
  NombreEmpresa,
  Tag,
  TagFilter,
  TimeTipeWhere,
  InnerFilterTags,
  ClearButton,
  Clear,
} from "../../styles/style";

export let filterData;
const Cards = () => {
  const [dataBusqueda, setDataBusqueda] = useState([]);
  const [dataTrabajo, setDataTrabajo] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setDataTrabajo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clickFilter = (tag) => {
    let stringBusqueda = dataBusqueda.filter((e) => e !== tag);

    stringBusqueda.push(tag);

    // setDataBusqueda(prev=> prev.filter((e) => e !== tag));
    setDataBusqueda(stringBusqueda);
    filterData(stringBusqueda);
  };

  const cleanFilter = (i) => {
    let newArray = dataBusqueda.filter((ele, index) => {
      return index !== i;
    });
    // let blankArray = [];
    setDataBusqueda(newArray);
    filterData(newArray);
  };
  const clearFilter = () => {
  let blankArray = [];
    setDataBusqueda(blankArray);
    filterData(blankArray);
  };

  const filterData = (tags) => {
    let newArray = [];
    let data = dataTrabajo;
    let i = 0;
    tags.forEach((element) => {
      // crear un array en la primera
      if (i >= 1) {
        data = newArray;
        newArray = [];
      }
      data.map((empresa) => {
        let dataTags = empresa.tags;
        // console.log("tags[tags.length - 1]", tags[tags.length - 1]);
        if (dataTags.includes(element)) {
          newArray.push(empresa);
        }
        return "";
      });
      i++;
    });
    setDataFilter(newArray);
  };

  const drawData = (array) =>
    array.map((e) => (
      // , , e.features, e.name, e.dataPublished, , , e.tags, e.imagen} = e
      <Card key={e.id}>
        <CardIzquierda id="left">
          <Img src={e.imagen} width="50" height="50" alt=""></Img>
          <InnerCardIzquierda id="internLeft">
            <DivInterno id="top">
              <NombreEmpresa>{e.business}</NombreEmpresa>
              {e.isNew === "true" && <NewFeature>NEW!</NewFeature>}
              {e.isFeatured === "true" && <Feature>FEATURED</Feature>}
            </DivInterno>
            <DivInterno id="middle">
              <H4>{e.name}</H4>
            </DivInterno>
            <DivInterno id="bottom">
              <TimeTipeWhere>{e.datePublished}-</TimeTipeWhere>
              <TimeTipeWhere>{e.tipeOfWork}-</TimeTipeWhere>
              <TimeTipeWhere>{e.where}</TimeTipeWhere>
            </DivInterno>
          </InnerCardIzquierda>
        </CardIzquierda>
        <InnerCardDerecha id="right">
          {e.tags.map((e) => (
            <Tag key={e} onClick={() => clickFilter(e)}>
              {e}
            </Tag>
          ))}
        </InnerCardDerecha>
      </Card>
    ));

  // const drawTags = () => (
  //   <FilterCard>
  //         <InnerFilterTags>
  //           {dataBusqueda.map((e, i) => (
  //             <ContainerFilter>
  //               <TagFilter><p>{e}</p></TagFilter>
  //               <CloseButton onClick={() => cleanFilter(i)}><p>X</p></CloseButton>
  //             </ContainerFilter>
  //           ))}
  //         </InnerFilterTags>
  //         <ClearButton><Clear>Clear </Clear></ClearButton>
  //       </FilterCard>
  // )

  useEffect(() => {
    getData();
  }, [dataFilter]);

  return (
    <>
      {dataFilter.length > 0 ? (
        <FilterCard>
          <InnerFilterTags>
            {dataBusqueda.map((e, i) => (
              <ContainerFilter>
                <TagFilter><p>{e}</p></TagFilter>
                <CloseButton onClick={() => cleanFilter(i)}><p>X</p></CloseButton>
              </ContainerFilter>
            ))}
          </InnerFilterTags>
          <ClearButton><Clear onClick={() => clearFilter()}>Clear </Clear></ClearButton>
        </FilterCard>
      ) : (
        <></>
      )}
      {dataFilter.length > 0 ? drawData(dataFilter) : drawData(dataTrabajo)}
    </>
  );
};

export default Cards;
