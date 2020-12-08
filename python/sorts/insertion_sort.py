def insertion_sort(a: list):
    n = len(a)
    for i in range(1, n):
        j = i
        while a[j] < a[j - 1] and j > 0:
            a[j], a[j - 1] = a[j - 1], a[j]
            j -= 1
