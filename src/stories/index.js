import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import App from '../App';

storiesOf('Button', module)
  .add('with text', () => <Button 
    onClick={action('clicked')}
    label="with text" />)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('App', module)
  .add("App component", ()=> <App />)