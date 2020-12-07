class Table:
    row_sep = '-'
    col_sep = ' | '
    intersect = '-+-'

    def __init__(self, labels):
        self.labels = labels
        self.rows = []
        self.max_cols_len = self.get_max_cols_len()

    def add_row(self, row):
        self.rows.append(row)

    def print_border(self):
        print(Table.intersect, end='')
        for length in self.max_cols_len:
            print(Table.row_sep * length, end=Table.intersect)
        print()
        pass

    def display(self):
        self.max_cols_len = self.get_max_cols_len()
        self.print_border()
        self.print_row(self.labels)
        self.print_border()
        for row in self.rows:
            self.print_row(row)
        self.print_border()

    def print_row(self, row):
        print(Table.col_sep, end='')
        for i, col in enumerate(row):
            print(col.ljust(self.max_cols_len[i]), end=Table.col_sep)
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
