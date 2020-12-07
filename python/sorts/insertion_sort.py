def insertion_sort(arr: list):
    length = len(arr)
    for i in range(1, length):
        j = i
        while arr[j] < arr[j - 1] and j > 0:
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
            j -= 1
