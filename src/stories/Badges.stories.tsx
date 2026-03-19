import React from 'react';
import { Badge } from '../components/Badge';

export default {
  title: 'Components/Badge'
};

export const Variants = () => (
  <div className="g-flex g-gap-3 g-flex-wrap">
    <Badge>Default</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="info">Info</Badge>
  </div>
);
