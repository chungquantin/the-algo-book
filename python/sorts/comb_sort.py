def comb_sort(a: list):
    def get_next_gap(gap):
        gap /= 1.3
        return int(gap) if gap > 1 else 1

    n = len(a)
    gap = n
    swapped = True
    while gap > 1 or swapped:
        swapped = False
        gap = get_next_gap(gap)
        for i in range(0, n - gap):
            if a[i] > a[i + gap]:
                a[i], a[i + gap] = a[i + gap], a[i]
                swapped = True
