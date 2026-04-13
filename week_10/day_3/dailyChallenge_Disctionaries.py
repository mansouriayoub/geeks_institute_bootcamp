word = input("Enter a word: ")

# Create a dictionary to store the indexes of each letter
letter_indexes = {}

for indx, letter in enumerate(word):
    if letter not in letter_indexes:
        letter_indexes[letter] = []
    letter_indexes[letter].append(indx)

print(letter_indexes)

# Example outputs:
# Input: dodo   -> {'d': [0, 2], 'o': [1, 3]}
# Input: froggy -> {'f': [0], 'r': [1], 'o': [2], 'g': [3, 4], 'y': [5]}
# Input: grapes -> {'g': [0], 'r': [1], 'a': [2], 'p': [3], 'e': [4], 's': [5]}
