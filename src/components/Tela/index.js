import React from 'react';

import * as S from './styled';

function Tela(valor, res) {
    return(
        <S.Tela>
          <S.TelaOperacao>{valor}</S.TelaOperacao>
          <S.TelaResultado>{res}</S.TelaResultado>
        </S.Tela>
        );
}

export default Tela;