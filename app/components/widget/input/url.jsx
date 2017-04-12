'use strict';

import React, { Component } from 'react';
/**
{%- block url_widget -%}
    {%- set type = type|default('url') -%}
    {{ block('form_widget_simple') }}
{%- endblock url_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Url extends Component {
    render() {
        const Input = get('text');
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "url"
         })} />
    }
}