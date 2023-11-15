FROM ctfhub_base/python_3.11_flask

COPY src/ /app/
COPY files/flag.sh /flag.sh
COPY files/start.sh /start.sh

RUN chown app:app /app -R &&\
    chmod +x /app/app.py