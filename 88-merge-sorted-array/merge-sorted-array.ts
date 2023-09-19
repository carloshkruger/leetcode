/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = nums1.length - 1
  m--
  n--
  while (m >= 0 || n >= 0) {
    if ((m >= 0 && nums1[m] >= nums2[n]) || n < 0) {
      nums1[index] = nums1[m]
      m--
    } else {
      nums1[index] = nums2[n]
      n--
    }
    index--
  }
};