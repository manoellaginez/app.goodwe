import { useState } from 'react'

import Control from '../../components/Control'

import "../../index.css"

import { useAuth } from '../../contexts/UseAuth'

const Login = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const { login_user } = useAuth()

  const handleLogin = () => {
    login_user(username, password)
  }

  return (
    <div className="container">
      <label className="label-1">Login</label>
      <Control set={setUsername} value={username} label={'Nome de usuário'} type={'text'} placeholder={'Seu nome de usuário...'}/>
      <Control set={setPassword} value={password} label={'Senha'} type={'password'} placeholder={'Sua senha segura...'}/>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login
