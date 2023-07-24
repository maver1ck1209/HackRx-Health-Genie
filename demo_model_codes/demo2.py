import replicate
import os
import matplotlib.pyplot
os.environ['REPLICATE_API_TOKEN']="r8_LbdSMrlsq7oPGGb6i72nnIEhfkAyYfo1fFusD"
output = replicate.run(
    "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    input={"prompt": "a person aged around 52 with a child fondling on his heart, an image showing support for heart diseases"}
)
print(output)