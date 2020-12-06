import time


def timer(func):
    def inner(*args, **kwargs):
        before = time.time()
        rv = func(*args, **kwargs)
        after = time.time()
        print(f'Time elapsed: {after - before}s')
        return rv

    return inner
