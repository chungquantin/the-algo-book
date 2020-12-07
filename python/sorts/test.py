from python.utils.Sample import *
from python.sorts.test_analysis import *
from python.sorts.bubble_sort import *
from python.sorts.merge_sort import *
from python.sorts.selection_sort import *
from python.sorts.brick_sort import *
from python.sorts.insertion_sort import *
from python.sorts.pigeonhole_sort import *
from python.sorts.counting_sort import *

# Choose algorithms to test
algorithms = [
    counting_sort,
    pigeonhole_sort,
    merge_sort,
    selection_sort,
    insertion_sort,
    # brick_sort,
    # bubble_sort,
    # optimized_bubble_sort,
]
# Create sample
s = sample(5000, 0, 1000)
# Choose analysis mode
sorts_analysis(s, algorithms)
sorts_table_analysis(s, algorithms)
