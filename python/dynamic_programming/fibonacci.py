def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]


print(fibonacci(2))
print(fibonacci(5))
print(fibonacci(6))
print(fibonacci(10))