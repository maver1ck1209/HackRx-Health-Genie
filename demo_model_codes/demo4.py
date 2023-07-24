import replicate
import os
os.environ['REPLICATE_API_TOKEN']='r8_6N0lkVMsdoSTVULfOVZvKbRTNuyiLKv3aW4mJ'
DIET_PROMPT_FOR_MODEL='''
Generate a list of Foods that can be prepared using the following Ingredients :
{ingd}

Keep in mind the user has the following Symptoms : 
{Symptoms}

And the following Conditions : 
{cnds}
'''

ingd="Rice, lentil, tomatoes, Chilli"
symds="Fever"
cnd = "Diabetes"
prompt=PROMPT_FOR_MODEL.format(ingd=ingd,Symptoms=symds,cnds=cnd)

output = replicate.run(
    "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
    input={"prompt": 
<<<<<<< HEAD
    prompt,'max_length':2000,"temperature":0.75}
)

str=''
for i in output:
    str+=i
print(str)
=======
    DIET_PROMPT_FOR_MODEL,'max_length':2000,"temperature":0.75}
)
>>>>>>> 5c5f4a8833ffd732cf7c51d8a26b77f7d1e83873
