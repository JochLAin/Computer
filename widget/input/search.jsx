'use strict';

import React, { Component } from 'react';

/**
{%- block search_widget -%}
    {%- set type = type|default('search') -%}
    {{ block('form_widget_simple') }}
{%- endblock search_widget -%}
 */

import { set } from '@components/form/variables';
import Input from '@components/form/widget/input';

export default class Search extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "search"
         })} />
    }
}