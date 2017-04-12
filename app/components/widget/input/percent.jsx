'use strict';

import React, { Component } from 'react';

/**
{%- block percent_widget -%}
    {%- set type = type|default('text') -%}
    {{ block('form_widget_simple') }} %
{%- endblock percent_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Integer extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "percent"
         })} />
    }
}