// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { rockPaperScissors } from './utils.js'
import { computersPick } from '../utils.js'

const test = QUnit.test;

test('should return rock paper or scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = computersPick();
    const options = ['rock', 'paper', 'scissors'];
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});
