'use strict';

import React, { Component } from 'react';

/**
{%- block dateinterval_widget -%}
    {%- if widget == 'single_text' -%}
        {{- block('form_widget_simple') -}}
    {%- else -%}
        <div {{ block('widget_container_attributes') }}>
            {{- form_errors(form) -}}
            {%- if with_years %}{{ form_widget(form.years) }}{% endif -%}
            {%- if with_months %}{{ form_widget(form.months) }}{% endif -%}
            {%- if with_weeks %}{{ form_widget(form.weeks) }}{% endif -%}
            {%- if with_days %}{{ form_widget(form.days) }}{% endif -%}
            {%- if with_hours %}{{ form_widget(form.hours) }}{% endif -%}
            {%- if with_minutes %}{{ form_widget(form.minutes) }}{% endif -%}
            {%- if with_seconds %}{{ form_widget(form.seconds) }}{% endif -%}
            {%- if with_invert %}{{ form_widget(form.invert) }}{% endif -%}
        </div>
    {%- endif -%}
{%- endblock dateinterval_widget -%}
 */

import Errors from '@components/form/errors';
import Input from '@components/form/widget/input';
import Label from '@components/form/label';
import Widget from '@components/form/widget';

import ContainerAttributes from '@components/form/attributes/container';

export default class DateInterval extends Component {
    render() {
        return this.props.vars.widget == 'single_text' 
            ? <Input {...this.props} />
            : <article {...ContainerAttributes.call(this)}>
                <Errors {...this.props} />
                <table className={table_class}>
                    <thead>
                        <tr>
                            { this.props.vars.with_years && <th><Label {...this.props.children.year}/></th> }
                            { this.props.vars.with_months && <th><Label {...this.props.children.month}/></th> }
                            { this.props.vars.with_weeks && <th><Label {...this.props.children.week}/></th> }
                            { this.props.vars.with_days && <th><Label {...this.props.children.day}/></th> }
                            { this.props.vars.with_hours && <th><Label {...this.props.children.hour}/></th> }
                            { this.props.vars.with_minutes && <th><Label {...this.props.children.minute}/></th> }
                            { this.props.vars.with_seconds && <th><Label {...this.props.children.second}/></th> }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            { this.props.vars.with_years && <th><Widget {...this.props.children.year}/></th> }
                            { this.props.vars.with_months && <th><Widget {...this.props.children.month}/></th> }
                            { this.props.vars.with_weeks && <th><Widget {...this.props.children.week}/></th> }
                            { this.props.vars.with_days && <th><Widget {...this.props.children.day}/></th> }
                            { this.props.vars.with_hours && <th><Widget {...this.props.children.hour}/></th> }
                            { this.props.vars.with_minutes && <th><Widget {...this.props.children.minute}/></th> }
                            { this.props.vars.with_seconds && <th><Widget {...this.props.children.second}/></th> }
                        </tr>
                    </tbody>
                </table>
                { this.props.vars.with_invert && (
                    <Widget {...this.props.children.invert} />
                )}
            </article>
    }
}