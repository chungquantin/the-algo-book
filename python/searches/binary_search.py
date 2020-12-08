def binary_search(a: list, x):
    l = 0
    r = len(a) - 1
    while l <= r:
        mid = l + (r - l) // 2
        if x == a[mid]:
            return mid
        if x > a[mid]:
            l = mid + 1
            continue
        r = mid - 1
    return -1
