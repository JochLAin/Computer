'use strict';

import React, { Component } from 'react';

/**
{%- block money_widget -%}
    {{ money_pattern|replace({ '{{ widget }}': block('form_widget_simple') })|raw }}
{%- endblock money_widget -%}
 */

import Input from './index';

export default class Money extends Component {
    render() {
        return <span>
            {this.props.vars.money_pattern.replace('{{ widget }}', '')}
            <Input {...this.props} />
        </span>
    }
}