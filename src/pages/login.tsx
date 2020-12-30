import React, { FC, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { validateUser } from '../store/login/actions';
import { User } from '../store/login/types';

const initialState: User[] = [
  {
    firstName: "Artyom",
    secondName: "N",
    password: "1",
    type: "admin"
  },
  {
    firstName: "Andris",
    secondName: "D",
    password: "1",
    type: "user"
  }
]

const Login: FC = () => {

  const [registeredUsers] = useState(initialState)
  const userState = useSelector<RootState>(state => state.userState)
  console.log("userState", userState)
  console.log(registeredUsers)

  const dispatch = useDispatch()

  return (
    <Form
      onSubmit={value => {
        const registered = [...registeredUsers]
        const validation = registered.filter(item => item.firstName === value.firstName && item.secondName === value.secondName && item.password === value.password)
        dispatch(validateUser(validation));
        console.log(1, value);
        console.log(12, validation);
      }}
    >
      {({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>

          <div>
            <label>First Name</label>
            <Field name="firstName">
              {({ input }) => (
                <input
                  type="text"
                  placeholder="First Name"
                  {...input} />
              )}
            </Field>
          </div>
          <div>
            <label>Last Name</label>
            <Field name="secondName">
              {({ input }) => (
                <input
                  type="text"
                  placeholder="Second Name"
                  {...input} />
              )}
            </Field>
          </div>
          <div>
            <label>Password</label>
            <Field name="password">
              {({ input }) => (
                <input
                  type="password"
                  placeholder="Password"
                  {...input} />
              )}
            </Field>
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
              </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
              </button>
          </div>
        </form>
      )}
    </Form >
  );
};

export default Login;