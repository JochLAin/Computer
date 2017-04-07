'use strict';

import React, { Component } from 'react';

/**
{%- block form_rest -%}
    {% for child in form -%}
        {{- form_row(child) -}}
    {%- endfor %}
{% endblock form_rest %}
 */

import uuid from 'uuid';
import Row from '@components/form/row';

export default class Rows extends Component {
    render() {
        return <section>
            { Object.keys(this.props.children).map((key, index, keys) => {
                if (this.props.children[key].vars.rendered) return null;
                return <Row key={uuid.v4()} {...this.props.children[key]} />
            }).filter(child => child)}
        </section>
    }
}