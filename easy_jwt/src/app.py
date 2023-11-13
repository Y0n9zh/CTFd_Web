from flask import Flask
app=Flask(__name__)
import jwt
import time
salt = "qziedu"

def readflag():
    with open("/flag_change", "r") as f:
        ret = f.read()
    return ret

def generate_jwt(username):
    headers = {
      "alg": "HS256",
      "typ": "JWT"
    }
    payload = {
      "name": username,
    }
    token = jwt.encode(payload=payload, key=salt, algorithm='HS256', headers=headers)
    return token

@app.route('/')
def index():
	a = '''
	访问url /get_jwt/你的用户名 去获得你的jwt</br>
	访问url /get_flag/你的jwt 去获得flag</br>
	实在做不出来看看hint吧 /hint
	'''
	return a

@app.route('/hint')
def hint():
	return "可以猜解出来的jwt密钥哦!"

@app.route('/get_jwt/<username>',methods=['GET'])
def get_jwt(username):
    if username == "admin":
        return "你个小机灵鬼,别想直接获得管理员的权限!</br>试试别的方法!"
    user_jwt = username
    strings = 'Here is your jwt: ' + generate_jwt(user_jwt)
    return strings

@app.route('/get_flag/<jwt_token>',methods=['GET'])
def get_flag(jwt_token):
    info = jwt.decode(jwt_token, salt, algorithms='HS256')
    username = info["name"]
    if username == "admin":
        flag = readflag()
        return f"恭喜你,flag是{flag}"
    else:
    	return "只有admin的权限才能获取flag"
    return info

if __name__=="__main__":
    app.run(port=80,host="0.0.0.0",debug=False)