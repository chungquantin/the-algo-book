from python.searches.search_analysis import *
from python.utils.Sample import *
from python.searches.linear_search import *
from python.searches.binary_search import *

algorithm = [
    linear_search,
    binary_search,
]

numbers = [1, 4, 1, 2, 7, 5]
sorted_numbers = sorted(numbers)
print(linear_search(numbers, 4))
print(binary_search(numbers, 4))
