'use strict';

import React, { Component } from 'react';

/**
{%- block submit_widget -%}
    {%- set type = type|default('submit') -%}
    {{ block('button_widget') }}
{%- endblock submit_widget -%}
 */

import { set } from '@components/form/vars';
import Button from '@components/form/widget/button';

export default class Submit extends Component {
    render() {
        return <Button {...set.call(this, {
            type: this.props.vars.type || "submit"
         })} />
    }
}