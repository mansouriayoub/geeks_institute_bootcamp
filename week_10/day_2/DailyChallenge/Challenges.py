"""
Challenge 1

Ask the user for a number and a length.
Create a program that prints a list of multiples of the number until the list length reaches length.
"""

number = int(input("Write a number"))
length = int(input("Write a length"))

for counter in range(1,length+1):
    current_multiple = number * counter
    print(current_multiple)




"""
Challenge 1

Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
"""

userWord = input("User's word")

result = ''
previous_letter = ''

for letter in userWord:
    if letter != previous_letter:
        result += letter
        previous_letter = letter
        
print(f"user's word : {userWord} ➞ {result}")
