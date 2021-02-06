from icecream import ic
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]


ic(fibonacci(2))
ic(fibonacci(5))
ic(fibonacci(6))
ic(fibonacci(10))