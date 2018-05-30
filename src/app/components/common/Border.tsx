import * as React from 'react';

export const Border = (props: { children?: React.ReactNode, color?: string }) =>
  <div style={{ borderWidth: '2px', borderColor: props.color || 'green', borderStyle: 'solid' }}>{props.children}</div>;
