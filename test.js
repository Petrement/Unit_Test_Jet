test("One euro should be 1.206 dollars", function (){
    const { fromEuroToDollar } = require ('./app.js')

    expect(fromEuroToDollar(3.5)).toBe(4.2);
})