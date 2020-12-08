def bubble_sort(a: list):
    n = len(a)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]


def optimized_bubble_sort(a: list):
    n = len(a)
    end = n - 1
    swapped = True
    while swapped:
        swapped = False
        for i in range(0, end):
            if a[i] > a[i + 1]:
                a[i], a[i + 1] = a[i + 1], a[i]
                swapped = True
        end -= 1
