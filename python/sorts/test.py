from python.utils.Sample import *
from python.utils.Timer import *
from python.utils.PrintSeparator import *
from python.utils.Color import *
from python.sorts.bubble_sort import *
from python.sorts.merge_sort import *
from python.sorts.selection_sort import *
from python.sorts.brick_sort import *
from python.sorts.insertion_sort import *



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
        if size < minimized_size:
            print(f'Before: {numbers}')
        algorithm(numbers)
        if size < minimized_size:
            print(f'After: {numbers}')
        result = f'{color_text("Success", Color.OKGREEN)}' if numbers == expected else f'{color_text("Failed", Color.FAIL)}'
        print(f'Test result: {result}.')

    return test


# Create test functions

bubble_sort_test = sort_test(bubble_sort)
optimized_bubble_sort_test = sort_test(optimized_bubble_sort)
# rbs_test = sort_test(recursive_bubble_sort)
# orbs_test = sort_test(optimized_recursive_bubble_sort)
merge_sort_test = sort_test(merge_sort)
selection_sort_test = sort_test(selection_sort)
brick_sort_test = sort_test(brick_sort)
insertion_sort_test = sort_test(insertion_sort)

# Create random sample
# Note: Recursion bubble sort cannot be used on large sample due to recursion depth limit.

s = sample(5000, 0, 1000)
# s = sorted_sample(10000, reverse=False)
# s = sorted_sample(10000, reverse=True)


# Run tests
merge_sort_test(s)
selection_sort_test(s)
insertion_sort_test(s)
brick_sort_test(s)
bubble_sort_test(s)
optimized_bubble_sort_test(s)
