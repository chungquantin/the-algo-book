import math


def min_coins(_sum, coins: list):
    dp = [math.inf] * _sum
    dp[0] = 0
    for s in range(_sum):
        for coin in coins:
            if s >= coin:
                dp[s] = min(dp[s - coin] + 1, dp[s])
    return dp[_sum - 1]


print(min_coins(12, [1, 2, 5]))
