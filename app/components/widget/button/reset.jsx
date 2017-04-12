'use strict';

import React, { Component } from 'react';

/**
{%- block reset_widget -%}
    {%- set type = type|default('reset') -%}
    {{ block('button_widget') }}
{%- endblock reset_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Reset extends Component {
    render() {
        const Button = get('button');
        return <Button {...set.call(this.props, {
            type: this.props.vars.type || "reset"
         })} />
    }
}