import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import logo from '../../../images/logo.png';
import EmailPasswordValidation from '../../../util/EmailPasswordValidation';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import { postRequest } from '../../../services/api';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [buttonLoginDisabled, setbuttonLoginDisabled] = useState(true);

  const history = useHistory();

  const login = async (event) => {
    event.preventDefault();

    try {
      const endpoint = '/login';

      const data = await postRequest(endpoint, { email, password });

      localStorage.setItem('user', JSON.stringify({ ...data }));
      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    if (user.token) setIsLogged(true);
  }, []);

  useEffect(() => {
    const validation = EmailPasswordValidation(email, password);

    if (validation === true) setbuttonLoginDisabled(false);
    else setbuttonLoginDisabled(true);
  }, [email, password]);

  if (isLogged) return <Redirect to="/customer/products" />;

  return (
    <section className="login-area">
      <img src={ logo } alt="Logo do App de Delivery" />
      <form>
        <h1>App de Delivery</h1>
        <TextInput
          label="E-mail"
          testId="common_login__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          password={ false }
          placeholder="seu-email@site.com.br"
          value={ email }
        />
        <TextInput
          label="Senha"
          testId="common_login__input-password"
          onChange={ ({ target: { value } }) => setPassword(value) }
          password
          placeholder="Sua senha"
          value={ password }
        />

        <Button
          disabled={ buttonLoginDisabled }
          label="LOGIN"
          buttonType="primary-button"
          testId="common_login__button-login"
          onClick={ (event) => login(event) }
        />
        <Button
          disabled={ false }
          label="Ainda n??o tenho conta"
          buttonType="terciary-button"
          testId="common_login__button-register"
          onClick={ () => history.push('/register') }
        />
      </form>

      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              {
                `O endere??o de e-mail ou a senha n??o est??o corretos.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
    </section>
  );
};

export default Login;
