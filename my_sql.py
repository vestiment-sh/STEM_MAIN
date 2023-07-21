#import library and use pip command to download package
import mysql.connector

#Create the connection object
conn = mysql.connector.connect(
    host = "localhost", 
    user = 'root', 
    passwd = "password",
    database = "tutorialbase"
    )

#Allows us to execute SQL code
cursor = conn.cursor()

cursor.execute("CREATE DATABASE IF NOT EXISTS tutorialbase")

cursor.execute("CREATE TABLE IF NOT EXISTS person (id INT PRIMARY KEY, name VARCHAR(64))")
cursor.execute("CREATE TABLE IF NOT EXISTS thing (id INT PRIMARY KEY, name VARCHAR(64))")
cursor.execute("CREATE TABLE IF NOT EXISTS owns (person INT, thing INT, FOREIGN KEY (person) REFERENCES person(id), FOREIGN KEY (thing) REFERENCES thing(id));")


cursor.execute("SHOW TABLES")

for table in cursor:
    print(table)

cursor.execute("""
INSERT INTO person (id, name) VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie');
""")

cursor.execute("""
INSERT INTO thing (id, name) VALUES
(1, 'Apple'),
(2, 'Box'),
(3, 'Computer');
""")

cursor.execute("""
INSERT INTO owns (person, thing) VALUES
(2, 1),
(2, 3),
(3, 2);
""")

class Person:

    def __init__(self, id=None, name=None):
        self.id = id
        self.name = name
    
    def print_info(self):
        print(self.id, self.name)
    
    def from_result(self, row):
        self.id = row[0]
        self.name = row[1]


#Lines 63 and 64 are considered bad practice, considered SQL Injection. Recommended to use "prepared statements"
    def to_database(self, cursor):
        cursor.execute(f"INSERT INTO person (id, name) VALUES ({self.id}, '{self.name}');")

cursor.execute("SELECT * FROM person")

result = cursor.fetchall()

p1 = Person(8, "Mike")
p1.to_database(cursor)

for row in result:
    p = Person()
    p.from_result(row)
    p.print_info()

conn.commit()