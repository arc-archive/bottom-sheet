[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/bottom-sheet.svg)](https://www.npmjs.com/package/@advanced-rest-client/bottom-sheet)

[![Build Status](https://travis-ci.com/advanced-rest-client/bottom-sheet.svg)](https://travis-ci.com/advanced-rest-client/bottom-sheet)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/bottom-sheet)


# &lt;bottom-sheet&gt;

Bottom sheets slide up from the bottom of the screen to reveal more content.

## Example:

```html
<bottom-sheet nopadding>
  <paper-item>Action #1</paper-item>
  <paper-item>Action #2</paper-item>
  <paper-item>Action #3</paper-item>
</bottom-sheet>
```

## Usage

### Installation
```
npm install --save @advanced-rest-client/bottom-sheet
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import './node_modules/@advanced-rest-client/bottom-sheet/bottom-sheet.js';
    </script>
  </head>
  <body>
    <bottom-sheet>
      <paper-item>Action #1</paper-item>
      <paper-item>Action #2</paper-item>
      <paper-item>Action #3</paper-item>
    </bottom-sheet>
    <paper-button>Open menu</paper-button>
    <script>
    {
      document.querySelector('paper-button').addEventListener('click', () => {
        document.querySelector('bottom-sheet').opened = true;
      });
    }
    </script>
  </body>
</html>
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@advanced-rest-client/bottom-sheet/bottom-sheet.js';

class SampleElement extends LitElement {
  static get properties() {
    return {
      menuOpened: { type: Boolean }
    }
  }
  render() {
    return html`
    <bottom-sheet .opened="${this.menuOpened}">
      <paper-item>Action #1</paper-item>
      <paper-item>Action #2</paper-item>
      <paper-item>Action #3</paper-item>
    </bottom-sheet>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@advanced-rest-client/bottom-sheet/bottom-sheet.js';

class SampleElement extends PolymerElement {
  static get properties() {
    return {
      menuOpened: { type: Boolean, value: false }
    }
  }
  static get template() {
    return html`
    <bottom-sheet opened?="{{menuOpened}}">
      <paper-item>Action #1</paper-item>
      <paper-item>Action #2</paper-item>
      <paper-item>Action #3</paper-item>
    </bottom-sheet>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/bottom-sheet
cd bottom-sheet
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
polymer test
```
