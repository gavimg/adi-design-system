import React from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button'
};

export const Variants = () => (
  <div className="g-flex g-gap-4 g-flex-wrap">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export const Sizes = () => (
  <div className="g-flex g-gap-4 g-items-center">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
