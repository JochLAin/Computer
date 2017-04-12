'use strict';

import React, { Component } from 'react';

/**
{%- block submit_widget -%}
    {%- set type = type|default('submit') -%}
    {{ block('button_widget') }}
{%- endblock submit_widget -%}
 */

import { set } from '../../../utils/variables';
import { get } from '../../../widget';

export default class Submit extends Component {
    render() {
        const Button = get('button');
        return <Button {...set.call(this.props, {
            type: this.props.vars.type || "submit"
         })} />
    }
}