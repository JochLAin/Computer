'use strict';

import React, { Component } from 'react';

/**
{%- block range_widget -%}
    {% set type = type|default('range') %}
    {{- block('form_widget_simple') -}}
{%- endblock range_widget %}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Range extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "range"
         })} />
    }
}