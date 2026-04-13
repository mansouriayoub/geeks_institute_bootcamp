import random



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

# 🌟 Exercise 4 : Some Geography
def describe_city(city, country='morocco'):
	print(f"{city} is in {country}")

describe_city('casa')
#🌟 Exercise 5 : Random

def accNum(num):
	if num < 1 or num > 100:
		print(f'{num} must be between 1 and 100')
		return;
	ranNum = random.randint(1,100)
	if num == ranNum:
		print(f'success message. {num}, {ranNum}')
	else:
		print(f'fail message. {num}, {ranNum}')

accNum(3)

#🌟 Exercise 6 : Let’s create some personalized shirts !
"""
Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it, such as “The size of the shirt is size and the text is text“
Call the function make_shirt().
Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
Call the function, in order to make a large shirt with the default message
Make medium shirt with the default message
Make a shirt of any size with a different message.
Bonus: Call the function make_shirt() using keyword arguments.
"""
def make_shirt(size = 'L', text="I love Python"):
	print(f'The size of the shirt is {size} and the text is {text}')
make_shirt()

make_shirt("L", "I love Python")

make_shirt("M")

make_shirt(size="S", text="small shirt")

#🌟 Exercise 7 : Temperature Advice
"""
Create a function called get_random_temp().

This function should return an integer between -10 and 40 degrees (Celsius), selected at random.

Test your function to make sure it generates expected results.

Create a function called main().

Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.

Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:

below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
between 16 and 23
between 24 and 32
between 32 and 40
"""

def get_random_temp():
	ranNum = random.randint(-10, 40)
	return ranNum

def main():
	stVar = get_random_temp()
	print(f"The temperature right now is {stVar} degrees Celsius.")

	if stVar < 0:
		print(f"Brrr, that’s freezing! Wear some extra layers today")
	elif 0 <= stVar <= 16:
		print(f"Quite chilly! Don’t forget your coat")
	elif 17 <= stVar <= 23:
		print(f"The weather is mild, enjoy your day!")
	elif 24 <= stVar < 32:
		print(f"It's warm outside! Perfect time for some ice cream.")
	elif 32 <= stVar <= 40:
		print(f"It's hot! Remember to drink water and stay cool.")

main()
"""
Change the get_random_temp() function:
Add a parameter to the function, named ‘season’.

Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, 
eg. if season is ‘winter’, temperatures should only fall between -10 and 16.

Now that we’ve changed get_random_temp(), let’s change the main() function:
Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. 
Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
Use the season as an argument when calling get_random_temp().
"""
def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(0, 23)
    elif season == "summer":
        return random.randint(17, 40)
    elif season == "autumn":
        return random.randint(0, 32)
    else:
        return random.randint(-10, 40)

def main():
	userInput = input('type a season: summer, autumn, winter or spring')
	stVar = get_random_temp(userInput)
	print(f"The temperature right now is {stVar} degrees Celsius.")

	if stVar < 0:
		print(f"Brrr, that’s freezing! Wear some extra layers today")
	elif 0 <= stVar <= 16:
		print(f"Quite chilly! Don’t forget your coat")
	elif 17 <= stVar <= 23:
		print(f"The weather is mild, enjoy your day!")
	elif 24 <= stVar < 32:
		print(f"It's warm outside! Perfect time for some ice cream.")
	elif 32 <= stVar <= 40:
		print(f"It's hot! Remember to drink water and stay cool.")

main()
"""
Bonus: Give the temperature as a floating-point number instead of an integer.
"""
def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(0, 23)
    elif season == "summer":
        return random.uniform(17, 40)
    elif season == "autumn":
        return random.uniform(0, 32)
    else:
        return random.uniform(-10, 40)
def main():
	userInput = input('type a season: summer, autumn, winter or spring')
	stVar = get_random_temp(userInput)
	print(f"The temperature right now is {stVar:.2f} degrees Celsius.")

	if stVar < 0:
		print(f"Brrr, that’s freezing! Wear some extra layers today")
	elif 0 <= stVar <= 16:
		print(f"Quite chilly! Don’t forget your coat")
	elif 17 <= stVar <= 23:
		print(f"The weather is mild, enjoy your day!")
	elif 24 <= stVar < 32:
		print(f"It's warm outside! Perfect time for some ice cream.")
	elif 32 <= stVar <= 40:
		print(f"It's hot! Remember to drink water and stay cool.")

main()

"""
Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.
"""
def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(0, 23)
    elif season == "summer":
        return random.uniform(17, 40)
    elif season == "autumn":
        return random.uniform(0, 32)
    else:
        return random.uniform(-10, 40)

def get_season_from_month(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"

def main():
    month = int(input("Enter a month number (1-12): "))
    season = get_season_from_month(month)

    stVar = get_random_temp(season)

    print(f"The temperature right now is {stVar:.2f} degrees Celsius.")

    if stVar < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= stVar <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif 17 <= stVar <= 23:
        print("The weather is mild, enjoy your day!")
    elif 24 <= stVar < 32:
        print("It's warm outside! Perfect time for some ice cream.")
    elif 32 <= stVar <= 40:
        print("It's hot! Remember to drink water and stay cool.")

main()

#🌟 Exercise 8 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

wrong_answers = []

def ask_questions(data):
    correct_count = 0
    incorrect_count = 0
    wrong_answers.clear()
    for q in data:
        print(q["question"])
        user_answer = input("Your answer: ").strip()
        if user_answer.lower() == q["answer"].lower():
            correct_count += 1
        else:
            incorrect_count += 1
            wrong_answers.append({
                "question": q["question"],
                "your_answer": user_answer,
                "correct_answer": q["answer"]
            })
    return correct_count, incorrect_count

def show_results(correct_count, incorrect_count):
    print(f"You got {correct_count} correct answers and {incorrect_count} incorrect answers.")
    if wrong_answers:
        print("\nHere are the questions you missed:")
        for wa in wrong_answers:
            print(f"Q: {wa['question']}")
            print(f"Your answer: {wa['your_answer']}")
            print(f"Correct answer: {wa['correct_answer']}\n")