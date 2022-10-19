from typing import List
import math

def modded_diff(a, b):
    return abs(a - b)


def two_sum(nums: List[int], target: int) -> List[int] :
    index_map = {}

    for i, n in  enumerate(nums):
        diff = target - n 
        if diff in index_map:
            return [index_map[diff], i]
        index_map[n] = i


tests = [
    {"nums": [2, 7, 11, 15], "target": 9, "expected": [0, 1]},
    {"nums": [3, 2, 4], "target": 6, "expected": [1, 2]},
    {"nums": [3, 3], "target": 6, "expected": [0, 1]}, 
]

for i, tt in enumerate(tests):
    res = two_sum(tt["nums"], tt["target"])
    if tt["expected"] != res:
        print(f"test {i+1} FAILED. expected={tt['expected']}. got={res}")
        exit()


print("All Test Passed")

