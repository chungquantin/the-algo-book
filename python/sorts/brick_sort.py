def brick_sort(arr: list):
    length = len(arr)
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        for i in range(0, length - 1, 2):
            if arr[i] > arr[i + 1]:
                is_sorted = False
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
        for i in range(1, length - 1, 2):
            if arr[i] > arr[i + 1]:
                is_sorted = False
                arr[i], arr[i + 1] = arr[i + 1], arr[i]