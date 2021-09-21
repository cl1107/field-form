import React, { useState, useEffect, useRef } from 'react';

interface Store {
  [name: string]: any;
}

export interface FormInstance<Values = any> {
  getFieldsValue(): Values;
  setFields: (fields: Store) => void;
}

class FormStore {
  private store: Store = {};

  public getForm = (): FormInstance => ({
    getFieldsValue: this.getFieldsValue,
    setFields: this.setFields,
  });

  private getFieldsValue = () => {
    return this.store;
  };

  private setFields = (store: Store) => {
    if (store) {
      this.store = { ...this.store, ...store };
    }
  };
}

function useForm<Values = any>(): [FormInstance<Values>] {
  const formRef = React.useRef<FormInstance>();

  if (!formRef.current) {
    const formStore: FormStore = new FormStore();
    formRef.current = formStore.getForm();
  }

  return [formRef.current];
}

export default useForm;
