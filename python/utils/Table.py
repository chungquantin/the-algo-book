class Table:
    row_sep = '-'
    col_sep = ' | '
    intersect = '-+-'

    def __init__(self, labels):
        self.labels = labels
        self.rows = []

    def add_row(self, data):
        self.rows.append(data)

    def get_width(self):
        return sum(self.get_max_cols_len()) + (len(self.labels) + 1 * len(Table.col_sep))

    def print_border(self, max_cols_len):
        print(Table.intersect, end='')
        for length in max_cols_len:
            print(Table.row_sep * length, end=Table.intersect)
        print()
        pass

    def display(self):
        max_cols_len = self.get_max_cols_len()
        width = self.get_width()
        self.print_border(max_cols_len)
        self.print_row(self.labels, max_cols_len)
        self.print_border(max_cols_len)
        for row in self.rows:
            self.print_row(row, max_cols_len)
        self.print_border(max_cols_len)

    def print_row(self, row, max_cols_len):
        print(Table.col_sep, end='')
        for i, col in enumerate(row):
            print(col.ljust(max_cols_len[i]), end=Table.col_sep)
        print()

    def get_max_cols_len(self):
        max_cols_len = []
        for label in self.labels:
            max_cols_len.append(len(label))
        for row in self.rows:
            for i, col in enumerate(row):
                col_len = len(col)
                if col_len > max_cols_len[i]:
                    max_cols_len[i] = col_len
        return max_cols_len
