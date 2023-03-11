require('./helpers.js');

const sinon = require('sinon');

function addingEventListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', function() {
    // do something when the button is clicked
  });
}

describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  })

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
})