[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/bottom-sheet.svg)](https://www.npmjs.com/package/@advanced-rest-client/bottom-sheet)

[![Build Status](https://travis-ci.org/advanced-rest-client/bottom-sheet.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/bottom-sheet)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/bottom-sheet)


# &lt;bottom-sheet&gt;

Bottom sheets slide up from the bottom of the screen to reveal more content.

## Example:

```html
<bottom-sheet no-padding>
  <paper-item>Action #1</paper-item>
  <paper-item>Action #2</paper-item>
  <paper-item>Action #3</paper-item>
</bottom-sheet>
```

## API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

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
    <bottom-sheet></bottom-sheet>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@advanced-rest-client/bottom-sheet/bottom-sheet.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <bottom-sheet></bottom-sheet>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/bottom-sheet
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
