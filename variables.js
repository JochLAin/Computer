'use strict';


export function set(vars) {
    return Object.assign({}, this.props, {
        props: Object.assign({}, this.props, {
            vars: Object.assign({}, this.props.vars, vars)
        })
    });
}
