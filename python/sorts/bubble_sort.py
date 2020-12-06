from python.utils.Sample import *
from python.sorts.Test import *


def bubble_sort(arr: list):
    length = len(arr)
    for i in range(length - 1):
        for j in range(length - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]


def optimized_bubble_sort(arr: list):
    length = len(arr)
    for i in range(length - 1):
        is_sorted = True
        for j in range(length - i - 1):
            if arr[j] > arr[j + 1]:
                if is_sorted:
                    is_sorted = False
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
        if is_sorted:
            break


def recursive_bubble_sort(arr: list, length: int = None):
    if length is None:
        length = len(arr)
    if length <= 1:
        return
    for i in range(length - 1):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
    recursive_bubble_sort(arr, length - 1)


def optimized_recursive_bubble_sort(arr: list, length: int = None):
    is_sorted = True
    if length is None:
        length = len(arr)
    if length <= 1:
        return
    for i in range(length - 1):
        if arr[i] > arr[i + 1]:
            if is_sorted:
                is_sorted = False
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
    optimized_recursive_bubble_sort(arr, length - 1)


# Create test functions
bs_test = sort_test(bubble_sort)
obs_test = sort_test(optimized_bubble_sort)
rbs_test = sort_test(recursive_bubble_sort)
orbs_test = sort_test(optimized_recursive_bubble_sort)

# Create random sample
# Note: Recursion bubble sort cannot be used on large sample due to recursion depth limit.

sample = sample(10000, 0, 1000)
# sample = sorted_sample(10000, reverse=False)
# sample = sorted_sample(10000, reverse=True)

# Copy sample for each test
bs_sample = sample.copy()
obs_sample = sample.copy()

# Run tests
bs_test(bs_sample)
obs_test(obs_sample)
