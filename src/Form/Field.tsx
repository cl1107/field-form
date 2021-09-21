import React, { useState, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  name: string;
  onFieldChange?: Function;
}

import './field.less';

export default function Field(props: Props) {
  const { children, name, onFieldChange } = props;

  let wrapperNode: React.ReactNode = React.cloneElement(
    children as React.ReactElement,
    {
      onChange(event) {
        if (event && event.target) {
          const newValue = (event.target as HTMLInputElement)['value'];
          onFieldChange!(name, newValue);
        }
      },
    },
  );
  return (
    <div className='dk-field'>
      <div className='dk-field-label'>{name}</div>
      <div className='dk-field-input'>{wrapperNode}</div>
    </div>
  );
}
