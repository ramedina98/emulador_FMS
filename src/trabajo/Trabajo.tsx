class Trabajo{
    private programmer: string; 
    private symbol: '+' | '-' | '*' | '/';
    private a?: number; 
    private b?: number;  

    constructor(programmer: string, symbol: '+' | '-' | '*' | '/', a?: number, b?: number) {
        this.programmer = programmer;
        this.symbol = symbol;
        this.a = a;
        this.b = b;
    }

    setA(a: number): void {
        this.a = a;
    }

    setB(b: number): void {
        this.b = b;
    }

    getProgramador(): string {
        return this.programmer;
    }

    getSimbolo(): '+' | '-' | '*' | '/' {
        return this.symbol;
    }

    getA(): number | undefined {
        return this.a;
    }

    getB(): number | undefined {
        return this.b;
    }

    // Method to solve the operation...
    resolveOperation(): number | undefined{
        if(this.a === undefined || this.b === undefined){
            // one of th two variables is empty, or perhaps both...
            return undefined;  
        }

        // check the symbol...
        switch(this.symbol){
            case '+': 
                return this.a + this.b; 
            
            case '-': 
                return this.a - this.b;

            case '*': 
                return this.a * this.b;

            case '/': 
                if(this.b === 0){
                    // can't divide by zero...
                    return undefined;
                }
                return this.a / this.b; 
            
            default: 
                // Unrecognized symbol...
                return undefined; 
        }
    }
}

export default Trabajo; 