from python.utils.Timer import *
from python.utils.PrintSeparator import *
from python.utils.Color import *
from python.utils.Table import *


def get_sort_test_data(algorithm, numbers: list):
    numbers = numbers.copy()
    expected = sorted(numbers)
    start = time.time()
    algorithm(numbers)
    end = time.time()
    elapsed = end - start
    success = numbers == expected
    after = numbers
    return after, success, elapsed


def sort_test(algorithm):
    @print_separator
    def test(numbers):
        numbers = numbers.copy()
        minimized_size = 101
        print(f'{color_text(algorithm.__name__, Color.HEADER)}')
        size = len(numbers)
        print(f'Size: {size}')
        print(f'Range: {max(numbers) - min(numbers)}')
        if size < minimized_size:
            print(f'Before: {numbers}')
        after, success, elapsed = get_sort_test_data(algorithm, numbers)
        if size < minimized_size:
            print(f'After: {after}')
        result = f'{color_text("Success", Color.OKGREEN)}' if success else f'{color_text("Failed", Color.FAIL)}'
        print(f'Result: {result}.')
        print(f'Elapsed: {elapsed}s')

    return test


def sorts_table_analysis(numbers: list, algorithms: list):
    size = len(numbers)
    print(f'Size: {size}')
    print(f'Range: {max(numbers) - min(numbers)}')

    table = Table(['Algorithm',
                   'Result',
                   'Elapsed'])
    for algorithm in algorithms:
        after, success, elapsed = get_sort_test_data(algorithm, numbers)
        elapsed = "{:.10f}s".format(elapsed)
        result = "Success" if success else "Failed"
        table.add_row([
            algorithm.__name__,
            result,
            elapsed])
    table.display()


def sorts_analysis(numbers: list, algorithms: list):
    tests = [sort_test(algorithm) for algorithm in algorithms]
    for test in tests:
        test(numbers)
