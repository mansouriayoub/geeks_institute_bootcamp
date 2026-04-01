"""

"""



from datetime import date

user_input = input("Enter a date in the format YYYY/MM/DD: ").split('/')
converted_input = [int(i) for i in user_input]

def age(birthdate):
    today = date.today()
    return today.year - birthdate[0] - ((today.month, today.day) < (birthdate[1], birthdate[2]))

num_candles = age(converted_input) % 10

candles = 'i' * num_candles 
cake = f"""       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~"""

leap_year = converted_input[0] % 400 == 0

if leap_year:
    print(cake*2)
else:
    print(cake)