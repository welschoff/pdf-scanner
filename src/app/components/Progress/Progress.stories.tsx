import React from 'react';
import Progress from './Progress';

export default {
  component: Progress,
  title: 'Components/Progress',
};

export const Default = () => <Progress status="Recognizing" progress={1} />;
