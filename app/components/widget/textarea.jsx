'use strict';

import React, { Component } from 'react';

/**
{%- block textarea_widget -%}
    <textarea {{ block('widget_attributes') }}>{{ value }}</textarea>
{%- endblock textarea_widget -%}
 */

import WidgetAttributes from '../../utils/attributes/widget';

export default class Textarea extends Component {
    render() {
        return <textarea {...WidgetAttributes.call(this.props)} />
    }
}