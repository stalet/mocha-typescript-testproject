
export type stuff = {
    foo: string;
    bar: number;
}

export function transformStuff(stuff: stuff): string {
    return JSON.stringify(stuff);
}
