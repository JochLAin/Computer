'use strict';

import React, { Component } from 'react';
/**
{%- block url_widget -%}
    {%- set type = type|default('url') -%}
    {{ block('form_widget_simple') }}
{%- endblock url_widget -%}
 */

import { set } from '@components/form/variables';
import Input from '@components/form/widget/input';

export default class Url extends Component {
    render() {
        return <Input {...set.call(this.props, {
            type: this.props.vars.type || "url"
         })} />
    }
}