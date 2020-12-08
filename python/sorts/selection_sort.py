def selection_sort(arr: list):
    n = len(arr)
    for i in range(n):
        _min_index = i
        _min = arr[_min_index]
        for j in range(i + 1, n):
            if arr[j] < _min:
                _min = arr[j]
                _min_index = j
        arr[i], arr[_min_index] = arr[_min_index], arr[i]