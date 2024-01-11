
export type Stuff = {
    foo: string;
    bar: number;
}

export function transformStuff(stuff: Stuff): string {
    return JSON.stringify(stuff);
}
