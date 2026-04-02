#🌟 Exercise 1 : Convert lists into dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

for item in zip(keys,values):
	print(item)

#🌟 Exercise 2 : Cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total = 0

for name, age in family.items():
	if age < 3:
		print(f"The ticket is free for {name}")
	elif age >= 3 and age <= 12:
		print(f"The ticket is $10 for {name}")
		total += 10
	else:
		print(f"The ticket is $15 for {name}")
		total += 15
		
print(f"The family's total cost for the movies is {total}")

"""
Bonus: Ask the user to input the names and ages instead of using the provided family variable 
(Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
"""
familyDict = {}
userInput = int(input("How many familly members"))

for member in range(userInput):
	name = input("What is the name of this member")
	age = int(input("What is the age of this member"))
	familyDict[name] = age

total = 0

for name, age in familyDict.items():
	if age < 3:
		print(f"The ticket is free for {name}")
	elif 3 <= age <= 12: #chained comparison (This is one of Python's elegant features — it reads exactly like math notation.)
		print(f"The ticket is $10 for {name}")
		total += 10
	else:
		print(f"The ticket is $15 for {name}")
		total += 15
		
print(f"The family's total cost for the movies is {total}")
