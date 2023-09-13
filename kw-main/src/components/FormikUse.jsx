import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './formik.module.css'

const FormikUse = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
  })

  const validationForm = Yup.object().shape({
    name:Yup.string().required('Digite seu nome'),
    lastName: Yup.string(),
    email: Yup.string().email("Email invalido").required("Digite um email valido")
  })

  const handleSubmit = (value) => {
    console.log(value);
  }

  const handleClick = () => {
    console.log();

    setFormValues();
  }

  const msg = () => {
    console.error()
  } 

  return (
    <div className={styles.formulario}>
      <h1>Formik</h1>
      <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
      validationForm={validationForm}
      >
        <Form>
        <label htmlFor="name">Nome</label>
        <Field type='name' name='name'/>
        <ErrorMessage name='name' component={'span'}/>

        <label htmlFor="lastName">sobrenome</label>
        <Field type='text' name='lastName'/>
        <ErrorMessage name='name' component={'span'}/>

        <label htmlFor="email">email</label>
        <Field type='email' name='email'/>
        <ErrorMessage component={'span'} name='email'>{msg}</ErrorMessage><br/>

        <button type='submit' onClick={handleClick}>ENVIAR</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormikUse