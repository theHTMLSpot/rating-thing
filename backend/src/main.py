from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
ratings: list[int] = []

origins = [
    "http://localhost:3000"

]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_methods =["*"],
    allow_headers =["*"]

)

@app.post('/rating')
def PostRating(rating: int):
    ratings.append(rating)
    return {"message": "Success" }
@app.get('/average-rating')
def AverageRating():

    average = 0
    length = len(ratings)
    number = 0
    for i in range(length):
        number += ratings[i]
    if length != 0:
        average =number/length
    
    return average

    

    
