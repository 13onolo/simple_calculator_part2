const calc = require('../src/simple_calculator_part2') ;
let calculator = new calc.calculator()

describe("add_numbers ", function(){

    it("should add two nubers and return the sum.", function(){
        expect(calculator.add(0,0)).toBe(0)
    })
    
    it("should add two negative numbers and return the sum.", function(){
        expect(calculator.add(-1, -1)).toBe(-2)
    })
    
       it("adds any count of numbers and returns the sum.", function(){
    
        expect(calculator.add(1, 2, 3, 4)).toBe(10)
    
    })

    it("allows last() as a parameter and do addition using it", function(){
        
        calculator.add(1,2)
        
        expect(calculator.add(calculator.last(), 5)).toBe(8)
    
    })
})

describe("function multiply.", function(){

    it("returns product of two umbers.", function(){
        expect(calculator.multiply(1, 2)).toBe(2)
    })

    it("returns product of n umbers.", function () {
        expect(calculator.multiply(1, 2, 3, 4)).toBe(24)
    })

    it("allows last() as a parameter and do some multiplication using it", function(){
        
        calculator.multiply(1, 2, 3, 4)

        expect(calculator.multiply(calculator.last(), 5)).toBe(120)
    
    })

})

describe("function last.", function(){
    
    it("returns the preveous result for add",function(){

        calculator.add(1, 2)
        
        expect(calculator.last()).toBe(3)
    
    })

    it("returns the preveous result for add",function(){
        
        calculator.add(100,200)
        
        expect(calculator.last()).toBe(300)
    })

})

describe("function set_slot.", function(){

    it("takes one argument called slot member and ", function(){

        expect().toBe()

    })

    it("allows a slot array instance as a variable and add to another number" , function(){

        expect(calculator.add(calculator.slots[1], 5)).toBe(8)    
    
    })
})

describe("function get_slot.", function(){

    calculator.add(1,2)
    calculator.set_slot(1)

    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(calculator.get_slot(1)).toBe(3)
    })

    calculator.add(10,20)
    calculator.set_slot(2)
    
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(calculator.get_slot(2)).toBe(30)
    })

    it("does not affect last", function(){
        expect(calculator.add(100, 200)).toBe(300)
    })
        
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(calculator.get_slot(1)).toBe(3)   
        expect(calculator.get_slot(2)).toBe(30)
    })

    it("does not affect last", function(){
        expect(calculator.add(100, 200)).toBe(300)
    })
})