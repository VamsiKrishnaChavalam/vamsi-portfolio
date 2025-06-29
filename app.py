from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/resume")
def resume():
    return send_from_directory("static", "Vamsi_Resume.pdf")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)
