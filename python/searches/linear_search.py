def linear_search(a: list, x):
    n = len(a)
    for i in range(n):
        if a[i] == x:
            return i
    return -1
