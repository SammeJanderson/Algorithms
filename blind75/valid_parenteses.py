
pairs = {
    "{": "}",
    "(": ")",
    "[": "]"
}



def valid_parenteses(input: str) -> bool:
    stack = []
    for n in input:
        if n in pairs:
            stack.append(pairs[n])
        else:
            if len(stack) == 0: return False
            next = stack.pop()
            if n != next:
                return False
            


    return True

tests = [
    {"input": "()", "expected":True},
    {"input": "()[]{}", "expected":True},
    {"input": "(]", "expected": False},
    {"input": ")", "expected": False},
    {"input": " ", "expected": False},
    {"input": "({{[]}})", "expected": True},
]

for i, tt in enumerate(tests):
    input, expected = tt["input"], tt["expected"]
    res = valid_parenteses(input)
    if res != expected:
        print(f"test {i +1} failed. got={res}. want={expected}")
    else:
        print("test {i+1} passed")

