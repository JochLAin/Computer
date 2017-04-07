'use strict';

import React, { Component } from 'react';

/**
{%- block repeated_row -%}
    {#
    No need to render the errors here, as all errors are mapped
    to the first child (see RepeatedTypeValidatorExtension).
    #}
    {{- block('form_rows') -}}
{%- endblock repeated_row -%}
 */

import Rows from '@components/form/rows';

export default class RepeatedRow extends Component {
    render() {
        return <Rows {...this.props} />
    }
}