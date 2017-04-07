'use strict';

import React, { Component } from 'react';

/**
{%- block integer_widget -%}
    {%- set type = type|default('number') -%}
    {{ block('form_widget_simple') }}
{%- endblock integer_widget -%}
 */

import { set } from '@components/form/variables';
import Input from '@components/form/widget/input';

export default class Integer extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "number"
         })} />
    }
}