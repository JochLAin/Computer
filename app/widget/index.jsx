'use strict';

import React, { Component } from 'react';

/**
{%- block form_widget -%}
    {% if compound %}
        {{- block('form_widget_compound') -}}
    {% else %}
        {{- block('form_widget_simple') -}}
    {% endif %}
{%- endblock form_widget -%}
 */

import { set } from '../variables';
import Checkbox from './checkbox';
import Choice from './choice';
import Collection from './collection';
import Compound from './compound';
import Button from './button';
import Date from './input/date';
import DateTime from './input/datetime';
import DateInterval from './input/dateinterval';
import Email from './input/email';
import File from './file';
import Hidden from './input/hidden';
import Input from './input';
import Integer from './input/integer';
import Money from './input/money';
import Number from './input/number';
import Password from './input/password';
import Percent from './input/percent';
import Radio from './radio';
import Range from './input/range';
import Repeated from '../row/repeated';
import Reset from './button/reset';
import Search from './input/search';
import Submit from './button/submit';
import Textarea from './textarea';
import Time from './input/time';
import Url from './input/url';

export default class Widget extends Component {
    render() {
        if (this.props.vars.compound) return <Compound {...this.props} />
        const prefixes = this.props.vars.block_prefixes;
        switch (prefixes[1]) {
            case 'checkbox':
                switch (prefixes[2]) {
                    case 'radio': return <Radio {...this.props} />
                    default: return <Checkbox {...this.props} />
                }
            case 'collection': return <Collection {...this.props} />
            case 'date': return <Date {...this.props} />
            case 'datetime': return <DateTime {...this.props} />
            case 'dateinterval': return <DateInterval {...this.props} />
            case 'hidden': return <Hidden {...this.props} />
            case 'file': return <File {...this.props} />
            case 'time': return <Time {...this.props} />
            case 'choice': return <Choice {...this.props} />
            case 'integer': return <Integer {...this.props} />
            case 'money': return <Money {...this.props} />
            case 'number': return <Number {...this.props} />
            case 'percent': return <Percent {...this.props} />
            case 'repeated': return <Repeated {...this.props} />
            case 'reset': return <Reset {...this.props} />
            case 'search': return <Search {...this.props} />
            case 'submit': return <Submit {...this.props} />
            case 'text': 
                switch (prefixes[2]) {
                    case 'email': return <Email {...this.props} />
                    case 'password': return <Password {...this.props} />
                    case 'range': return <Range {...this.props} />
                    case 'search': return <Search {...this.props} />
                    case 'textarea': return <Textarea {...this.props} />
                    case 'url': return <Url {...this.props} />
                    default: return <Input {...this.props} />
                }
            default: return <Button {...this.props} />
        }
    }
}