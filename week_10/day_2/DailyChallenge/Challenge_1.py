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

