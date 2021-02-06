from icecream import ic


def delete_and_earn(nums: list):
    n = len(nums)
    if n == 0:
        return 0
    if n == 1:
        return nums[0]
    _max = max(nums)
    points = [0] * (_max + 1)
    dp = [0] * (_max + 1)
    for i in range(n):
        points[nums[i]] += nums[i]
    for i in range(_max + 1):
        dp[i] = points[i]
    for i in range(2, _max + 1):
        dp[i] = max(dp[i - 1], dp[i - 2] + points[i])
    return dp[_max]


ic(delete_and_earn([3, 4, 2]))
ic(delete_and_earn([2, 2, 3, 3, 3, 4]))
ic(delete_and_earn([3, 3, 4, 5]))
