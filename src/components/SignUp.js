import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
        <h3 className='title'>Sign Up</h3>

        <FormGroup id='firstname'>
          <Label>First name</Label>
          <Input
            type='text'
            placeholder='First name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup id='lastname'>
          <Label>Last name</Label>
          <Input
            type='text'
            placeholder='Last name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup id='email'>
          <Label>Email address</Label>
          <Input
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

        <Button block disabled={!validateForm()} type='submit'>
          Sign Up
        </Button>
        <p className='forgot-password text-right'>
          Already registered <Link to='/login'>sign in?</Link>
        </p>
      </Form>
    </div>
  );
}
