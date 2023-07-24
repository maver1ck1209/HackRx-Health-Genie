import replicate
import os
os.environ['REPLICATE_API_TOKEN']='r8_6N0lkVMsdoSTVULfOVZvKbRTNuyiLKv3aW4mJ'
PROMPT_FOR_MODEL='''
Generate an article on
{Cnds}
For a {gnd} of {age} living in location {area} on tips to maintain or stay safe with the conditions mentioned
'''

age=20
city='delhi'
topics='Nutritions, Ayurveda'
PROMPT_FOR_MODEL.format(age=age,area=city,cnds=)

output = replicate.run(
    "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
    input={"prompt": 
    PROMPT_FOR_MODEL,'max_length':2000,"temperature":0.75}
)

str=''
for i in output:
    str+=i
print(str)