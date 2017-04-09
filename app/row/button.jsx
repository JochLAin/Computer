'use strict';

import React, { Component } from 'react';

/**
{%- block button_row -%}
    <div>
        {{- form_widget(form) -}}
    </div>
{%- endblock button_row -%}
 */

import Widget from '../widget';

export default class ButtonRow extends Component {
    render() {
        return <div>
            <Widget {...this.props}/>
        </div>
    }
}