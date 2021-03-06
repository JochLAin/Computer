'use strict';

import React, { Component } from 'react';

/**
{%- block form_rest -%}
    {% for child in form -%}
        {% if not child.rendered %}
            {{- form_row(child) -}}
        {% endif %}
    {%- endfor %}
{% endblock form_rest %}
 */

import uuid from 'uuid';
import Row from '../row';

export default class Rest extends Component {
    render() {
        return <section>
            { Object.keys(this.props.fields).map((key, index, fields) => {
                if (this.props.fields[key].vars.rendered) return null;
                return <Row key={uuid.v4()} {...this.props.fields[key]} />
            }).filter(child => child)}
        </section>
    }
}