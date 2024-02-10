FROM python
WORKDIR /src

RUN pip3 install setuptools "fastapi[all]" psutil "pydantic<2" pymongo uvicorn fastapi_login flask bcrypt requests typing mongojoin pylatex python-dotenv
COPY . .

EXPOSE 7000