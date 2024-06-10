"use client"
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Login() {
  const router = useRouter();
  return (
    <div>
      <Formik initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors:{email?: string, password?: string} = {};
          if (!values.email) 
          {
            errors.email = 'Required';
          } 
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) 
          {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async(values) => {
          let response = await axios.post("https://dummyjson.com/auth/login", {
                username: 'emilys',
                password: 'emilyspass'
          })
          console.log(response);
          localStorage.setItem("userToken", response.data.token);
          router.push("/");
        }}
        >
          {({ isSubmitting}) => (
            <div className='flex flex-col items-center min-h-screen justify-center'>
              <Form className='flex flex-col w-[20%]'>

                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" className="mt-10" placeholder="Password" />
                <ErrorMessage name="password" component="div" />

                <button type="submit" disabled={isSubmitting} className='mt-10'>
                  Submit
                </button>
              </Form>
            </div>
          )}

      </Formik>
    </div>
  )
}
