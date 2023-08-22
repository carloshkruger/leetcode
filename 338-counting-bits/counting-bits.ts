function countBits(n: number): number[] {
    const bitCounts = new Array(n + 1).fill(0);

    for (let i = 0; i < n + 1; i++) {
        bitCounts[i] = bitCounts[i >> 1] + (i & 1);
    }

    return bitCounts;
};