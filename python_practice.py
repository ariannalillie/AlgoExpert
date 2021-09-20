# this is what a python comment looks like

# Python variables are typically snakecase
my_name = 'Arianna'

print('Hello my name is ' + my_name)

this_is_an_int = 5

this_is_a_float = 7.02

# PYTHON OPERATORS (typically denoted with no spaces between
# operations )

#add
print(1+1)

#subtract
print(2-1)

#multiply
print(4*5)

#divide
print(20/5)

#modulo
print(20%5)


#find length of a string
print(len(my_name))

#escaping characters
print('Jodi asked, "What\'s up, Sam?"')

#multiline string
print('''My instructions are very long so to make them
more readable in the code I am putting them on
more than one line. I can even include "quotes"
of any kind because they won't get confused with
the end of the string!''')

#index function (similiar to indexOf())
print("Spaghetti".index("h"))    # => 4

#count function
  #Find out how many times a substring appears in the primary string using count.
  # It returns zero if the substring is not there.
print("Spaghetti".count("t"))    # => 2

#FORMATTING

#placeholder (a number inside of brackets)
{0}
first_name = "Billy"
last_name = "Bob"
  #Formatting example 1
print('Your name is {0} {1}'.format(first_name, last_name))
  #Formatting example 2
print(f'Your name is {first_name} {last_name}')

#Pythons replacement for null is None
my_var = None

#WHILE LOOPS

count = 0
while count < 10:
    count += 1
    print(count)
