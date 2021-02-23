x=[12,34,12,45,2,45,23,5]

for i in range(len(x)):
    for j in range(0, len(x)-i-1):
        if x[j]>x[j+1]:
            x[j], x[j+1] = x[j+1], x[j]
print(x)
x=12231
i=0
while x!=0:
    r=x%10
    i = i*10+r
    x=x//10

print(i)
# arr = [4, 2, 0, 7, 5, 0, 6, 9, 0]
# res = 427569000
# for i in range(len(arr)):
#     if arr[i]==0:
#         arr.remove(arr[i])

#         arr.append(0)
# print("".join(arr))












