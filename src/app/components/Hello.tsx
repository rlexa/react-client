import * as React from 'react';
import { Border } from './common/Border';
import { Json } from './common/Json';
import { Clicker } from './widgets/Clicker';
import { Clock } from './widgets/Clock';
import { DataList } from './widgets/DataList';

export const Hello = (props: { compiler: string, framework: string, bundler: string }) => (
  <div>
    <h1>React</h1>
    <Json data={props} />
    <div><Clock /></div>
    <div><Clock asIso /></div>
    <div><Clicker /></div>
    <Border color='blue'>
      <DataList data={[1.2, '3', false, new Date()]} />
    </Border>
  </div>
);