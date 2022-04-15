import React from 'react';
import './HelloWorld';

export interface HelloWorldProps {
  label: string;
}

const HelloWorld = (props: HelloWorldProps) => {
  return <h1 className="bg-white">Hello World, {props.label}!</h1>;
};

export default HelloWorld;
