from python.utils.Sample import sample
from python.utils.Timer import timer
from python.utils.PrintSeparator import print_separator
from python.utils.Color import Color
from python.sorts.bubble_sort import *
from python.sorts.merge_sort import *
from python.sorts.selection_sort import *
import time


def sort_test(algorithm):
    @print_separator
    @timer
    def test(numbers):
        numbers = numbers.copy()
        expected = sorted(numbers)
        print(algorithm.__name__)
        print(f'Size: {len(numbers)}')
        print(f'Before: {numbers}')
        algorithm(numbers)
        print(f'After: {numbers}')
        result = f'{Color.OKGREEN}Success{Color.ENDC}' if numbers == expected else f'{Color.FAIL}Failed{Color.ENDC}'
        print(f'Test result: {result}.')

    return test


# Create test functions

bs_test = sort_test(bubble_sort)
obs_test = sort_test(optimized_bubble_sort)
# rbs_test = sort_test(recursive_bubble_sort)
# orbs_test = sort_test(optimized_recursive_bubble_sort)
ms_test = sort_test(merge_sort)
ss_test = sort_test(selection_sort)
# rss_test = sort_test(recursive_selection_sort)

# Create random sample
# Note: Recursion bubble sort cannot be used on large sample due to recursion depth limit.

s = sample(10000, 0, 1000)
# s = sorted_sample(10000, reverse=False)
# s = sorted_sample(10000, reverse=True)


# Run tests
# bs_test(s)
# obs_test(s)
ms_test(s)
ss_test(s)
