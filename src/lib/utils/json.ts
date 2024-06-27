export function parseJsonToGeneric<T>(value: string): T | undefined {
    try {
        const jsonValue = JSON.parse(value) as T;
        return jsonValue;
    } catch (error) {
        console.log("Error parsing JSON content", error);
        return undefined;
    }
}