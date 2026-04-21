#🌟 Exercise 1 : Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.name = name
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

all_cats = [Bengal('Bengal', 3), Chartreux('Chartreux', 2), Siamese('Siamese', 1)]
sara_pets = Pets(all_cats)
sara_pets.walk()

#🌟 Exercise 2 : Dogs

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, other_dog):
        if self.run_speed() > other_dog.run_speed():
            return f"{self.name} won the fight"
        elif self.run_speed() < other_dog.run_speed():
            return f"{other_dog.name} won the fight"
        else:
            return "It's a draw"

dog1 = Dog("Rex", 5, 100)
dog2 = Dog("Fido", 3, 80)
dog3 = Dog("Buddy", 7, 120)

print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))

#🌟 Exercise 3 : Dogs Domesticated => Exercise_3.py

