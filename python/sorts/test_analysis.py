from python.utils.Timer import *
from python.utils.PrintSeparator import *
from python.utils.Color import *
from python.utils.Table import *


def sort_test(algorithm):
    @print_separator
    def test(numbers):
        numbers = numbers.copy()
        minimized_size = 101
        expected = sorted(numbers)
        print(f'{color_text(algorithm.__name__, Color.HEADER)}')
        size = len(numbers)
        print(f'Size: {size}')
        print(f'Range: {max(numbers) - min(numbers)}')
        if size < minimized_size:
            print(f'Before: {numbers}')
        before = time.time()
        algorithm(numbers)
        after = time.time()
        if size < minimized_size:
            print(f'After: {numbers}')
        result = f'{color_text("Success", Color.OKGREEN)}' if numbers == expected else f'{color_text("Failed", Color.FAIL)}'
        print(f'Result: {result}.')
        print(f'Elapsed: {after - before}s')

    return test


def sorts_table_analysis(numbers: list, algorithms: list):
    size = len(numbers)
    print(f'Size: {size}')
    print(f'Range: {max(numbers) - min(numbers)}')
    expected = sorted(numbers)

    table = Table(['Algorithm',
                   'Result',
                   'Elapsed'])
    for algorithm in algorithms:
        _numbers = numbers.copy()
        before = time.time()
        algorithm(_numbers)
        after = time.time()
        elapsed = after - before
        elapsed_str = "{:.10f}s".format(elapsed)
        result = "Success" if _numbers == expected else "Failed"
        table.add_row([
            algorithm.__name__,
            result,
            elapsed_str])
    table.display()


def sorts_analysis(numbers: list, algorithms: list):
    tests = [sort_test(algorithm) for algorithm in algorithms]
    for test in tests:
        test(numbers)
