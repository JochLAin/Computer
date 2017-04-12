"use strict";

import React from 'react';
import { render } from 'react-dom';
import Form from '../app';

fetch('http://jochlain.local/form/')
.then(response => response.json())
.then(form => {
    render(
        <div className="container"><Form {...form} /></div>,
        document.getElementById('root')
    );
})