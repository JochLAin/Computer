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

import ContainerAttributes from '../../../utils/attributes/container';
import Errors from '../../../errors';
import Label from '../../../label';
import Widget, { get } from '../../../widget';

export default class DateInterval extends Component {
    render() {
        if (this.props.vars.widget == 'single_text') {
            const Input = get('text');
            return <Input {...this.props} />
        }

        console.log("date interval", this.props);

        return <article {...ContainerAttributes.call(this.props)}>
                <Errors {...this.props} />
                <table className={this.props.vars.table_class}>
                    <thead>
                        <tr>
                            { this.props.vars.with_years && <th><Label {...this.props.children.years}/></th> }
                            { this.props.vars.with_months && <th><Label {...this.props.children.months}/></th> }
                            { this.props.vars.with_weeks && <th><Label {...this.props.children.weeks}/></th> }
                            { this.props.vars.with_days && <th><Label {...this.props.children.days}/></th> }
                            { this.props.vars.with_hours && <th><Label {...this.props.children.hours}/></th> }
                            { this.props.vars.with_minutes && <th><Label {...this.props.children.minutes}/></th> }
                            { this.props.vars.with_seconds && <th><Label {...this.props.children.seconds}/></th> }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            { this.props.vars.with_years && <th><Widget {...this.props.children.years}/></th> }
                            { this.props.vars.with_months && <th><Widget {...this.props.children.months}/></th> }
                            { this.props.vars.with_weeks && <th><Widget {...this.props.children.weeks}/></th> }
                            { this.props.vars.with_days && <th><Widget {...this.props.children.days}/></th> }
                            { this.props.vars.with_hours && <th><Widget {...this.props.children.hours}/></th> }
                            { this.props.vars.with_minutes && <th><Widget {...this.props.children.minutes}/></th> }
                            { this.props.vars.with_seconds && <th><Widget {...this.props.children.seconds}/></th> }
                        </tr>
                    </tbody>
                </table>
                { this.props.vars.with_invert && (
                    <Widget {...this.props.children.invert} />
                )}
            </article>
    }
}