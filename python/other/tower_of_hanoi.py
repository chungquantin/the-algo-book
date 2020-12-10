def tower_of_hanoi(n, from_rod, aux_rod, to_rod):
    def log_move(n, from_rod, to_rod):
        print(f'Moving disk {n} from {from_rod} to {to_rod}.')

    if n == 1:
        log_move(n, from_rod, to_rod)
        return
    tower_of_hanoi(n - 1, from_rod, to_rod, aux_rod)
    log_move(n, from_rod, to_rod)
    tower_of_hanoi(n - 1, aux_rod, from_rod, to_rod)


tower_of_hanoi(3, 'A', 'B', 'C')
