"""
Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
"""
"""
get word from user

set result = empty string
set previous_letter = nothing

for each letter in word:
    if letter is different from previous_letter:
        add letter to result
        update previous_letter to current letter
    else:
        skip

print result
"""
userWord = input("User's word")

result = ''
previous_letter = ''

for letter in userWord:
    if letter != previous_letter:
        result += letter
        previous_letter = letter
        
print(f"user's word : {userWord} ➞ {result}")
