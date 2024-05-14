// const assert=require('assert')
// const { describe, before, after, beforeEach, it } = require('mocha')
// // describe method is a block of grouped test suites (test cases 
// // that intended to test software behaviour )
// describe('simple calculation',()=>{
//     before(()=>{
//         console.log('this part executes once before all test ');
//     })
//     after(()=>{
//         console.log('this part executes once after all test ');
//     })

//     describe('test1',()=>{
//         beforeEach(()=>{
//             console.log('executes  before every test ');
//         })
//         // it() method is the smallest test case that it is to executed
//         it('is returing 4 when adding 2+2',()=>{
//             assert.equal(2+2,4)
//         })
//     })
// })