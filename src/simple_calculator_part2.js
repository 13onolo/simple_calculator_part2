module.export = class calculator{
    constructor(){
        this.slots = []
        this.Last = 0
    }

    add(){
        this.sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            this.sum += arguments[i]
        }
        
        this.Last = this.sum
        return this.sum
    }

    multiply(){

        this.product = 1

        for (var i = 0; i < arguments.length; i++) {
            this.product *= arguments[i]
        }
    
        this.Last = this.product
        return this.product
    }

    last(){
    
        return this.Last
    }

    set_slot(Slot){
   
        this.slots[Slot] = this.last()
        return this.slots[Slot]
    }

    get_slot(_Slot){
    
        return this.slots[_Slot]
    }
}

