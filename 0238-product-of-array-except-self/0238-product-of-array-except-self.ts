function productExceptSelf(nums: number[]): number[] {
    const answer = []
    let prefix = 1
    let postfix = 1
    
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix
        prefix *= nums[i]
    }
        
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i+1]
        answer[i] *= postfix
    }
    
    return answer
};