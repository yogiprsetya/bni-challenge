import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from 'store/actions/logginUser';
import Icon from 'icon';

const Login = ({ isAuthenticated, history, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const loginSubmit = e => {
    e.preventDefault();

    const dataUser = {email, password};
    props.dispatch(login(dataUser));
  }

  useEffect(() => {
    if (isAuthenticated) { history.push('/') }
  }, [isAuthenticated, history]);

  return (
    <div className="bg-darkDrop h-screen overflow-hidden flex justify-center items-center">
      <div className="lg:w-3/12 sm:w-5/12">
        <img src="/images/logo.jpg" className="mx-auto" alt="logo" />

        <form onSubmit={ loginSubmit }>
          <div className="text-white mt-1 py-3">
            <small className="text-mainBrand">Email</small>

            <div className="w-full rounded border">
              <input
                value={ email }
                required
                onChange={e => setEmail(e.target.value)}
                className="w-full px-2 border-white bg-transparent h-8"
              />
            </div>
          </div>

          <div className="text-white mt-1 py-3">
            <small className="text-mainBrand">Password</small>

            <div className="w-full relative rounded border">
              <div className="flex items-center">
                <input
                  value={ password }
                  required
                  type={ hidePassword ? 'password' : 'text' }
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-2 border-white bg-transparent h-8"
                />

                <button
                  type="button"
                  className="absolute right-2"
                  onClick={ () => setHidePassword(!hidePassword) }
                >
                  <Icon icon={ hidePassword ? 'eye-off' : 'eye-on' } />
                </button>
              </div>
            </div>
          </div>

          <button className="bg-mainBrand w-full h-9 rounded mt-5 text-sm">
            MASUK
          </button>
        </form>

        <button className="text-mainBrand m-auto mt-8 block">Lupa Password?</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.user
});


export default connect(mapStateToProps)(Login);
