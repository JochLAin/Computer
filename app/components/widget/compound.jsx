'use strict';

import React, { Component } from 'react';

/**
{%- block form_widget_compound -%}
    <div {{ block('widget_container_attributes') }}>
        {%- if form.parent is empty -%}
            {{ form_errors(form) }}
        {%- endif -%}
        {{- block('form_rows') -}}
        {{- form_rest(form) -}}
    </div>
{%- endblock form_widget_compound -%}
 */

import ContainerAttributes from '../../utils/attributes/container';
import Errors from '../../errors';
import Rows from '../rows';

export default class Widget extends Component {
    render() {
        const { parent } = this.props.vars;

        return <section {...ContainerAttributes.call(this.props)}>
            { parent && <Errors {...this.props} />}
            <Rows {...this.props} />
        </section>
    }
}