function maxSubArray(nums: number[]): number {
   let currentSum = 0
   let largestSum = Number.NEGATIVE_INFINITY

   for (const num of nums) {
       currentSum = Math.max(currentSum + num, num)
       largestSum = Math.max(largestSum, currentSum)
   }

   return largestSum
};