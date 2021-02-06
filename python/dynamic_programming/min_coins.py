import math
from icecream import ic

def min_coins(_sum, coins: list):
    dp = [math.inf] * (_sum + 1)
    dp[0] = 0
    for s in range(1, _sum + 1):
        for coin in coins:
            if s >= coin:
                dp[s] = min(dp[s - coin] + 1, dp[s])
    return dp[_sum]


ic(min_coins(17, [2, 3, 5, 8]))
