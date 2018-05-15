/* global browser describe it beforeAll $ */

const assert = require('assert');
const http = require('http');

describe('Basic Video Chat Test', () => {
  beforeAll(() => {
    browser.url('Basic Video Chat/index.html');
  });

  afterAll(() => {
    const coverage = browser.execute(() => {
      return window.__coverage__;
    });
    var str = JSON.stringify(coverage.value);
    var options = {
      port: 8082,
      host: "localhost",
      path: "/coverage/client",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    };
    var req = http.request(options, res => {
      console.log("\nFinished sending coverage data.");
      let data = '';
      res.on('data', d => {
        data += d;
      });
      res.once('end', function () {
        console.log('\nFinished sending coverage data => response => ', data);
      });
    });
    req.write(str);
    req.end();
  });
  describe('one window', () => {
    it('should have the right title', () => {
      const title = browser.getTitle();
      assert.equal(title, 'OpenTok Getting Started');
    });

    it('The publisher should load', () => {
      const publisher = $('div.OT_publisher:not(.OT_loading) .OT_video-element');
      publisher.waitForExist(15000);
      browser.pause(2000);
    });
  });

  describe('2 windows', () => {
    let firstTabId;
    let secondTabId;

    beforeAll(() => {
      [firstTabId] = browser.getTabIds();
      browser.newWindow('.');
      secondTabId = browser.getTabIds().find(tabId => tabId !== firstTabId);
      browser.switchTab(secondTabId);
    });

    it('The subscriber should load if you open a new window', () => {
      const subscriber = $('div.OT_subscriber:not(.OT_loading) .OT_video-element');
      subscriber.waitForExist(15000);
      browser.switchTab();
      const subscriber2 = $('div.OT_subscriber:not(.OT_loading) .OT_video-element');
      subscriber2.waitForExist(15000);
    });
  });
});
