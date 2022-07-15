import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
// import Header from '../components/Header';
// import { requestLogin } from '../services/requests';
import EmailPasswordValidation from '../../util/EmailPasswordValidation';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //  const [isLogged, setIsLogged] = useState(false);
  // const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [buttonLoginDisabled, setbuttonLoginDisabled] = useState(true);

  const history = useHistory();

  // const login = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const endpoint = '/login';

  //     const { token, user } = await requestLogin(endpoint, { email, password });

  //     localStorage.setItem('user', JSON.stringify({ token, ...user }));
  //     setIsLogged(true);
  //   } catch (error) {
  //     setFailedTryLogin(true);
  //     setIsLogged(false);
  //   }
  // };

  /*   useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Redirect to="" />; */

  useEffect(() => {
    const validation = EmailPasswordValidation(email, password);

    if (validation === true) setbuttonLoginDisabled(false);
    else setbuttonLoginDisabled(true);
  }, [email, password]);

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
          onClick={ () => console.log('Not implemented') }
        />
        <Button
          disabled={ false }
          label="Ainda não tenho conta"
          buttonType="terciary-button"
          testId="common_login__button-register"
          onClick={ () => history.push('/register') }
        />
      </form>

      {/* {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              {
                `O endereço de e-mail ou a senha não estão corretos.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      } */}
    </section>
  );
};

export default Login;
