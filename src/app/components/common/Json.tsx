import * as React from 'react';

export const Json = (props: { data?: any }) => <pre>{JSON.stringify(props, null, 2)}</pre>;
