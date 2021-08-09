{
    /*
    * JavaScript
    * Primitive: number, string, boolean, bignit, symbol, null, undefined
    * Object: function, array ....
    */ 
   
    // number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined
    let name: undefined; //  💩
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return 1;
    }

    // null
    let person: null; // 💩
    let person2: string | null;

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    
    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // 💩

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message); // 에러를 던지거나
        // while(true) { 계속 끝나지 않는 코드를 작성해야 함

        // }
    }
    let neverEnding: never; // 💩 

    // object
    let obj: object; // 💩  구체적으로 명시해서 작성하는 것이 좋음
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'ellie'});
    acceptSomeObject({ animal: 'doh'});
}
