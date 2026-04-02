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

#🌟 Exercise 3: Zara
"""
1. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
"""
brand = {
	"name": "Zara", 
	"creation_date": 1975 ,
	"creator_name": "Amancio Ortega Gaona", 
	"type_of_clothes": ["men", "women", "children", "home"], 
	"international_competitors": ["Gap", "H&M", "Benetton"],
	"number_stores": 7000, 
	"major_color": {
		"France": "blue", 
		"Spain": "red", 
		"US": ["pink", "green"],
	}
}
#2. Change the number of stores to 2.
brand["number_stores"]=2

#3. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
print(f"Zara's types of clients are {brand['type_of_clothes']}.")
clothes = brand['type_of_clothes']
sentence = ', '.join(clothes)
print(f"Zara's types of clients are {sentence}")
#4. Add a key called country_creation with a value of Spain.
brand["country_creation"]="Spain"
#5. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if "international_competitors" in brand:
	brand["international_competitors"].append("Desigual")

#6. Delete the information about the date of creation.
del brand["creation_date"]
#7. Print the last international competitor.
print(brand["international_competitors"][-1])
#8. Print the major clothes colors in the US.
print(brand["major_color"]["US"])
#9. Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))
# 10. Print the keys of the dictionary.
print(brand.keys())
"""
11. Create another dictionary called more_on_zara with the following details:
- creation_date: 1975
- number_stores: 10 000
"""
more_on_zara = {
	"creation_date": 1975,
	"number_stores": 10000
}
#12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)
#13. Print the value of the key number_stores. What just happened ?
print(brand["number_stores"])
# The value of 'number_stores' is now 10000 because the update() method overwritten the previous value in brand with the value from more_on_zara.