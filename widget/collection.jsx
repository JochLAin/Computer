'use strict';

import React, { Component } from 'react';

/**
{%- block collection_widget -%}
    {% if prototype is defined %}
        {%- set attr = attr|merge({'data-prototype': form_row(prototype) }) -%}
    {% endif %}
    {{- block('form_widget') -}}
{%- endblock collection_widget -%}
 */

import { set } from '@components/form/attributes';
import Widget from '@components/form/widget';

export default class Collection extends Component {
    render() {
        return <Widget {...set.call(this.props, {
            'data-prototype': this.props.vars.prototype
        })} />
    }
}