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

import Expanded from '@components/form/widget/choice/expanded';
import Collapsed from '@components/form/widget/choice/collapsed';

export default class Choice extends Component {
    render() {
        return this.props.vars.expanded 
            ? <Expanded {...this.props} />
            : <Collapsed {...this.props} />
    }
}