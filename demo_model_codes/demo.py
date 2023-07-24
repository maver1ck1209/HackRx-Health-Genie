import replicate
import os
os.environ['REPLICATE_API_TOKEN']='r8_6N0lkVMsdoSTVULfOVZvKbRTNuyiLKv3aW4mJ'
PROMPT_FOR_MODEL='''
You are to generate a mail to market a health app that is personalized to the user's need.
Create mail to cater to a user with only the following data and do not add any other data:
Age:{age}
City:{city}
Interested Topics: {topics}
Do not make your own conclusions, create only necessary details.
You only have to generate the content of the mail.
'''

age=20
city='delhi'
topics='Nutritions, Ayurveda'
PROMPT_FOR_MODEL.format(age=age,city=city,topics=topics)

output = replicate.run(
    "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
    input={"prompt": 
    PROMPT_FOR_MODEL,'max_length':2000,"temperature":0.75}
)
# The a16z-infra/llama13b-v2-chat model can stream output as it's running.
# The predict method returns an iterator, and you can iterate over that output.
str=''
for i in output:
    str+=i
print(str)