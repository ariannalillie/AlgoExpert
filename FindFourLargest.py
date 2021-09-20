def find_four_largest(list):
    sorted_list = sorted(list)
    return sorted_list[-4:]

print(find_four_largest([3,5,7,8,2,1]))
