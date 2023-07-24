import requests
import faiss
import numpy as np
import json
query='health+fitness+diabetes'
resp=requests.get("https://newsapi.org/v2/everything?q="+query+"&from=2023-06-21&sortBy=publishedAt&apiKey=206e6bd694234e429edacbaa9c437d6c")
print(json.loads(resp.content.decode())['articles'])

