// rfce 탭 사용

import React, {useState} from 'react'

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmailChange = (event) => {
    const {value} = event.target
    setEmail(value)
    // console.log(value)
    }

  const onPasswordChange = (event) => {
    const {value} = event.target
    setPassword(value)
    // console.log(value)
    }

  const onSubmit = (event) => {
    event.preventDefault(); // 버튼 클릭 시 새로고침 방지
    }

  return (
    <div>
      <form onSubmit={onSubmit}>

        <input
          name='email'
          type='email'
          placeholder='input email'
          value={email}
          onChange={onEmailChange}
          required>
        </input>

        <input
          name='password'
          type='password'
          placeholder='input password'
          value={password}
          onChange={onPasswordChange}
          required>
        </input>

        <input
          name='submit'
          type='submit'
          // onChange={onSubmit}
          value='sign in'>
        </input>
      </form>
    </div>
  )
}

export default Auth