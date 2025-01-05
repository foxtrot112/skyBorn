from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('home.html')


@app.route('/roadmap')
def roadmap():
  return render_template('roadmap.html')


@app.route('/news')
def news():
  return render_template('news.html')

app.run(port=5500, debug=True)