
// 自定义图形块
//
// % weight=100 color=#0fbc11 icon=""
//
namespace custom_test {
    /**
     * TODO: 在此处描述您的函数
     * @param n 在此处描述参数, eg: 5
     * @param s 在此处描述参数, eg: "Hello"
     * @param e 在此处描述参数
     */
    //% block
    export function test_foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: 在此处描述您的函数
     * @param value 在此处描述”值“, eg: 5
     */
    //% block
    export function test_fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
