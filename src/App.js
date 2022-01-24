import React, { useState } from 'react';
import './main.css';
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
    if ((digito=='+'|| digito=='-' || digito=='*' || digito=='/' ) && operacao) {
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
    if (oper=='bs'){
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
    <div className='container'>
       <h3>Calculadora Academia Accenture</h3>
       {Tela(valorTela, resultado)}
       <div className='botoes'>
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
         {Botao('C',()=>operar('bs'))}
         {Botao('=',()=>operar('='))}

       </div>
      </div>
  )
}

export default App;

