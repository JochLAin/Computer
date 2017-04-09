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

import { set } from '@components/form/variables';
import Checkbox from '@components/form/widget/checkbox';
import Choice from '@components/form/widget/choice';
import Collection from '@components/form/widget/collection';
import Compound from '@components/form/widget/compound';
import Button from '@components/form/widget/button';
import Date from '@components/form/widget/input/date';
import DateTime from '@components/form/widget/input/datetime';
import DateInterval from '@components/form/widget/input/dateinterval';
import Email from '@components/form/widget/input/email';
import File from '@components/form/widget/file';
import Hidden from '@components/form/widget/input/hidden';
import Input from '@components/form/widget/input';
import Integer from '@components/form/widget/input/integer';
import Money from '@components/form/widget/input/money';
import Number from '@components/form/widget/input/number';
import Password from '@components/form/widget/input/password';
import Percent from '@components/form/widget/input/percent';
import Radio from '@components/form/widget/radio';
import Range from '@components/form/widget/input/range';
import Repeated from '@components/form/row/repeated';
import Reset from '@components/form/widget/button/reset';
import Search from '@components/form/widget/input/search';
import Submit from '@components/form/widget/button/submit';
import Textarea from '@components/form/widget/textarea';
import Time from '@components/form/widget/input/time';
import Url from '@components/form/widget/input/url';

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