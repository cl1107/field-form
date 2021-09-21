import React, { useState } from "react";
import { Form, Field, useForm } from "./Form";

function App() {
  const [form] = useForm();
  return (
    <div className="App">
      <Form form={form}>
        <Field name="username">
          <input type="text" />
        </Field>
        <Field name="password">
          <input type="password" />
        </Field>
      </Form>
      <button
        onClick={() => {
          console.log(form.getFieldsValue());
        }}
      >
        获取form的值
      </button>
    </div>
  );
}

export default App;
