'use strict';

import uuid from 'uuid';
import React, { Component } from 'react';

/**
{%- block choice_widget_expanded -%}
    <div {{ block('widget_container_attributes') }}>
    {%- for child in form %}
        {{- form_widget(child) -}}
        {{- form_label(child, null, {translation_domain: choice_translation_domain}) -}}
    {% endfor -%}
    </div>
{%- endblock choice_widget_expanded -%}
 */

import ContainerAttributes from '../../attributes/container';
import Label from '../../label';
import Widget from '../index';

export default class Expanded extends Component {
    render() {
        return <div {...ContainerAttributes.call(this.props)}>
            { Object.keys(this.props.children).map((key, index, keys) => {
                return <div key={uuid.v4()}>
                    <Widget {...this.props.children[key]}/>
                    {/* TODO: Traduction avec StoneJS */}
                    <Label {...this.props.children[key]}/>
                </div>
            })}
        </div>
    }
} 