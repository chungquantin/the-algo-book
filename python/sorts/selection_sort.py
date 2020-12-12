def selection_sort(a: list):
    n = len(a)
    for i in range(n):
        _min = i
        for j in range(i + 1, n):
            if a[j] < a[_min]:
                _min = j
        a[i], a[_min] = a[_min], a[i]


def double_selection_sort(a: list):
    n = len(a)
    for i in range(n//2):
        _min = i
        _max = n - i - 1
        for j in range(i + 1, n - i):
            if a[j] < a[_min]:
                _min = j
                continue
            if a[j] > a[_max]:
                _max = j
                continue
        a[i], a[_min] = a[_min], a[i]
        a[n - i - 1], a[_max] = a[_max], a[n - i - 1]
