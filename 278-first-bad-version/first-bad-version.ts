/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let start = 0
        let end = n
        let firstBadVersion = 0

        while (start <= end) {
            const middle = Math.floor((start + end) / 2)
            if (isBadVersion(middle)) {
                end = middle - 1
                firstBadVersion = middle
            } else {
                start = middle + 1
            }
        }

        return firstBadVersion
    };
};