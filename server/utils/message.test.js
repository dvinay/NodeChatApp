const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('shout generate correct object message', () => {
    var from = 'test';
    var text = 'test text';
    var message = generateMessage(from,text);
    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
