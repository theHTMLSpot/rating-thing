from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
ratings: list[int] = []

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Rating(BaseModel):
    rating: int

@app.post('/rating')
def post_rating(rating: Rating):
    if rating.rating < 0 or rating.rating > 5:  # Assuming ratings are between 0 and 5
        raise HTTPException(status_code=400, detail="Rating must be between 0 and 5")
    ratings.append(rating.rating)
    return {"message": "Success"}

@app.get('/average-rating')
def average_rating():
    if not ratings:
        raise HTTPException(status_code=404, detail="No ratings available")
    
    average = sum(ratings) / len(ratings)
    return {"average_rating": average}