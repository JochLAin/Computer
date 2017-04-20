'use strict';

import React, { Component } from 'react';

/**
{%- block form_row -%}
    <div>
        {{- form_label(form) -}}
        {{- form_errors(form) -}}
        {{- form_widget(form) -}}
    </div>
{%- endblock form_row -%}
 */

import Errors from '../../errors';
import Label from '../../label';
import Widget from '../../widget';

export default class Row extends Component {
    render() {
        return <div>
            { this.props.vars.errors.length && <Errors {...this.props}/>}
            { this.props.vars.label && <Label {...this.props}/>}
            <Widget {...this.props}/>
        </div>
    }
}