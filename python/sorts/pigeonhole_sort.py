def pigeonhole_sort(arr: list):
    length = len(arr)
    _min = arr[0]
    _max = arr[0]
    
    # Find min and max of numbers
    for i in range(length):
        if arr[i] < _min:
            _min = arr[i]
        if arr[i] > _max:
            _max = arr[i]

    # Create holes with length of range from min to max
    _range = _max - _min + 1
    holes = [0] * _range

    # Add up the frequency of each hole
    for i in range(length):
        holes[arr[i] - _min] += 1

    # Copy numbers from holes to original list
    index = 0
    for i in range(_range):
        for _ in range(holes[i]):
            arr[index] = i + _min
            index += 1
