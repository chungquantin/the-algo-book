def edit_distance(s1: str, s2: str) -> int:
    n1 = len(s1)
    n2 = len(s2)
    dp = [[0 for j in range(n2 + 1)] for i in range(n1 + 1)]
    for i in range(n1 + 1):
        dp[i][0] = i
    for j in range(n2 + 1):
        dp[0][j] = j

    for i in range(1, n1 + 1):
        for j in range(1, n2 + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
                continue
            dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
    return dp[n1][n2]


print(edit_distance("a", "ac"))
print(edit_distance("", ""))
print(edit_distance("", "ac"))
print(edit_distance("abcd", "da"))
print(edit_distance("abc", "ac"))
print(edit_distance("appropriate meaning", "approximate matching"))
