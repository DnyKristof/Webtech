FROM python
WORKDIR /src

RUN pip3 install setuptools "fastapi[all]" matplotlib psutil "pydantic<2" pymongo uvicorn fastapi_login flask bcrypt requests typing mongojoin pylatex
COPY . .

EXPOSE 7000