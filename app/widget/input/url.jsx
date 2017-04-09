'use strict';

import React, { Component } from 'react';
/**
{%- block url_widget -%}
    {%- set type = type|default('url') -%}
    {{ block('form_widget_simple') }}
{%- endblock url_widget -%}
 */

import { set } from '../../variables';
import Input from 'index';

export default class Url extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "url"
         })} />
    }
}