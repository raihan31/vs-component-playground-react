import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import HelloWorld from './HelloWorld';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'vs-react/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

export const Hello = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hello.args = {
  label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};
