'use strict';

import React, { Component } from 'react';

/**
{%- block percent_widget -%}
    {%- set type = type|default('text') -%}
    {{ block('form_widget_simple') }} %
{%- endblock percent_widget -%}
 */

import { set } from '@components/form/variables';
import Input from '@components/form/widget/input';

export default class Integer extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "percent"
         })} />
    }
}