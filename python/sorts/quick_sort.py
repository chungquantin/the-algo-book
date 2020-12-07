def quick_sort(arr: list):
    length = len(arr)
    if length <= 1:
        return
    i = -1
    j = 0
    pivot = arr[length - 1]
    while j < length - 1:
        if arr[j] <= pivot:
            i += 1
            arr[j], arr[i] = arr[i], arr[j]
        j += 1

    left = arr[:i]
    right = arr[i + 1:]
    print(left,right)
