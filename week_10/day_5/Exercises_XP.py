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

#Exercise 4 : Family
class Family():
    def __init__(self, members, last_name):
        self.members = members  # expects a list of dicts
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'a new child')}!")
    
    def is_18(self, name):
        for member in self.members:
            if member.get('name') == name:
                return member.get('age', 0) > 18
        return False
    
    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        print("Members:")
        for member in self.members:
            info = ', '.join(f"{key}: {value}" for key, value in member.items())
            print(f" - {info}")

members = [
    {'name': 'John', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Jane', 'age': 34, 'gender': 'Female', 'is_child': False},
    {'name': 'Alice', 'age': 5, 'gender': 'Female', 'is_child': True}
]

my_family = Family(members, "Smith")

my_family.family_presentation()

my_family.born(name="Bob", age=0, gender="Male", is_child=True)

print(my_family.is_18("John"))  
print(my_family.is_18("Alice")) 
print(my_family.is_18("Bob"))   

my_family.family_presentation()

#Exercise 5 : TheIncredibles Family
class Family:
    def __init__(self, last_name, members=None):
        self.last_name = last_name
        self.members = members if members else []

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name', 'a new member')}!")

    def is_18(self, name):
        for member in self.members:
            if member.get("name") == name:
                return member.get("age", 0) >= 18
        return False

    def family_presentation(self):
        print(f"\nThe {self.last_name} Family:")
        for member in self.members:
            print(member)


# Inheriting from Family
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member.get("name") == name:
                if member.get("age", 0) < 18:
                    raise Exception(f"{name} is not over 18 years old!")
                print(f"{member.get('incredible_name')} uses power: {member.get('power')}")
                return
        print(f"{name} not found in the family.")

    def incredible_presentation(self):
        print("\nHere is our powerful family 💥")
        super().family_presentation()


incredibles = TheIncredibles(
    "Incredibles",
    [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]
)

incredibles.incredible_presentation()

incredibles.born(
    name="Baby Jack",
    age=0,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="Jack-Jack"
)

incredibles.incredible_presentation()

incredibles.use_power("Michael")



