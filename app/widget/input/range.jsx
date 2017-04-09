'use strict';

import React, { Component } from 'react';

/**
{%- block range_widget -%}
    {% set type = type|default('range') %}
    {{- block('form_widget_simple') -}}
{%- endblock range_widget %}
 */

import { set } from '@components/form/variables';
import Input from '@components/form/widget/input';

export default class Range extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "range"
         })} />
    }
}