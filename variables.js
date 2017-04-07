'use strict';

export function set(vars) {
    return Object.assign({}, this, {
        vars: Object.assign({}, this.vars, vars)
    });
}
