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