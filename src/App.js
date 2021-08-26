import React from 'react';
import { Styles } from './Styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <Styles>
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{name:'', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field label='Name' type='name' name='name' placeholder='Enter Name'/>
          <Field label='Email' type="email" name="email" placeholder="test@test.ro"/>
          <ErrorMessage name="email" component="div" />
          <Field label="Password" type="password" name="password" placeholder='Enter Password'/>
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
           </button>
        </Form>
      )}
    </Formik>
  </div>
  </Styles>
);

export default Basic;
