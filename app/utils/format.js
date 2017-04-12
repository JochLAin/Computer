'use strict';

export const formatLabel = function () {
    return this.props.vars.label_format
        .replace('%name%', name)
        .replace('%id%', id)
}