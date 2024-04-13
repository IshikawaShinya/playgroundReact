from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","http://localhost:3001"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def flag_login(db,email, password):
    if (crud.get_user_by_email(db, email) == None):
        return False
    elif (crud.get_user_by_email(db, email).hashed_password == password):
        return True
    else:#emailが登録されているが、passwordが間違っている
        return False

##usersをsignupに変更
@app.post("/signup/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/signin/")
def signin_user(user:schemas.UserCreate, db: Session = Depends(get_db)):
    email = user.email
    password = user.password + "notreallyhashed"
    if (email == "" or password == "notreallyhashed"):
        return {"res":"Email or Password is empty"}
    # この条件を満たすときにTrueを返す, それ以外はFalseを返す
    # elif (crud.get_user_by_email(db, email).hashed_password == password):
    elif (flag_login(db,email,password) == True):
        return {"res":"login success"}
    else:
        return {"res":"wrong email or password"}
    # raise HTTPException(status_code=400, detail="wrong email or password")
    # return {"res":"everything is fine"} 
    
    # if (email == "" or password == ""):
    #     # raise HTTPException(status_code=400, detail="Email or Password is empty")
    #     return {"res":"Email or Password is empty"} 
    # if (crud.get_user_by_email(db, email) == None):
    #     # raise HTTPException(status_code=400, detail="Email is not registered")
    #     return {"res":"Email is not registered"} 
    # elif (crud.get_user_by_email(db, email).hashed_password == password): 
    #     # return HTTPException(status_code=400, detail="login success")
    #     return {"res":"login success"} 
    # else:
    #     # raise HTTPException(status_code=400, detail="wrong email or password")
    #     return {"res":"wrong email or password"} 
    # return crud

@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(
    user_id: int, item: schemas.ItemCreate, db: Session = Depends(get_db)
):
    return crud.create_user_item(db=db, item=item, user_id=user_id)


@app.get("/items/", response_model=list[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items