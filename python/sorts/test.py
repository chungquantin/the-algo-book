from python.utils.Sample import *
from python.sorts.sort_analysis import *
from python.sorts.bubble_sort import *
from python.sorts.merge_sort import *
from python.sorts.selection_sort import *
from python.sorts.brick_sort import *
from python.sorts.quick_sort import *
from python.sorts.insertion_sort import *
from python.sorts.pigeonhole_sort import *
from python.sorts.gnome_sort import *
from python.sorts.cocktail_sort import *
from python.sorts.comb_sort import *

# Choose algorithms to test
algorithms = [
    quick_sort,
    pigeonhole_sort,
    merge_sort,
    selection_sort,
    insertion_sort,
    gnome_sort,
    brick_sort,
    comb_sort,
    cocktail_sort,
    bubble_sort,
    optimized_bubble_sort,
]
# Create sample
numbers = sample(10000, -1000, 1000)
# Choose analysis mode
sorts_analysis(numbers, algorithms)
sorts_table_analysis(numbers, algorithms)
