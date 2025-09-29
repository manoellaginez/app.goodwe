import React from "react";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import "../../index.css"

export default function Entre() {
  return (
    <div className="container">
      <label className="label-1">Entre</label>
      <Inputs type={'email'} placeholder={'Email'}/>
      <Inputs type={'password'} placeholder={'Senha'}/>
      <Buttons type={'submit'}>ENTRAR</Buttons> 
    </div>
  );
}
