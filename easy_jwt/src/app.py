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
	第一步：访问 http://xxx.xxx.xxx.xxx:xx/get_jwt/username，去获取属于你的 JWT</br>
	第二步：访问 http://xxx.xxx.xxx.xxx:xx/get_flag/JWT，去获得 flag</br>

	实在做不出来看看 hint 吧 - http://xxx.xxx.xxx.xxx:xx/hint
	'''
	return a

@app.route('/hint')
def hint():
	return "可以猜解出来 JWT 密钥哦!"

@app.route('/get_jwt/<username>',methods=['GET'])
def get_jwt(username):
    if username == "admin":
        return "你个小机灵鬼，别想直接获得管理员的权限!</br>试试别的方法!"
    user_jwt = username
    strings = 'Here is your jwt: ' + generate_jwt(user_jwt)
    return strings

@app.route('/get_flag/<jwt_token>',methods=['GET'])
def get_flag(jwt_token):
    info = jwt.decode(jwt_token, salt, algorithms='HS256')
    username = info["name"]
    if username == "admin":
        flag = readflag()
        return f"恭喜你 flag 是：{flag}"
    else:
    	return "只有 admin 的权限才能获取 flag"
    return info

if __name__=="__main__":
    app.run(port=80,host="0.0.0.0",debug=False)