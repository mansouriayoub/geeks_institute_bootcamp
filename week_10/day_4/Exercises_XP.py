# 🌟 Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

firstCat = Cat('lilou', 3)
secondCat = Cat('tom', 2)
thirdCat = Cat('mil', 1)

def findOldestCat(cat1,cat2,cat3):
    oldest = cat1

    if cat2.age > oldest.age:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3
    return oldest

oldest_cat = findOldestCat(firstCat, secondCat, thirdCat)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# 🌟 Exercise 2 : Dogs
class Dog():
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        print(f"{self.name} jumps {self.height *2} cm high!")

davids_dog = Dog("Rex", 50)

print(f"His dog’s name is '{davids_dog.name}' and his height is {davids_dog.height}cm")
davids_dog.bark()
davids_dog.jump()

sarahs_dog=Dog("Teacup",20)
print(f"Hers dog’s name is '{sarahs_dog.name}' and his height is {sarahs_dog.height}cm")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height < sarahs_dog.height:
    print(f"The name of the bigger dog is {sarahs_dog.name}")
else:
    print(f"The name of the bigger dog is {davids_dog.name}")

# 🌟 Exercise 3 : Who’s the song producer?
class Song():
    def __init__(self, lyrics = []):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for el in self.lyrics:
            print(f"{el}")

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo
"""
Create a class called Zoo.

In this class create a method __init__ that takes one parameter: zoo_name.
It instantiates two attributes: animals (an empty list) and name (name of the zoo).

Create a method called add_animal that takes one parameter new_animal. 
This method adds the new_animal to the animals list as long as it isn’t already in the list.

Create a method called get_animals that prints all the animals of the zoo.

Create a method called sell_animal that takes one parameter animal_sold. 
This method removes the animal from the list and of course the animal needs to exist in the list.

Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
Example

{ 
    A: "Ape",
    B: ["Baboon", "Bear"],
    C: ['Cat', 'Cougar'],
    E: ['Eel', 'Emu']
}

Create a method called get_groups that prints the animal/animals inside each group.
Create an object called new_york_zoo and call all the methods.
Tip: The zookeeper is the one who will use this class.
Example

Which animal should we add to the zoo --> Giraffe
x.add_animal(Giraffe)
"""
class Zoo():
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        groups = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in groups:
                groups[first_letter] = []
            groups[first_letter].append(animal)

        return groups

    def get_groups(self):
        groups = self.sort_animals()
        print("Animal groups:")
        for letter, animals in groups.items():
            print(f"{letter}: {animals}")

new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal('Lion')
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

new_york_zoo.get_animals()
new_york_zoo.sell_animal('Bear')
new_york_zoo.add_animal('Giraffe')
new_york_zoo.get_groups()