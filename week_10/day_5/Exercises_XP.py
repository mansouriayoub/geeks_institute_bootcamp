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
'''
Create another cat breed named Siamese which inherits from the Cat class.

Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

Those three cats are Sara’s pets. 
Create a variable called sara_pets which value is an instance of the Pet class, 
and pass the variable all_cats to the new instance.
Take all the cats for a walk, use the walk method.
'''
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

all_cats = [Bengal('Bengal', 3), Chartreux('Chartreux', 2), Siamese('Siamese', 1)]
sara_pets = Pets(all_cats)
sara_pets.walk()

#🌟 Exercise 2 : Dogs
'''
Create a class called Dog with the following attributes name, age, weight.
Implement the following methods in the Dog class:

bark: returns a string which states: “<dog_name>is barking”.

run_speed: returns the dogs running speed (weight/age*10).
fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. 
The winner should be the dog with the higher run_speed x weight.
Create 3 dogs and run them through your class.
'''
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return f"{self.name} is running at {self.weight / self.age * 10}"
    
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