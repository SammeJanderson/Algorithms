from typing import List

def best_time_to_buy(prices: List) -> int:
    buy, sell = 0 ,1 
    maxProfit = 0

    while buy < len(prices):
        if prices[buy] < prices[sell]:
            profit = prices[sell] -  prices[buy]
            maxProfit = max(maxProfit, profit)
        else:
            buy = sell
        sell += 1


    return maxProfit




tests = [
    {"prices": [7, 1, 5, 3, 6, 4], "expected": 5},
    {"prices": [7, 6, 4, 3, 1], "expected": 0},
]

for i, tt in enumerate(tests):
    res = best_time_to_buy(tt["prices"])
    if tt["expected"] != res:
        print(f"test { i +1 } FAILED. got={res}. wanted={tt['expected']}")
        exit()

print("ALL TESTS PASSED")
