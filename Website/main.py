from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('1st.html')

@app.route('/inventory')
def inventory():
    conn = sqlite3.connect('inventory.db')
    c = conn.cursor()
    c.execute('SELECT * FROM inventory')
    inventory_data = c.fetchall()
    conn.close()
    return render_template('2nd.html', inventory=inventory_data)

@app.route('/services')
def services():
    return render_template('3rd.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        conn = sqlite3.connect('leads.db')
        c = conn.cursor()
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        message = request.form['message']
        c.execute('INSERT INTO leads VALUES (?,?,?,?)', (name, email, phone, message))
        conn.commit()
        conn.close()
        return redirect(url_for('1st.html'))
    else:
        return render_template('4th.html')

if __name__ == '__main__':
    app.run(debug=True)