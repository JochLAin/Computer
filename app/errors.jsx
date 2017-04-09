'use strict';

import React, { Component } from 'react';

/**
{%- block form_errors -%}
    {%- if errors|length > 0 -%}
    <ul>
        {%- for error in errors -%}
            <li>{{ error.message }}</li>
        {%- endfor -%}
    </ul>
    {%- endif -%}
{%- endblock form_errors -%}
 */

export default class Errors extends Component {
    render() {
        return <ul>
            {/*{ this.props.vars.errors != {} && this.props.vars.errors.map(error => <li>{error.message}</li> )}*/}
        </ul>
    }
}