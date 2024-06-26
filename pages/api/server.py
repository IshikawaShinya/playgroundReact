from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
app = FastAPI()


class User(BaseModel):
    mail: str
    password: str
# CORSミドルウェアの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 全てのオリジンを許可
    allow_credentials=True,
    allow_methods=["*"],  # 全てのHTTPメソッドを許可
    allow_headers=["*"],  # 全てのHTTPヘッダーを許可
)

@app.get("/")
async def root():
    return RedirectResponse(url="http://localhost:8000/new")

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/new/")
async def redirect(skip : int = 0, limit : int = 10):
    return fake_items_db[skip : skip + limit]

@app.post("/")
async def mailreceive(mail:User):
    print(mail.mail)
    print(mail.password)
    if(mail.mail == ""):
        return {"res":"empty"} 
    elif(mail.mail == "ishikawa" and mail.password == "ishikawa"):
        return {"res":"success"}
    elif(mail != "ishikawa"):
        return {"res":"wrong mail"}
    # TODO:status code
    # return {"res":"status code OK"}
    