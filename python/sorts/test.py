from python.utils.Sample import sample
from python.utils.Timer import *
from python.utils.PrintSeparator import *
from python.sorts.bubble_sort import *
from python.sorts.merge_sort import *


def sort_test(algorithm):
    @print_separator
    @timer
    def test(numbers):
        numbers = numbers.copy()
        print(algorithm.__name__)
        print(f'Size: {len(numbers)}')
        print(f'Before: {numbers}')
        algorithm(numbers)
        print(f'After: {numbers}')

    return test


# Create test functions
bs_test = sort_test(bubble_sort)
obs_test = sort_test(optimized_bubble_sort)
rbs_test = sort_test(recursive_bubble_sort)
orbs_test = sort_test(optimized_recursive_bubble_sort)
ms_test = sort_test(merge_sort)
# Create random sample
# Note: Recursion bubble sort cannot be used on large sample due to recursion depth limit.

s = sample(10000, 0, 1000)
# sample = sorted_sample(10000, reverse=False)
# sample = sorted_sample(10000, reverse=True)

# Copy sample for each test
bs_sample = obs_sample = ms_sample = s.copy()

# Run tests
bs_test(bs_sample)
obs_test(obs_sample)
ms_test(ms_sample)
