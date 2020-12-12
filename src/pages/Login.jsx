import React, { useState } from 'react';
import { connect } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-darkDrop h-full">
      <div className="max-w-md m-auto">
        <img src="/images/logo.jpg" className="mx-auto" alt="logo" />

        <form>
          <div className="text-white px-5 mt-1 py-3">
            <small className="text-mainBrand">Email</small>

            <div className="w-full rounded border pt-1">
              <input
                value={ email }
                required
                onChange={e => setEmail(e.target.value)}
                className="w-full border-white bg-transparent"
              />
            </div>
          </div>

          <div className="text-white px-5 mt-1 py-3">
            <small className="text-mainBrand">Email</small>

            <div className="w-full rounded border pt-1">
              <input
                value={ email }
                required
                onChange={e => setEmail(e.target.value)}
                className="w-full border-white bg-transparent"
              />

              <button
                classname="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
              >
                show
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect()(Login);