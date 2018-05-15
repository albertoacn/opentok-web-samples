const app = require('../../js/app.js');

describe('Basic Video Chat Tests', () => {
  it('initializes session', () => {
    expect(app.initializeSession.bind(null)).not.toThrow();
  });

  it('handles error', () => {
    expect(app.handleError.bind(null, {error: "error"})).not.toThrow();
  });
});
