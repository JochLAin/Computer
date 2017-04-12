'use strict';

export function set(vars) {
    return Object.assign({}, this, {
        vars: Object.assign({}, this.vars, vars)
    });
}

export function getType() {
    if (this.vars.block_prefixes[1] == 'checkbox') {
        if (this.vars.block_prefixes[2] == 'radio') return 'radio';
    } else if (this.vars.block_prefixes[1] == 'text') {
        switch (this.vars.block_prefixes[2]) {
            case 'email': return 'email';
            case 'password': return 'password';
            case 'range': return 'range';
            case 'search': return 'search';
            case 'textarea': return 'textarea';
            case 'url': return 'url';
        }
    }
    return this.vars.block_prefixes[1] || 'button';
}