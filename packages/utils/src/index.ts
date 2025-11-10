export const hello = (name: string) => `Hello, ${name}!`;

export function sleep(ms: number): Promise<void> {
    return new Promise((res) => setTimeout(res, ms));
}

// Money utilities
export * from './money';
