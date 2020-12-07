def gnome_sort(arr: list):
    length = len(arr)
    for i in range(1, length):
        while arr[i] < arr[i - 1] and i > 0:
            arr[i], arr[i - 1] = arr[i - 1], arr[i]
            i -= 1
