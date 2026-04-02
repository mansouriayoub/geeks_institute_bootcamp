#🌟 Exercise 1 : Convert lists into dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

for item in zip(keys,values):
	print(item)

"""
🌟 Exercise 2 : Cinemax #2

A movie theater charges different ticket prices depending on a person’s age.

if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.

if they are over the age of 12, the ticket is $15.
Given the following object:

How much does each family member have to pay ?

Print out the family’s total cost for the movies.

Bonus: Ask the user to input the names and ages instead of using the provided family variable 
(Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
"""
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total = 0

for name, age in family.items():
	if age < 3:
		print(f"The ticket is free for {name}")
	elif age >= 3 and age <= 12:
		"""
		Or more Pythonically, this can be written as a chained comparison:
		3 <= age <= 12
		This is one of Python's elegant features — it reads exactly like math notation.
		"""
		print(f"The ticket is $10 for {name}")
		total += 10
	else:
		print(f"The ticket is $15 for {name}")
		total += 15
		
print(f"The family’s total cost for the movies is {total}")

# userInput = input(f"put your name and age")

# familyDict = {userInput}