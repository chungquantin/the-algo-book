from python.utils.Timer import *
from python.utils.PrintSeparator import *


def sort_test(algorithm, **kwargs):
    @print_separator
    @timer
    def test(numbers):
        numbers = numbers.copy()
        print(algorithm.__name__)
        print(f'Before: {numbers}')
        algorithm(numbers)
        print(f'After: {numbers}')

    return test
