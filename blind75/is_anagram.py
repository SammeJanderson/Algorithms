def generateCharMap(s:str) -> dict:
    res = {}
    for char in s:
        if char in res:
            res[char] += 1
        else:
            res[char] = 1

    return res
        


def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t): return False

    sMap = generateCharMap(s)
    tMap = generateCharMap(t)

    for n in sMap:
        try:
            if sMap[n] == tMap[n]:
                continue
        except:
            return False

    return True

        

tests = [
    {"s": "anagram", "t": "nagaram", "exp": True},
    {"s": "rat", "t": "cat", "exp": False},
    {"s": "samme", "t": "emmas", "exp": True},
]


for i, tt in enumerate(tests):
    result = isAnagram(tt["s"], tt["t"])
    if tt["exp"] != result:
        print(f"test {i + 1} failed expected {tt['exp']}. got={result}")
        exit()
print("ALL PASSED")

