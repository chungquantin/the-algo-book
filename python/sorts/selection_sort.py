def selection_sort(a: list):
    n = len(a)
    for i in range(n):
        _min = i
        for j in range(i + 1, n):
            if a[j] < a[_min]:
                _min = j
        a[i], a[_min] = a[_min], a[i]