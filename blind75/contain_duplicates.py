testcases = [
    [1, 2, 3, 1],
    [1, 2, 3, 4, 5]
]


def contain_duplicates(A):
    """
    pass for each element once, check against a cache if the element was seen before
    Time:  O(n)
    Space: O(n)
    """
    cache = set()
    for n in A:
        if n in cache:
            return True
        cache.add(n)
    return False

def contain_duplicates(A):
    """
    Time: O(n)
    Space: O(n)
    """
    return len(A) != len(set(A))
