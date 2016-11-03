from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def root_url():
    return render_template('index.html')


@app.route('/api/json')
def api_json():
    response = jsonify({"targets": ["A001", "B001", "AB001", "BA001"]})
    response.status_code = 200
    return response

if __name__ == '__main__':
    app.run()
