def brick_sort(arr: list):
    n = len(arr)
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        for i in range(0, n - 1, 2):
            if arr[i] > arr[i + 1]:
                is_sorted = False
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
        for i in range(1, n - 1, 2):
            if arr[i] > arr[i + 1]:
                is_sorted = False
                arr[i], arr[i + 1] = arr[i + 1], arr[i]