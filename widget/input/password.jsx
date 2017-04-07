'use strict';

import React, { Component } from 'react';

/**
{%- block password_widget -%}
    {%- set type = type|default('password') -%}
    {{ block('form_widget_simple') }}
{%- endblock password_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Password extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "password"
         })} />
    }
}