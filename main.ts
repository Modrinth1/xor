namespace logic {
    /**
     * Returns the XOR of two boolean values
     * @param a first value
     * @param b second value
     */
    //% block="(%a) xor (%b)"
    //% group="Logic"
    export function xor(a: boolean, b: boolean): boolean {
        return (a && !b) || (!a && b)
    }
}
