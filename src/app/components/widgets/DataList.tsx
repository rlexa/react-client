import * as React from 'react';

const toString = (val: any) => val === undefined ? 'undefined' : val === null ? 'null' : val.toString();

export const DataList = (props: { data?: any[] }) => (<ul>{(props.data || []).map((ii, index) => <li key={index}>{toString(ii)}</li>)}</ul>);
