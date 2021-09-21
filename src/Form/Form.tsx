import React, { useState, useEffect, useRef } from 'react';
import { FormInstance } from './useForm';
interface FormProps {
  children: React.ReactNode;
  form?: FormInstance;
}

export default function Form(props: FormProps) {
  const { children, form } = props;
  const wrapperNode: React.ReactNode = Array.isArray(children)
    ? children.map((child) =>
        React.cloneElement(child as React.ReactElement, {
          onFieldChange(key, value) {
            console.log(key, value);
            form?.setFields({ [key]: value });
          },
        }),
      )
    : React.cloneElement(children as React.ReactElement, {
        onFieldChange(key, value) {
          console.log(key, value);
          form?.setFields({ [key]: value });
        },
      });
  return <>{wrapperNode}</>;
}
