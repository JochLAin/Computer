'use strict';

import React, { Component } from 'react';

/**
{%- block money_widget -%}
    {{ money_pattern|replace({ '{{ widget }}': block('form_widget_simple') })|raw }}
{%- endblock money_widget -%}
 */

import Simple from '@components/form/widget/simple';

export default class Money extends Component {
    render() {
        return <Simple {...this.props.children.widget} />
    }
}