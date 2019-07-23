import { fixture, assert, aTimeout } from '@open-wc/testing';
import { a11ySuite } from '@advanced-rest-client/a11y-suite/index.js';
import '../bottom-sheet.js';

describe('<bottom-sheet>', function() {
  async function basicFixture() {
    return (await fixture(`<bottom-sheet></bottom-sheet>`));
  }

  async function openedFixture() {
    return (await fixture(`<bottom-sheet opened></bottom-sheet>`));
  }

  describe('Basics', () => {
    let sheet;

    it('is hidden', async () => {
      sheet = await basicFixture();
      assert.isFalse(sheet.opened, '`opened` is false');
    });

    it('is visible', async () => {
      sheet = await openedFixture();
      assert.isTrue(sheet.opened, '`opened` is true');
    });

    it('show() will open bottom-sheet', async () => {
      sheet = await basicFixture();
      sheet.open();
      assert.isTrue(sheet.opened, '`opened` is true');
    });

    it('hide() will close bottom-sheet', async () => {
      sheet = await openedFixture();
      sheet.close();
      assert.isFalse(sheet.opened, '`opened` is true');
    });

    it('bottom-sheet fires opened event', function(done) {
      openedFixture()
          .then((sheet) => {
            sheet.addEventListener('iron-overlay-opened', async () => {
              done();
            });
          });
    });

    it('there is only 1 bottom-sheet opened', async () => {
      const sheet1 = await basicFixture();
      const sheet2 = await openedFixture();
      sheet2.open();
      sheet1.open();
      assert.isTrue(sheet1.opened, 'sheet1 is opened');
      assert.isFalse(sheet2.opened, 'sheet2 is not opened');
      sheet2.open();
      assert.isFalse(sheet1.opened, 'sheet1 is now not opened');
      assert.isTrue(sheet2.opened, 'sheet2 is now opened');
    });

    it('scrollTarget returns the target', async () => {
      sheet = await basicFixture();
      await aTimeout();
      assert.ok(sheet.scrollTarget);
    });

    it('_renderOpened() adds bottom-sheet-open class', async () => {
      sheet = await basicFixture();
      sheet._renderOpened();
      assert.isTrue(sheet.classList.contains('bottom-sheet-open'));
    });

    it('_renderClosed() removes bottom-sheet-open class', async () => {
      sheet = await basicFixture();
      sheet.className = 'bottom-sheet-open';
      sheet._renderClosed();
      assert.isFalse(sheet.classList.contains('bottom-sheet-open'));
    });
  });

  describe('a11y', () => {
    it('Normal state', async () => {
      await a11ySuite('Normal state', `<bottom-sheet></bottom-sheet>`);
    });

    it('Opened state', async () => {
      await a11ySuite('Opened state', `<bottom-sheet opened></bottom-sheet>`);
    });

    it('With label', async () => {
      await a11ySuite('Opened state', `<bottom-sheet label="test"></bottom-sheet>`);
    });
  });
});
