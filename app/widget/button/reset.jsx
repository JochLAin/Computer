'use strict';

import React, { Component } from 'react';

/**
{%- block reset_widget -%}
    {%- set type = type|default('reset') -%}
    {{ block('button_widget') }}
{%- endblock reset_widget -%}
 */

import { set } from '../../variables';
import Button from 'index';

export default class Reset extends Component {
    render() {
        return <Button {...set.call(this.props, {
            type: this.props.vars.type || "reset"
         })} />
    }
}