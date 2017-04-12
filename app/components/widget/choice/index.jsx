'use strict';

import React, { Component } from 'react';

/**
{%- block choice_widget -%}
    {% if expanded %}
        {{- block('choice_widget_expanded') -}}
    {% else %}
        {{- block('choice_widget_collapsed') -}}
    {% endif %}
{%- endblock choice_widget -%}
 */

import { get } from '../../../widget';

export default class Choice extends Component {
    render() {
        const Widget = get(this.props.vars.expanded ? 'expanded' : 'collapsed')
        return <Widget {...this.props} />
    }
}