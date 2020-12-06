
def print_separator(func):
    def inner(*args, **kwargs):
        length = 50
        print('-' * length)
        rv = func(*args, **kwargs)
        print('-' * length)
        return rv

    return inner
