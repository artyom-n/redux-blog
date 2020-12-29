import React from 'react'
import { Form, Field } from 'react-final-form'



const Login = () => {
  return (
    <Form
      onSubmit={value => {
        console.log(value);
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