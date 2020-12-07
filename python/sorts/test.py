from python.utils.Sample import *
from python.utils.Timer import *
from python.utils.PrintSeparator import *
from python.utils.Color import *
from python.sorts.bubble_sort import *
from python.sorts.merge_sort import *
from python.sorts.selection_sort import *


def sort_test(algorithm):
    @print_separator
    @timer
    def test(numbers):
        numbers = numbers.copy()
        minimized_size = 100
        expected = sorted(numbers)
        print(f'{color_text(algorithm.__name__, Color.HEADER)}')
        size = len(numbers)
        print(f'Size: {size}')
        print(f'Before: {numbers if size < minimized_size else "(too many numbers...)"}')
        algorithm(numbers)
        print(f'After: {numbers if size < minimized_size else "(too many numbers...)"}')
        result = f'{color_text("Success", Color.OKGREEN)}' if numbers == expected else f'{color_text("Failed", Color.FAIL)}'
        print(f'Test result: {result}.')

    return test


# Create test functions

bs_test = sort_test(bubble_sort)
obs_test = sort_test(optimized_bubble_sort)
# rbs_test = sort_test(recursive_bubble_sort)
# orbs_test = sort_test(optimized_recursive_bubble_sort)
ms_test = sort_test(merge_sort)
ss_test = sort_test(selection_sort)

# Create random sample
# Note: Recursion bubble sort cannot be used on large sample due to recursion depth limit.

s = sample(10000, 0, 1000)
# s = sorted_sample(10000, reverse=False)
# s = sorted_sample(10000, reverse=True)


# Run tests
bs_test(s)
obs_test(s)
ms_test(s)
ss_test(s)
