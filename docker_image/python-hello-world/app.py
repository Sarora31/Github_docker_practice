with open('names.txt') as f:
    
    names = f.read()

    names = names.split()

    for i,name in enumerate(names):
        
        print(f"{i+1}.{name}")

    #print(names)



print('Hello python Developers for DevOps course')

print('DEV part of Devops')
print('Plan')
print('code')
print('Build')
print('Test')

print('OPS part of Devops')
print('Release')
print('Deploy')
print('operate')
print('monitor')

