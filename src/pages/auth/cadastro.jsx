import React from "react";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import "../../index.css";

export default function Cadastro(){
    return (
    <div className="container">
        <label className="label-1">Cadastro</label>
        <Inputs type={'text'} placeholder={'Nome'}/>
        <Inputs type={'email'} placeholder={'Email'}/>
        <Inputs type={'password'} placeholder={'Senha'}/>
        <Inputs type={'password'} placeholder={'Confirmar senha'}/>   
        <Buttons type={'submit'}>ENTRAR</Buttons> 
    </div>
    );
}
