'use strict';

import React, { Component } from 'react';

/**
{%- block form_start -%}
    {% set method = method|upper %}
    {%- if method in ["GET", "POST"] -%}
        {% set form_method = method %}
    {%- else -%}
        {% set form_method = "POST" %}
    {%- endif -%}
    <form name="{{ name }}" method="{{ form_method|lower }}"{% if action != '' %} action="{{ action }}"{% endif %}{% for attrname, attrvalue in attr %} {{ attrname }}="{{ attrvalue }}"{% endfor %}{% if multipart %} enctype="multipart/form-data"{% endif %}>
    {%- if form_method != method -%}
        <input type="hidden" name="_method" value="{{ method }}" />
    {%- endif -%}
{%- endblock form_start -%}

{%- block form_end -%}
    {%- if not render_rest is defined or render_rest -%}
        {{ form_rest(form) }}
    {%- endif -%}
    </form>
{%- endblock form_end -%}
 */

import Attributes from './attributes';
import Rest from './rest';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { action } = this.props.vars;
        let method = this.props.vars.method.toUpperCase();
        let form_method = 'POST';
        if(['GET', 'POST'].indexOf(method) != -1) form_method = method;

        return <form method={method} action={action} {...Attributes.call(this.props)} encType={this.props.vars.multipart && 'multipart/form-data'}>
            { form_method != method && (
                <input type="hidden" name="_method" value={method} />
            )}
            <Rest {...this.props} rendered={this.state.rendered} />
        </form>
    }
}

export { default as Attributes } from './attributes';
export { default as ButtonAttributes } from './attributes/button';
export { default as ContainerAttributes } from './attributes/container';
export { default as WidgetAttributes } from './attributes/widget';

export { default as Label } from './label';
export { default as ButtonLabel } from './label/button';
export { default as ButtonRow } from './row/button';
export { default as HiddenRow } from './row/hidden';
export { default as RepeatedRow } from './row/repeated';
export { default as Rest } from './rest';
export { default as Row } from './row';
export { default as Rows } from './rows';
export { default as Errors } from './errors';
export { default as Widget } from './widget';

export { default as Checkbox } from './widget/checkbox';
export { default as Choice } from './widget/choice';
export { default as Collapsed } from './widget/choice/collapsed';
export { default as Collection } from './widget/collection';
export { default as Compound } from './widget/compound';
export { default as Button } from './widget/button';
export { default as Date } from './widget/input/date';
export { default as DateTime } from './widget/input/datetime';
export { default as DateInterval } from './widget/input/dateinterval';
export { default as Email } from './widget/input/email';
export { default as Expanded } from './widget/choice/expanded';
export { default as File } from './widget/file';
export { default as Hidden } from './widget/input/hidden';
export { default as Input } from './widget/input';
export { default as Integer } from './widget/input/integer';
export { default as Money } from './widget/input/money';
export { default as Number } from './widget/input/number';
export { default as Password } from './widget/input/password';
export { default as Percent } from './widget/input/percent';
export { default as Radio } from './widget/radio';
export { default as Range } from './widget/input/range';
export { default as Repeated } from '../widget/row/repeated';
export { default as Reset } from './widget/button/reset';
export { default as Search } from './widget/input/search';
export { default as Submit } from './widget/button/submit';
export { default as Textarea } from './widget/textarea';
export { default as Time } from './widget/input/time';
export { default as Url } from './widget/input/url';