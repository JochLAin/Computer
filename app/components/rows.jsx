'use strict';

import uuid from 'uuid';
import React, { Component } from 'react';

/**
{%- block form_rest -%}
    {% for child in form -%}
        {{- form_row(child) -}}
    {%- endfor %}
{% endblock form_rest %}
 */

import Row from '../row';
import { set } from '../utils/variables';

export default class Rows extends Component {
    render() {
        return <section>
            { Object.keys(this.props.fields).map(key => {
                const child = this.props.fields[key];
                return <Row key={uuid.v4()} {...!this.props.index ? this.props.fields[key] : set.call(this.props.fields[key], {
                    id: child.vars.id && child.vars.id.replace(/__name__/g, this.props.index),
                    label: child.vars.label && child.vars.label.replace(/__name__label__/g, '').replace(/__name__/g, ''),
                    full_name: child.vars.full_name && child.vars.full_name.replace(/__name__/g, this.props.index),
                })} />
            }).filter(child => child)}
        </section>
    }
}