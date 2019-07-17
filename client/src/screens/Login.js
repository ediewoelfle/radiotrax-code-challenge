import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const Login = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .required("Username required.")
          .min(2, "Too Short!")
          .max(50, "Too Long!"),
        password: Yup.string()
          .required("Password required.")
          .min(2, "Too Short!")
          .max(50, "Too Long!")
      })}
      onSubmit={(values, actions) => {
        console.log("values", values);
      }}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Field type="text" name="username" />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <Field type="password" name="password" />
          {errors.password && touched.password && <div>{errors.password}</div>}
          {status && status.msg && <div>{status.msg}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    />
  );
};
