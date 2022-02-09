import React from "react";
import Itens from "../Itens/index.jsx";
import { Box, Botao } from "../UI/index.js";
import { extratoLista } from "./../../info";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Itens
            key={id}
            type={type}
            from={from}
            value={value}
            date={date}
          ></Itens>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
