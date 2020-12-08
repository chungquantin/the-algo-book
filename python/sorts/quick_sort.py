def quick_sort(arr: list):
    n = len(arr)
    if n <= 1:
        return

    i = -1
    j = 0
    pivot = arr[n - 1]
    
    while j < n - 1:
        if arr[j] <= pivot:
            i += 1
            arr[j], arr[i] = arr[i], arr[j]
        j += 1

    pivot_i = i + 1

    arr[pivot_i], arr[j] = arr[j], arr[pivot_i]

    left = arr[:pivot_i]
    right = arr[pivot_i + 1:]

    quick_sort(left)
    quick_sort(right)

    length_l = len(left)
    length_r = len(right)

    for k in range(length_l):
        arr[k] = left[k]
    for k in range(length_r):
        arr[length_l + k + 1] = right[k]
