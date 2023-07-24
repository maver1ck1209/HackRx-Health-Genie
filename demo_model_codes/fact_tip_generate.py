import replicate
import os
os.environ['REPLICATE_API_TOKEN']='r8_3qVVdwlTNa1h7WlGgPQ3ClRXEEzwW2528PQCt'
CND_PROMPT_FOR_MODEL='''
Generate a short one sentence tip or fact about either one of the following conditions

Conditions:{cnds}
Begin the facts with a '###'
'''
cnds='Diabetes, High Cholestrol'
age=20
city='delhi'
topics='Nutritions, Ayurveda'
prompt=CND_PROMPT_FOR_MODEL.format(cnds=cnds)



output = replicate.run(
    "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
    input={"prompt": 
    prompt,'max_length':1000,"temperature":0.75}
)

str=''
for i in output:
   
    str+=i
#print(str)
fact=str[str.index('#'):]
# return fact
print(fact)