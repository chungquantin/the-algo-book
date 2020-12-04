import math

stage = 0
def quickSort(numbers : list):
    global stage
    if (len(numbers) == 0): return 0
    left = []
    right = []
    pivot=numbers[math.floor(len(numbers) / 2)]
    
    for num in numbers:
        if (num < pivot):
            left.append(num)
        elif (num > pivot):
            right.append(num)
    
    print(f'stage {stage}:',pivot, left, right)
    stage += 1
    return quickSort(left) + [].append(pivot) + quickSort(right)
    

sortedList = quickSort([2,5,1,7,4,7,2,6])
print(sortedList)