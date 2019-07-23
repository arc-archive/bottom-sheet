import { html, render } from 'lit-html';
import '@advanced-rest-client/arc-demo-helper/arc-demo-helper.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '../bottom-sheet.js';

class DemoPage {
  constructor() {
    this._open = this._open.bind(this);
    this._toggleTheme = this._toggleTheme.bind(this);
    this._toggleStyles = this._toggleStyles.bind(this);
  }

  _open(e) {
    e.target.previousElementSibling.opened = true;
  }

  _toggleTheme(e) {
    if (e.target.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  _toggleStyles(e) {
    if (e.target.checked) {
      document.body.classList.add('styled');
    } else {
      document.body.classList.remove('styled');
    }
  }

  render() {
    render(html`<div class="vertical-section-container centered">
      <h3>The bottom-sheet</h3>
      <bottom-sheet nopadding>
        <paper-item>Action #1</paper-item>
        <paper-item>Action #2</paper-item>
        <paper-item>Action #3</paper-item>
      </bottom-sheet>
      <paper-button raised @click="${this._open}">Open menu</paper-button>

      <h3>Open with ...</h3>
      <bottom-sheet class="center-bottom" label="Open with ..." nopadding>
        <paper-icon-item>
          <iron-icon src="inbox.png" slot="item-icon"></iron-icon>
          Inbox
        </paper-icon-item>
        <paper-icon-item>
          <iron-icon src="keep.png" slot="item-icon"></iron-icon>
          Keep
        </paper-icon-item>
        <paper-icon-item>
          <iron-icon src="hangouts.png" slot="item-icon"></iron-icon>
          Hangouts
        </paper-icon-item>
        <paper-icon-item>
          <iron-icon src="messenger.png" slot="item-icon"></iron-icon>
          Messenger
        </paper-icon-item>
        <paper-icon-item>
          <iron-icon src="gplus.png" slot="item-icon"></iron-icon>
          Google+
        </paper-icon-item>
      </bottom-sheet>
      <paper-button raised @click="${this._open}">Open with ...</paper-button>

      <h3>Scrollable content</h3>
      <bottom-sheet class="center-bottom" label="Images (might take time to load)">
        <img src="http://loremflickr.com/400/400/?random=0">
        <img src="http://loremflickr.com/400/400/?random=1">
        <img src="http://loremflickr.com/400/400/?random=2">
        <img src="http://loremflickr.com/400/400/?random=3">
        <img src="http://loremflickr.com/400/400/?random=4">
        <img src="http://loremflickr.com/400/400/?random=5">
        <img src="http://loremflickr.com/400/400/?random=6">
        <img src="http://loremflickr.com/400/400/?random=7">
        <img src="http://loremflickr.com/400/400/?random=8">
        <img src="http://loremflickr.com/400/400/?random=9">
      </bottom-sheet>
      <paper-button raised @click="${this._open}">Open</paper-button>
    </div>

    <div class="centered actions card">
      <h2>Options</h2>
      <paper-toggle-button @checked-changed="${this._toggleTheme}">Toggle dark theme</paper-toggle-button>
      <paper-toggle-button @checked-changed="${this._toggleStyles}" checked>Toggle styles</paper-toggle-button>
    </div>
    `, document.querySelector('#demo'));
  }
}
const instance = new DemoPage();
instance.render();
window._demo = instance;
