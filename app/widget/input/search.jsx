'use strict';

import React, { Component } from 'react';

/**
{%- block search_widget -%}
    {%- set type = type|default('search') -%}
    {{ block('form_widget_simple') }}
{%- endblock search_widget -%}
 */

import { set } from '../../variables';
import Input from 'index';

export default class Search extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "search"
         })} />
    }
}