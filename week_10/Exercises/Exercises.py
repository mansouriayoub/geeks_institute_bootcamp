# 🌟 Exercise 1 : Hello World
print('Hello world\n'*4)

# 🌟 Exercise 2 : Some Math
result = (99 ** 3) *8
print(result)

# 🌟 Exercise 3 : What’s your name ?
name = 'Eyüp'
userName = input('What is your name ?')
if userName == name:
    print(f"We have the same name 😄 Are you my long-lost twin?")
else:
    print("Nice to meet you, " + user_name + "! But I guess my name is still cooler 😎")

# 🌟 Exercise 4 : Tall enough to ride a roller coaster
# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.
height = int(input('What is your height in centimeters ?'))
if height > 145:
    print(f"You are {height}cm tall enough to ride.")
else:
    print(f'You are {height}cm, you need to grow some more to ride')

# 🌟 Exercise 5 : Favorite Numbers

# Create a set called my_fav_numbers with all your favorites numbers.
my_fav_numbers = {17,11,10,7,23,22,31}

"""
 Add two new numbers to the set.
 To add numbers to a set in Python, use the add() method for a single number or the update() method for multiple numbers
"""
my_fav_numbers.add(101)
my_fav_numbers.update([112,216])

"""
 Remove the last number.
 the concept of a "last" element does not apply to Set
"""
my_fav_numbers.pop()

# Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = set([0,9,8,7,6,12,5,4])

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# 🌟 Exercise 6: Tuple
"""
 Given a tuple which value is integers, is it possible to add more integers to the tuple?
 #Answer: No, you cannot add more integers to a tuple in Python because tuples are immutable, 
meaning their values cannot be changed after creation.
"""

# 🌟 Exercise 7: List
"""

Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

Remove Banana from the list.
Remove Blueberries from the list.
Add Kiwi to the end of the list.
Add Apples to the beginning of the list.
Count how many apples are in the basket.
Empty the basket.
Print(basket)
"""
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove("Banana")
basket.pop()
basket.append('Kiwi')
basket.insert(0, "Apples")
print(basket.count("Apples"))

#Empty the basket. these three lines do the same thing
basket.clear()
# del basket[:]
# basket = []

print(basket)

# 🌟 Exercise 8 : Sandwich Orders
"""
Using the list below :

The deli has run out of pastrami, use a while loop to remove all occurrences of Pastrami sandwich from sandwich_orders.

We need to prepare the orders of the clients:
Create an empty list called finished_sandwiches.
One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
"""
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches=[]
while len(sandwich_orders) > 0:
    result = sandwich_orders.pop()
    finished_sandwiches.append(result)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")