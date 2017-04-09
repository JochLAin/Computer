# Computer
React Theme for Symfony FormView

## How to use ?

### Controller Symfony:
```php
class ThisController extends Controller {
    public function thisAction(Request $request) {
        $form = $this->createForm();
        return $this->render('Front/index.html.twig', [
            // 512 => JSON_PARTIAL_OUTPUT_ON_ERROR
            // For errors and very depth informations
            'form' => json_encode($form->createView(), 512)
        ]);
    }
}
```

### TWIG:
```html
<div id="root"></div>
<script type="text/javascript">
    window.__initialState__ = {{ form|raw }}
</script>
<script type="text/javascript" src="this.js"></script>
```

### Javascript:
```javascript
'use strict';

import React from 'react';
import Formulaire from 'app/index.jsx';
import { render } from 'react-render';

render(
    <Formulaire {...window.initialState} />,
    document.getElementById('root')
);
```