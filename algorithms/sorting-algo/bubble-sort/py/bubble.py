def recursive_bubble_sort(arr: list, length=None):
    if length is None:
        length = len(arr)
    if length <= 1:
        return
    for i in range(length - 1):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
    length -= 1
    recursive_bubble_sort(arr, length)


numbers = [5, 9, 100, 2, 4, 8, 7, 99]
recursive_bubble_sort(numbers)
print(numbers)
