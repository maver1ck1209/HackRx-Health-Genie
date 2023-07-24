from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.views.decorators.csrf import csrf_exempt
import pyrebase
import json
import requests

import replicate
import os
os.environ['REPLICATE_API_TOKEN']='r8_DvlVQszBzwtI1poiPI5l97zwqxRFHpB1bLPig'
PROMPT_FOR_MODEL='''
You are to generate only the body of an mail to market a health app that is personalized to the user's need.
Create mail to cater to a user with only the following data and do not add any other data:
sender: HealthGenie
reciever: Nethra
Age:{age}
City:{city}
Interested Topics: {topics}
App link : https://www.bajaj.com/health-genie
Do not make your own conclusions, create only necessary details.
You only have to generate the content of the mail.
End the email asking the user to download our app Health Genie.
Use html <br> tags to seperate paragraphs
'''
DIET_PROMPT_FOR_MODEL='''
Generate a list of Foods that can be prepared using the following Ingredients :
{ingds}

Keep in mind the user has the following Symptoms : 
{Symptoms}

And the following Conditions : 
{cnd}

Give a short to the point answer without any introduction.
'''

FACTS_PROMPT_FOR_MODEL = '''
I am {age} years old from {city}. I am a {gender}.
Generate a short one sentence tip to help with the condition and statistics about either one of the following conditions that I might find interesting

Conditions:{cnds}
Begin the facts with a '###'
'''

NOTIFICATION_PROMPT='''
You are a marketing agent, Generate a short, catchy, one sentence message to influence a 
{age} year old {gender} from {city} with conditions: {cnds} to read an article about {art_cnt}. 
'''


config={
  'apiKey': "AIzaSyB-XZ68XuIyP4l-ghWgV4Y-dIg4Zw_LVQM",
  'authDomain': "hackrx-pre.firebaseapp.com",
  'databaseURL': "https://hackrx-pre-default-rtdb.asia-southeast1.firebasedatabase.app",
  'projectId': "hackrx-pre",
  'storageBucket': "hackrx-pre.appspot.com",
  'messagingSenderId': "33665546378",
  'appId': "1:33665546378:web:3079bc47ae1b5ce62f1573"
}

db=pyrebase.initialize_app(config)
store=db.storage()

rl_db=db.database()

def email(request):
    if request.method == 'GET':
        ages,citys,topics=rl_db.child('user_data').child(1111222223).get().val()['Age'],rl_db.child('user_data').child(1111222223).get().val()['City'],rl_db.child('user_data').child(1111222216).get().val()['Articles'] 
        htmly = get_template('email1.html')
        subject, from_email, to = 'Exciting new app', 'giridharsunil@gmail.com', 'akhilrnair28@gmail.com'
        prompt = PROMPT_FOR_MODEL.format(age = ages, city=citys, topics=topics)
        output = replicate.run(
            "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
            input={"prompt": 
            prompt,'max_length':2000,"temperature":0.75}
        )
        ot=''
        for i in output:
            ot+=i
        ot=ot.replace(' ','  ')
        # ot=ot.replace('\n','<br>')
        d = {'content': ot}
        html_content = htmly.render(d)
        msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return {
            'success': 1
        }
@csrf_exempt
def news(request):
    if request.method=='POST':
        data=json.loads(request.body)
        print(data)
        # query='+'.join(rl_db.child('user_data').child(data['user_id']).get().val()['Conditions'])
        # print(query)
        query='homeopathy'
        resp=requests.get("https://newsapi.org/v2/everything?q="+query+"&from=2023-07-3&sortBy=publishedAt&apiKey=206e6bd694234e429edacbaa9c437d6c")
        print(resp.content.decode())
        docs=json.loads(resp.content.decode())['articles'][3:10]
        print(docs)
        articles=dict()
        for i in range(0,len(docs)):
            articles['obj'+str(i+1)]={'title':docs[i]['title'],'url':docs[i]['urlToImage'],'author':docs[i]['author'],'url':docs[i]['url'],'content':docs[i]['description']}
            break
        print(articles)
        return JsonResponse(articles)
    
@csrf_exempt
def diet(request):
    if request.method=='POST':
        rl_db.get('')
        data=json.loads(request.body)
        cnds,symds,gend=rl_db.child('user_data').child(data['user_id']).get().val()['Conditions'],rl_db.child('user_data').child(data['user_id']).get().val()['Symptoms'],rl_db.child('user_data').child(data['user_id']).get().val()['Gender']
        if 'text' in data:
            ingds = data['text']
        else:
            ingds = 'random ingredients'
        # symds='fever'
        # cnds='Diabetes'
        prompt=DIET_PROMPT_FOR_MODEL.format(Symptoms=symds,ingds=ingds, cnd = cnds)

        output = replicate.run(
            "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
            input={"prompt": 
            prompt,'max_length':500,"temperature":0.75}
        )
        ot=''
        for i in output:
            ot+=i
        return JsonResponse({'output':ot, 'gender': gend})

@csrf_exempt
def facts(request):
    if request.method=='POST':
        rl_db.get('')
        data=json.loads(request.body)
        cnds,gend=rl_db.child('user_data').child(data['user_id']).get().val()['Conditions'],rl_db.child('user_data').child(data['user_id']).get().val()['Gender']
        ages,citys=rl_db.child('user_data').child(data['user_id']).get().val()['Age'],rl_db.child('user_data').child(data['user_id']).get().val()['City']
        prompt=FACTS_PROMPT_FOR_MODEL.format(age=ages,city=citys, cnds = cnds, gender=gend)

        output = replicate.run(
            "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
            input={"prompt": 
            prompt,'max_length':500,"temperature":0.75}
        )
        ot=''
        for i in output:
            ot+=i
        ot = ot.split('###')
        op = ''
        for i in range(1,len(ot)):
            op =op +  ot[i] + '\n'
        print(op)
        return JsonResponse({'output':op})
    
@csrf_exempt
def facts(request):
    if request.method=='POST':
        rl_db.get('')
        data=json.loads(request.body)
        cnds,gend=rl_db.child('user_data').child(data['user_id']).get().val()['Conditions'],rl_db.child('user_data').child(data['user_id']).get().val()['Gender']
        ages,citys=rl_db.child('user_data').child(data['user_id']).get().val()['Age'],rl_db.child('user_data').child(data['user_id']).get().val()['City']
        prompt=FACTS_PROMPT_FOR_MODEL.format(age=ages,city=citys, cnds = cnds, gender=gend)
        output = replicate.run(
            "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
            input={"prompt": 
            prompt,'max_length':500,"temperature":0.75}
        )
        ot=''
        for i in output:
            ot+=i
        return JsonResponse({'output':ot})

@csrf_exempt
def notification(request):
    if request.method=='POST':
        rl_db.get('')
        data=json.loads(request.body)
        cnds,gend=rl_db.child('user_data').child(data['user_id']).get().val()['Conditions'],rl_db.child('user_data').child(data['user_id']).get().val()['Gender']
        ages,citys=rl_db.child('user_data').child(data['user_id']).get().val()['Age'],rl_db.child('user_data').child(data['user_id']).get().val()['City']
        prompt=NOTIFICATION_PROMPT.format(age=ages,city=citys, cnds = cnds, gender=gend, art_cnt='Diabetes')
        output = replicate.run(
            "a16z-infra/llama13b-v2-chat:5c785d117c5bcdd1928d5a9acb1ffa6272d6cf13fcb722e90886a0196633f9d3",
            input={"prompt": 
            prompt,'max_length':1000,"temperature":0.75}
        )
        ot=''
        for i in output:
            ot+=i
        print(ot)
        return JsonResponse({'output':ot})