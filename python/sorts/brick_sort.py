def brick_sort(a: list):
    n = len(a)
    swapped = True
    while swapped:
        swapped = False
        for i in range(0, n - 1, 2):
            if a[i] > a[i + 1]:
                swapped = True
                a[i], a[i + 1] = a[i + 1], a[i]
        for i in range(1, n - 1, 2):
            if a[i] > a[i + 1]:
                swapped = True
                a[i], a[i + 1] = a[i + 1], a[i]