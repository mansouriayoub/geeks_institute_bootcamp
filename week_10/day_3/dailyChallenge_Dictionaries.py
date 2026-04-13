word = input("Enter a word: ")

# Create a dictionary to store the indexes of each letter
letter_indexes = {}

for indx, letter in enumerate(word):
    if letter not in letter_indexes:
        letter_indexes[letter] = []
    letter_indexes[letter].append(indx)

print(letter_indexes)

# Example outputs:
# Input: amine -> {'a': [0], 'm': [1], 'i': [2], 'n': [3], 'e': [4]}
