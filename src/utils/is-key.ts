export function isKey<A extends string>(str: string, array: Readonly<Array<A>>): str is A {
    return array.includes(str as A);
}