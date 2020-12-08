def pigeonhole_sort(a: list):
    n = len(a)
    if n <= 1:
        return
    _min = a[0]
    _max = a[0]

    # Find min and max of numbers
    for i in range(n):
        if a[i] < _min:
            _min = a[i]
        if a[i] > _max:
            _max = a[i]

    # Create holes with length of range from min to max
    _range = _max - _min + 1
    holes = [0] * _range

    # Add up the frequency of each hole
    for i in range(n):
        holes[a[i] - _min] += 1

    # Copy numbers from holes to original list
    index = 0
    for i in range(_range):
        for _ in range(holes[i]):
            a[index] = i + _min
            index += 1
