
def print_separator(func):
    def inner(*args, **kwargs):
        length = 50
        rv = func(*args, **kwargs)
        print('-' * length)
        return rv

    return inner
