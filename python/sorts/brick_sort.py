def brick_sort(a: list):
    n = len(a)
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        for i in range(0, n - 1, 2):
            if a[i] > a[i + 1]:
                is_sorted = False
                a[i], a[i + 1] = a[i + 1], a[i]
        for i in range(1, n - 1, 2):
            if a[i] > a[i + 1]:
                is_sorted = False
                a[i], a[i + 1] = a[i + 1], a[i]