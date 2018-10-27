
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
    let firstValue = 1;
    let secondValue = 1;

    yield firstValue;
    yield secondValue;

    while (true) {
        let nextValue = firstValue + secondValue;

        firstValue = secondValue;
        secondValue = nextValue;

        yield nextValue;
    }
}
