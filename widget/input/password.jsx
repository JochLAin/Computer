'use strict';

import React, { Component } from 'react';

/**
{%- block password_widget -%}
    {%- set type = type|default('password') -%}
    {{ block('form_widget_simple') }}
{%- endblock password_widget -%}
 */

import { set } from '@components/form/variables';
import Input from '@components/form/widget/input';

export default class Password extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "password"
         })} />
    }
}