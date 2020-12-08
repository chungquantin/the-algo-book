def counting_sort(arr: list):
    n = len(arr)
    if n <= 1:
        return
    _max = arr[0]
    _min = arr[0]
    for i in range(n):
        if arr[i] > _max:
            _max = arr[i]
            continue
        if arr[i] < _min:
            _min = arr[i]
            continue
    # Create holes with length of range from min to max
    _range = _max - _min + 1
    counts = [0] * _range

    # Add up the frequency of each hole
    for i in range(n):
        counts[arr[i] - _min] += 1
    for i in range(1, _range):
        counts[i] += counts[i - 1]
    count = 0
    for i in range(_range):
        while count < counts[i]:
            arr[count] = i + _min
            count += 1
