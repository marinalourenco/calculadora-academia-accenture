import React, { useState } from 'react';
import * as S from './styled';
import Botao from './components/Botao';
import Tela from './components/Tela';

function App() {
  const [valorTela, setValorTela] = useState("");
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operacao, setOperacao] = useState(false);
  
  function limparTela(){
    setOperacao(false)
    setValorTela("")
    setResultado(0)
    setAcumulador(0)
  }

  function addDigitalTela(digito){
    if ((digito==='+'|| digito==='-' || digito==='*' || digito==='/' ) && operacao) {
      setOperacao (false)
      valorTela(resultado+digito)
      return
    }

    if(operacao){
      setOperacao (false)
      valorTela(digito)
        return
    }
      setValorTela(valorTela+digito)
      return

  }

  function operar(oper){
    if (oper==='bs'){
      let verTela = valorTela
      verTela=verTela.substring(
        0,(verTela.length-1)
      )
      setValorTela(verTela)
      setOperacao(false)
      return
    }
    try {
      const r=eval(valorTela)
      setAcumulador(r)
      setResultado(r)
      setOperacao(true)
    } catch (error) {
      setResultado('ERROR')
    }
  }
  return (
    <S.Container>
       <S.Titulo>Calculadora Academia Accenture</S.Titulo>
       {Tela(valorTela, resultado)}
       <S.GridBotoes>
         {Botao('AC',()=>limparTela())}
         {Botao('(',()=>addDigitalTela('('))}
         {Botao(')',()=>addDigitalTela(')'))}
         {Botao('/',()=>addDigitalTela('/'))}
         {Botao('7',()=>addDigitalTela('7'))}
         {Botao('8',()=>addDigitalTela('8'))}
         {Botao('9',()=>addDigitalTela('9'))}
         {Botao('*',()=>addDigitalTela('*'))}
         {Botao('4',()=>addDigitalTela('4'))}
         {Botao('5',()=>addDigitalTela('5'))}
         {Botao('6',()=>addDigitalTela('6'))}
         {Botao('-',()=>addDigitalTela('-'))}
         {Botao('1',()=>addDigitalTela('1'))}
         {Botao('2',()=>addDigitalTela('2'))}
         {Botao('3',()=>addDigitalTela('3'))}
         {Botao('+',()=>addDigitalTela('+'))}
         {Botao('0',()=>addDigitalTela('0'))}
         {Botao('.',()=>addDigitalTela('.'))}
         {Botao('Del',()=>operar('bs'))}
         {Botao('=',()=>operar('='))}
       </S.GridBotoes>
    </S.Container>
  )
}

export default App;

