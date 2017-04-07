'use strict';

import React, { Component } from 'react';

/**
{%- block percent_widget -%}
    {%- set type = type|default('text') -%}
    {{ block('form_widget_simple') }} %
{%- endblock percent_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Integer extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "percent"
         })} />
    }
}