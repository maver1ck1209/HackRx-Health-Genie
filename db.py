import pyrebase
import pandas as pd
import numpy as np
def make_variables_from_cond(val_dict):
    ret_dict=dict()
    ret_dict

config={
  'apiKey': "AIzaSyB-XZ68XuIyP4l-ghWgV4Y-dIg4Zw_LVQM",
  'authDomain': "hackrx-pre.firebaseapp.com",
  'databaseURL': "https://hackrx-pre-default-rtdb.asia-southeast1.firebasedatabase.app",
  'projectId': "hackrx-pre",
  'storageBucket': "hackrx-pre.appspot.com",
  'messagingSenderId': "33665546378",
  'appId': "1:33665546378:web:3079bc47ae1b5ce62f1573"
}

init=pyrebase.initialize_app(config)
db=init.database()
data=pd.read_csv("D:\\project\\pre_personalized\\PS2-Cosine-Similarity\\User_details.csv")
push_data=dict()

for i in range(data.shape[0]):
    temp=data.iloc[i]
    key=str(temp['Customer ID'])
    push_data[key]=dict()
    push_data[key]['Email']='jilomo8816@rc3s.com'
    check_var=True
    push_data[key]['Prev_Doc_Visits']=f"{temp['Visit1']} and {temp['Visit2']}"
    str_1=''
    str_2=''
    for j in temp.keys():
        if j=='Customer ID':
            continue
        if j=='Articles':
            push_data[key][j]=str(temp[j]).split()
            continue
        if j=='Thyroid' or j=='Diabetes' or j=='LIPID':
            if str(temp[j])=='nan':
                continue
            else:
                str_1+=f"{temp[j]} {j}, "
            continue
        if j=='Visit1' or j=='Visit2':
            if str(temp[j])=='nan':
                continue
            else:
                str_2+=f"{temp[j]} ,"
            continue
        push_data[key][j]=str(temp[j])
    push_data[key]['Conditions']=str_1
    push_data[key]['Prev_Doc_Visits']=str_2

#print(push_data)
db.child('user_data').set(push_data)
print(db.child('user_data').child('1111222201').get().val()['Conditions'])