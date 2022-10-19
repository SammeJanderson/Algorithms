def isAlphanum(char: str) -> bool :
    return  (ord("A") <= ord(char) <= ord("Z") or
             ord("a") <= ord(char) <= ord("z") or
             ord("0") <= ord(char) <= ord("9")) 
 
def validPalidrome(s:str) -> bool:
    l, r = 0, len(s) - 1

    while l < r:
        while l < r and not isAlphanum(s[l]):
            l += 1
        while l < r and not isAlphanum(s[r]):
            r -= 1

        if s[l].lower() != s[r].lower():
            return False

        l += 1
        r -= 1

    return True
    


    
    


tests = [
    {"input": "A man, a plan, a canal: Panama", "expected": True},
    {"input": "race a car", "expected": False},
    {"input": " ", "expected": True},
]

for i, tt in enumerate(tests):
    res = validPalidrome(tt["input"])
    if tt["expected"] != res:
        print(f"test {i+1} FAILED. expected={tt['expected']}. got={res}")
        exit()


print("All Test Passed")
