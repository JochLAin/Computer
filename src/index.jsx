"use strict";

import React from 'react';
import { render } from 'react-dom';
import Form from '../app';

render(
    <Form {...window.__initialState__} />,
    document.getElementById('root')
);