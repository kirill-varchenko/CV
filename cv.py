import json

from jinja2 import Environment, FileSystemLoader

with open("data.json", "r", encoding="utf-8") as fi:
    context = json.load(fi)

environment = Environment(loader=FileSystemLoader("templates/"), trim_blocks=True, lstrip_blocks=True)

cv_template = environment.get_template("cv.html")
content = cv_template.render(context)
with open("index.html", "w", encoding="utf-8") as fo:
    fo.write(content)

readme_template = environment.get_template("readme.md")
content = readme_template.render(context)
with open("README.md", "w", encoding="utf-8") as fo:
    fo.write(content)
