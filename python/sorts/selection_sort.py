def selection_sort(arr: list):
    length = len(arr)
    for i in range(length):
        _min_index = i
        _min = arr[_min_index]
        for j in range(i + 1, length):
            if arr[j] < _min:
                _min = arr[j]
                _min_index = j
        arr[i], arr[_min_index] = arr[_min_index], arr[i]