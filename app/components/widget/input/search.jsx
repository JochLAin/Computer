'use strict';

import React, { Component } from 'react';

/**
{%- block search_widget -%}
    {%- set type = type|default('search') -%}
    {{ block('form_widget_simple') }}
{%- endblock search_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Search extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "search"
         })} />
    }
}