'use strict';

import React, { Component } from 'react';

/**
{%- block search_widget -%}
    {%- set type = type|default('search') -%}
    {{ block('form_widget_simple') }}
{%- endblock search_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Search extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "search"
         })} />
    }
}