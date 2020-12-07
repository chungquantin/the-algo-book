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


def recursive_selection_sort(arr: list, length_to_sort: int = None):
    length = len(arr)
    if length_to_sort is None:
        length_to_sort = length
    if length_to_sort <= 1: return
    _first_index = length - length_to_sort
    _min_index = _first_index
    _min = arr[_min_index]
    for i in range(_min_index, length):
        if arr[i] < _min:
            _min = arr[i]
            _min_index = i
    # arr[_first_index], arr[_min_index] = arr[_min_index], arr[_first_index]
    recursive_selection_sort(arr, length_to_sort - 1)
