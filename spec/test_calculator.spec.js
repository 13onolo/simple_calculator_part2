const calc = require('../src/simple_calculator_part2') ;
let mycalculator = new calc()

describe("add_numbers ", function(){

    it("should add two nubers and return the sum.", function(){
        expect(mycalculator.add(0,0)).toBe(0)
    })
    
    it("should add two negative numbers and return the sum.", function(){
        expect(mycalculator.add(-1, -1)).toBe(-2)
    })
    
       it("adds any count of numbers and returns the sum.", function(){
    
        expect(mycalculator.add(1, 2, 3, 4)).toBe(10)
    
    })

    it("allows last() as a parameter and do addition using it", function(){
        
        mycalculator.add(1,2)
        
        expect(mycalculator.add(mycalculator.last(), 5)).toBe(8)
    
    })
})

describe("function multiply.", function(){

    it("returns product of two umbers.", function(){
        expect(mycalculator.multiply(1, 2)).toBe(2)
    })

    it("returns product of n umbers.", function () {
        expect(mycalculator.multiply(1, 2, 3, 4)).toBe(24)
    })

    it("allows last() as a parameter and do some multiplication using it", function(){
        
        mycalculator.multiply(1, 2, 3, 4)

        expect(mycalculator.multiply(mycalculator.last(), 5)).toBe(120)
    
    })

})

describe("function last.", function(){
    
    it("returns the preveous result for add",function(){

        mycalculator.add(1, 2)
        
        expect(mycalculator.last()).toBe(3)
    
    })

    it("returns the preveous result for add",function(){
        
        mycalculator.add(100,200)
        
        expect(mycalculator.last()).toBe(300)
    })

})

describe("function set_slot.", function(){

    it("takes one argument called slot member and ", function(){

        expect().toBe()

    })

    it("allows a slot array instance as a variable and add to another number" , function(){

        expect(mycalculator.add(mycalculator.slots[1], 5)).toBe(8)    
    
    })
})

describe("function get_slot.", function(){

    mycalculator.add(1,2)
    mycalculator.set_slot(1)

    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(mycalculator.get_slot(1)).toBe(3)
    })

    mycalculator.add(10,20)
    mycalculator.set_slot(2)
    
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(mycalculator.get_slot(2)).toBe(30)
    })

    it("does not affect last", function(){
        expect(mycalculator.add(100, 200)).toBe(300)
    })
        
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(mycalculator.get_slot(1)).toBe(3)   
        expect(mycalculator.get_slot(2)).toBe(30)
    })

    it("does not affect last", function(){
        expect(mycalculator.add(100, 200)).toBe(300)
    })
})