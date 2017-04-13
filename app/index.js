'use strict';

import Form from './components/form';
import { set as setWidgets } from './widget';
import { set as setLabels } from './label';
import { set as setRows } from './row';

export default Form;
export const set = (fields) => {
    if (!fields) return;

    if (fields.labels) setLabels(fields.labels);
    if (fields.rows) setRows(fields.rows);
    if (fields.widgets) setWidgets(fields.widgets);
};

export { default as Attributes, set as setAttr, get as getAttr } from './utils/attributes';
export { default as ButtonAttributes } from './utils/attributes/button';
export { default as ContainerAttributes } from './utils/attributes/container';
export { default as WidgetAttributes } from './utils/attributes/widget';
export { set as setVars } from './utils/variables';

export { default as BaseLabel } from './components/label';
export { default as ButtonLabel } from './components/label/button';

export { default as ButtonRow } from './components/row/button';
export { default as HiddenRow } from './components/row/hidden';
export { default as Repeated } from './components/row/repeated';

export { default as Checkbox } from './components/widget/input/checkbox';
export { default as Choice } from './components/widget/choice';
export { default as Collapsed } from './components/widget/choice/collapsed';
export { default as Collection } from './components/widget/collection';
export { default as Compound } from './components/widget/compound';
export { default as Button } from './components/widget/button';
export { default as Date } from './components/widget/input/date';
export { default as DateTime } from './components/widget/input/datetime';
export { default as DateInterval } from './components/widget/input/dateinterval';
export { default as Email } from './components/widget/input/email';
export { default as Expanded } from './components/widget/choice/expanded';
export { default as File } from './components/widget/input/file';
export { default as Hidden } from './components/widget/input/hidden';
export { default as Input } from './components/widget/input';
export { default as Integer } from './components/widget/input/integer';
export { default as Money } from './components/widget/input/money';
export { default as Number } from './components/widget/input/number';
export { default as Password } from './components/widget/input/password';
export { default as Percent } from './components/widget/input/percent';
export { default as Radio } from './components/widget/input/radio';
export { default as Range } from './components/widget/input/range';
export { default as Reset } from './components/widget/button/reset';
export { default as Search } from './components/widget/input/search';
export { default as Submit } from './components/widget/button/submit';
export { default as Textarea } from './components/widget/textarea';
export { default as Time } from './components/widget/input/time';
export { default as Url } from './components/widget/input/url';

export { default as Errors } from './errors';
export { default as Rows } from './components/rows';
export { default as Rest } from './components/rest';

export { default as Label, get as getLabel, set as setLabels } from './label';
export { default as Row, get as getRow, set as setRows } from './row';
export { default as Widget, get as getWidget, set as setWidgets } from './widget';