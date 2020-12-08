def selection_sort(a: list):
    n = len(a)
    for i in range(n):
        _min_index = i
        _min = a[_min_index]
        for j in range(i + 1, n):
            if a[j] < _min:
                _min = a[j]
                _min_index = j
        a[i], a[_min_index] = a[_min_index], a[i]