import time


def timer(func):
    def inner(*args, **kwargs):
        start = time.time()
        rv = func(*args, **kwargs)
        end = time.time()
        print(f'Elapsed: {end - start}s')
        return rv

    return inner
