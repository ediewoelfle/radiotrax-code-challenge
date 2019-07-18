import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

export const Login = ({ url }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
          .required("Username required.")
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z]+$/, "Username must only be letters!"),
        password: Yup.string()
          .required("Password required.")
          .min(2, "Too Short!")
          .max(50, "Too Long!")
      })}
      onSubmit={(values, actions) => {
        const credentials = btoa(values.username + ":" + values.password);
        console.log("credentials", credentials);
        axios
          .get(url, {
            headers: {
              authorization: `Basic ${credentials}`
            }
          })
          .then(
            response => console.log("response", response),
            error => console.log("error", error)
          );
      }}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Field type="text" name="username" />
          {errors.username && touched.username && <div>{errors.username}</div>}
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
