import React, { FC, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { validateUser } from '../store/login/actions';
import { User } from '../store/login/types';
import '../App.css';

const initialState: User[] = [
  {
    firstName: "Artyom",
    secondName: "N",
    password: "1",
    type: "user"
  },
  {
    firstName: "Andris",
    secondName: "D",
    password: "1",
    type: "admin"
  }
]

const Login: FC = () => {

  const [registeredUsers] = useState(initialState)
  const userState: any = useSelector<RootState>(state => state.userState.user)

  const dispatch = useDispatch()

  return (
    <section>
      <div className="form-wrapper">
        <div className="form">
          <Form
            onSubmit={value => {
              const registered = [...registeredUsers]
              const validation: User[] = registered.filter(item => item.firstName === value.firstName && item.secondName === value.secondName && item.password === value.password)
              dispatch(validateUser(validation));
              if (validation.length > 0) { alert(`Welcome, ${validation[0].firstName}! You are logged in as ${validation[0].type}!`) } else { alert("User not found!") }
            }}
          >
            {({ handleSubmit, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <div className="label-input-wrapper">
                  <div>
                    <label className="login-label">First Name</label>
                    <Field name="firstName">
                      {({ input }) => (
                        <input className="add-comment-btn margin-bottom-12"
                          type="text"
                          placeholder="First Name"
                          {...input} />
                      )}
                    </Field>
                  </div>
                  <div>
                    <label className="login-label">Last Name</label>
                    <Field name="secondName">
                      {({ input }) => (
                        <input className="add-comment-btn margin-bottom-12"
                          type="text"
                          placeholder="Second Name"
                          {...input} />
                      )}
                    </Field>
                  </div>
                  <div>
                    <label className="login-label">Password</label>
                    <Field name="password">
                      {({ input }) => (
                        <input className="add-comment-btn margin-bottom-12"
                          type="password"
                          placeholder="Password"
                          {...input} />
                      )}
                    </Field>
                  </div>
                </div>
                <div className="buttons">
                  <button type="submit" className="add-comment-btn cursor-pointer" disabled={submitting || pristine} >
                    Submit
              </button>
                  <button
                    className="add-comment-btn cursor-pointer"
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
        </div>
      </div>
    </section>
  );
};

export default Login;