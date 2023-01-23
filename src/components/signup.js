import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name:yup.string().min(2, "Name must have atleast 2 characters").required(),
            email:yup.string().email().required(),
            password:yup.string().min(6, "Password must have atleast 6 characters").required() 
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            resetForm({values: ''})
        }
    })

    // console.error(formik.errors)
  return (
    <div>
        <h1>User Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input type="text" id="name" value={formik.values.name} onChange={formik.handleChange} required/>

                {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input type="email" id="email" value={formik.values.email} onChange={formik.handleChange} required/>

                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
            </div>
            <div>
                <label htmlFor='password'>Name: </label>
                <input type="password" id="password" value={formik.values.password} onChange={formik.handleChange} required/>

                {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup;