def merge_sort(arr: list):
    n = len(arr)

    # Base case
    if n <= 1:
        return

    # Divide list into 2 halves
    mid_index = n // 2
    left = arr[:mid_index]
    right = arr[mid_index:]

    # Sort 2 halves
    merge_sort(left)
    merge_sort(right)

    # From here, 2 halves are already sorted
    l = r = a = 0

    # Copy the higher number from each list (left to right) until all numbers of 1 list are copied
    while l < len(left) and r < len(right):
        current_left = left[l]
        current_right = right[r]
        if current_left < current_right:
            arr[a] = current_left
            l += 1
        else:
            arr[a] = current_right
            r += 1
        a += 1

    # Copy the remaining numbers from the other list
    while l < len(left):
        arr[a] = left[l]
        l += 1
        a += 1

    while r < len(right):
        arr[a] = right[r]
        r += 1
        a += 1
