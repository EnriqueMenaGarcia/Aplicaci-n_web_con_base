const calculator = require(".")

test('sum calculator',()=>{ 
   const result = calculator.sum(1,2);
   expect(result).toBe(3);
})
