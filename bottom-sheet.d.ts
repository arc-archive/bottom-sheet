/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   bottom-sheet.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

import {ArcOverlayMixin} from '@advanced-rest-client/arc-overlay-mixin/arc-overlay-mixin.js';

import {IronA11yAnnouncer} from '@polymer/iron-a11y-announcer/iron-a11y-announcer.js';

declare namespace UiElements {

  /**
   * Material design: [Bottom sheets](https://material.google.com/components/bottom-sheets.html#)
   *
   * # `<bottom-sheet>`
   *
   * Bottom sheets slide up from the bottom of the screen to reveal more content.
   *
   * ### Example
   *
   * ```html
   * <bottom-sheet>
   *    <paper-icon-item>
   *      <iron-icon src="inbox.png" item-icon></iron-icon>
   *      Inbox
   *    </paper-icon-item>
   *    <paper-icon-item>
   *      <iron-icon src="keep.png" item-icon></iron-icon>
   *      Keep
   *    </paper-icon-item>
   *    <paper-icon-item>
   *      <iron-icon src="hangouts.png" item-icon></iron-icon>
   *      Hangouts
   *    </paper-icon-item>
   *  </bottom-sheet>
   * ```
   *
   * ### Positioning
   *
   * Use the `fit-bottom` class to position the bar at the bottom of the app and with full width;
   *
   * Use `center-bottom` class to display the bar at the bottom centered on a page.
   *
   * ### Styling
   *
   * `<bottom-sheet>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--bottom-sheet-background-color` | The bottom-sheet background-color | `#fff`
   * `--bottom-sheet-color` | The bottom-sheet color | `#323232`
   * `--bottom-sheet-max-width` | Max width of the element | ``
   * `--bottom-sheet-max-height` | Max heigth of the element | ``
   * `--bottom-sheet-label-color` | Color of the label | `rgba(0, 0, 0, 0.54)`
   * `--bottom-sheet-box-shadow` | Box shaddow property of the element | `0 2px 5px 0 rgba(0, 0, 0, 0.26)`
   */
  class BottomSheet {

    /**
     * The element to fit `this` into.
     */
    fitInto: Element|null;

    /**
     * Returns the scrolling element.
     *    
     */
    readonly scrollTarget: any;

    /**
     * The label of the bottom sheet.
     */
    label: string|null|undefined;

    /**
     * Size target for this element.
     */
    sizingTarget: Element|null;

    /**
     * If set the padding won't be added to the scrollable element.
     */
    noPadding: boolean|null|undefined;
    render(): any;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    _openedChanged(opened: any): void;

    /**
     * Overridden from `ArcOverlayMixin`.
     */
    _renderOpened(): void;

    /**
     * Overridden from `ArcOverlayMixin`.
     */
    _renderClosed(): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "bottom-sheet": UiElements.BottomSheet;
  }
}
