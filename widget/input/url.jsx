'use strict';

import React, { Component } from 'react';
/**
{%- block url_widget -%}
    {%- set type = type|default('url') -%}
    {{ block('form_widget_simple') }}
{%- endblock url_widget -%}
 */

import { set } from '@components/form/vars';
import Input from '@components/form/input';

export default class Url extends Component {
    render() {
        return <Input {...set.call(this, {
            type: this.props.vars.type || "url"
         })} />
    }
}