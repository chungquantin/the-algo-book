def quick_sort(a: list):
    n = len(a)
    if n <= 1:
        return

    i = -1
    j = 0
    pivot = a[n - 1]
    
    while j < n - 1:
        if a[j] <= pivot:
            i += 1
            a[j], a[i] = a[i], a[j]
        j += 1

    pivot_i = i + 1

    a[pivot_i], a[j] = a[j], a[pivot_i]

    left = a[:pivot_i]
    right = a[pivot_i + 1:]

    quick_sort(left)
    quick_sort(right)

    length_l = len(left)
    length_r = len(right)

    for k in range(length_l):
        a[k] = left[k]
    for k in range(length_r):
        a[length_l + k + 1] = right[k]
