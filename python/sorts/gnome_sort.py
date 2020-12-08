def gnome_sort(a: list):
    n = len(a)
    i = 0
    while i < n:
        if i == 0:
            i += 1
        if a[i] >= a[i - 1]:
            i += 1
            continue
        a[i], a[i - 1] = a[i - 1], a[i]
        i -= 1