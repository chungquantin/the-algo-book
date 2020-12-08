def gnome_sort(arr: list):
    n = len(arr)
    i = 0
    while i < n:
        if i == 0:
            i += 1
        if arr[i] >= arr[i - 1]:
            i += 1
            continue
        arr[i], arr[i - 1] = arr[i - 1], arr[i]
        i -= 1