import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form id="register-form">
      <TextInput
        label="Nome"
        testId="common_register__input-name"
        onChange={ ({ target: { value } }) => setName(value) }
        password={ false }
        placeholder="Seu nome"
        value={ name }
      />
      <TextInput
        label="E-mail"
        testId="common_register__input-email"
        onChange={ ({ target: { value } }) => setEmail(value) }
        password={ false }
        placeholder="seu-email@site.com.br"
        value={ email }
      />
      <TextInput
        label="Senha"
        testId="common_register__input-password"
        onChange={ ({ target: { value } }) => setPassword(value) }
        password
        placeholder="Sua senha"
        value={ password }
      />

      <Button
        disabled={ false }
        label="CADASTRAR"
        buttonType="primary-button"
        testId="common_register__button-register"
        onClick={ () => console.log('Not implemented') }
      />
    </form>
  );
};

export default RegisterPage;
