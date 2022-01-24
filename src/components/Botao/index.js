import React from 'react';
import * as S from './styled';

function Botao(label, onClick) {
  return <S.Botao onClick={onClick}>{label}</S.Botao>;
}

export default Botao;