import React, { useState } from 'react';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='form-wrapper'>
      <Form onSubmit={handleSubmit} className='signup'>
        <h3 className='title'>Sign In</h3>

        <FormGroup id='email'>
          <Label>Email address</Label>
          <Input
            autoFocus
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup id='password'>
          <Label>Password</Label>
          <Input
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <div className='custom-control custom-checkbox'>
            <Input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <Label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </Label>
          </div>
        </FormGroup>
        <Button block disabled={!validateForm()} type='submit'>
          Login
        </Button>
        <p className='forgot-password text-right'>
          Forgot <a href=' #'>password?</a>
        </p>
      </Form>
    </div>
  );
}
