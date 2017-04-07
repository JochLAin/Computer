'use strict';

import React, { Component } from 'react';

/**
{%- block range_widget -%}
    {% set type = type|default('range') %}
    {{- block('form_widget_simple') -}}
{%- endblock range_widget %}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Range extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "range"
         })} />
    }
}