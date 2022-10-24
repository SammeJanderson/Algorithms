# leetcode 704

def binary_search(nums, target):
    l, r = 0, len(nums) - 1

    while l <= r:
        middlePoint = (l + r)  // 2
        if nums[middlePoint] > target:
            r = middlePoint - 1
        elif nums[middlePoint] < target:
            l = middlePoint + 1
        else:
            return middlePoint
    
    return -1


tests = [
    {"input": ([-1, 0, 3, 5, 9, 12], 9), "expected": 4},
    {"input": ([-1, 0, 3, 5, 9, 12], 2), "expected": -1}
]

for i, tt in enumerate(tests):
    input, expected = tt["input"], tt["expected"]
    res = binary_search(*input)
    if res != expected:
        print(f"test {i +1} failed. got={res}. want={expected}")
    else:
        print("test {i+1} passed")
