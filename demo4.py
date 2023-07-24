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

age=20
city='delhi'
topics='Nutritions, Ayurveda'
PROMPT_FOR_MODEL.format({'age':age,'city':city,'topics':topics})

output = replicate.run(
    "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
    input={"prompt": 
    DIET_PROMPT_FOR_MODEL,'max_length':2000,"temperature":0.75}
)