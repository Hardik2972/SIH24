import psycopg2
from sql_model import generate_sql_query
import os
from dotenv import load_dotenv

default_user_question = ""

def execute_sql_query(user_question, create_table_statements="""
CREATE TABLE customer_tickets (
    customer_id SERIAL PRIMARY KEY,
    number_adult_tickets INTEGER NOT NULL DEFAULT 0,
    number_child_tickets INTEGER NOT NULL DEFAULT 0,
);
""", instructions='''Generate a PostgreSQL INSERT statement that does the following:
1. Inserts a new row into the customer_tickets table
2. Sets the number_adult_tickets to the number of adult tickets requested by the customer
3. Sets the number_child_tickets to the number of child tickets requested by the customer
4. Uses the DEFAULT value for the customer_id (as it's a SERIAL PRIMARY KEY)
5. Ensures that the values for number_adult_tickets and number_child_tickets are non-negative integers
The INSERT statement should be written in standard PostgreSQL syntax and be ready for immediate execution. Do not include any explanations or additional comments in your response, only the SQL statement.
'''):
    load_dotenv()
    connection_string = os.getenv('DATABASE_URL')
    
    conn = None
    cur = None
    
    try:
        # Connect to the database
        conn = psycopg2.connect(connection_string)
        print("Connected to the database")
        
        # Generate the SQL query
        sql_query = generate_sql_query(user_question, create_table_statements, instructions)
        
        # Create a cursor
        cur = conn.cursor()
        
        try:
            # Execute the SQL query
            cur.execute(sql_query)
            conn.commit()
            # Fetch the results
            print("Query executed succefully")
        
        except psycopg2.Error as e:
            print(f"Error executing query: {e}")
            return None
        
    except psycopg2.OperationalError as e:
        print(f"Connection failed: {e}")
        return None
    
    finally:
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()
            print("Connection closed")

# Example usage
# results = execute_sql_query(user_question, create_table_statements, instructions)

# Example usage:
user_question = "Insert a column for 5 adult ticket and 6 child tickets"
instructions = '''Generate a PostgreSQL INSERT statement that does the following:
1. Inserts a new row into the customer_tickets table
2. Sets the number_adult_tickets to the number of adult tickets requested by the customer
3. Sets the number_child_tickets to the number of child tickets requested by the customer
4. Uses the DEFAULT value for the customer_id (as it's a SERIAL PRIMARY KEY)
5. Ensures that the values for number_adult_tickets and number_child_tickets are non-negative integers
The INSERT statement should be written in standard PostgreSQL syntax and be ready for immediate execution. Do not include any explanations or additional comments in your response, only the SQL statement.
'''
create_table_statements = """
CREATE TABLE customer_tickets (
    customer_id SERIAL PRIMARY KEY,
    number_adult_tickets INTEGER NOT NULL DEFAULT 0,
    number_child_tickets INTEGER NOT NULL DEFAULT 0,
);
"""

results = execute_sql_query(user_question)

if results:
    print("Query executed successfully and returned results.")
else:
    print("Query execution failed or returned no results.")
