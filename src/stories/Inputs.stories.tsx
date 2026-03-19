import React from 'react';
import { Input } from '../components/Input';

export default {
  title: 'Components/Input'
};

export const States = () => (
  <div className="g-flex g-flex-col g-gap-4" style={{ minWidth: '320px' }}>
    <Input label="Email" placeholder="you@example.com" fullWidth />
    <Input label="With Hint" hint="We will never share your email." fullWidth />
    <Input label="With Error" error="Required field." fullWidth />
  </div>
);
