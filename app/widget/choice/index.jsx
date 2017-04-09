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

import Expanded from './expanded';
import Collapsed from './collapsed';

export default class Choice extends Component {
    render() {
        return this.props.vars.expanded 
            ? <Expanded {...this.props} />
            : <Collapsed {...this.props} />
    }
}