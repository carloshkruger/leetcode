function productExceptSelf(nums: number[]): number[] {
    const map1 = new Map()
    const map2 = new Map()
    
    map1.set(0, nums[0])
    map2.set(nums.length-1, nums.at(-1))
    
    let end = nums.length - 2
    for (let start = 1; start < nums.length; start++) {
        map1.set(start, map1.get(start-1) * nums[start])
        map2.set(end, map2.get(end+1) * nums[end])
        end--
    }
    
    const answer = []
    
    for (let i = 0; i < nums.length; i++) {
        answer.push((map1.get(i-1) ?? 1) * (map2.get(i+1) ?? 1))
    }
    
    return answer
};