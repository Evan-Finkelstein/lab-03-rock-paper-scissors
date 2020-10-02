// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { rockPaperScissors } from './utils.js'
import { computersPick } from '../computers-pick.js';
import { rockPaperScissors } from '../utils.js';

const test = QUnit.test;



test('should return lossss', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = computersPick();
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});

test('if userthrow equals thrown value, the result should return draw', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    
    //Act 
    // Call the function you're testing and set the result to a const
    const userThrow = 'rock';
    const computer = 'rock';
    
    const expected = 'draw';
    const actual = rockPaperScissors(userThrow, computer);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});
