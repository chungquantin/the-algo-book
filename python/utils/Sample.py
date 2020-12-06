import random


def sample(length: int = 10, _min: int = 0, _max: int = 100):
    return [random.randint(_min, _max) for _ in range(length)]


def sorted_sample(length: int = 10, _min: int = 0, _max: int = 100, reverse: bool = False):
    return sorted(sample(length, _min, _max), reverse=reverse)
