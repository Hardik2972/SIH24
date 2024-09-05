from gradio_client import Client

def generate_sql_query(user_question, create_table_statements, instructions):
    # Initialize the client
    client = Client("osanseviero/mistral-super-fast")

    # Construct the prompt
    prompt = f"""<s>[INST] You are a SQL expert. Generate a PostgreSQL INSERT query based on the following information:

User Request: {user_question}

Instructions:
{instructions}

Table Structure:
{create_table_statements}

Requirements:
1. Use standard PostgreSQL syntax
2. The query should insert data into the customer_tickets table
3. Set the number of adult and child tickets as specified in the user request
4. Use appropriate data types for each column
5. The query must be executable without modification
6. Do not include any explanatory text, only the SQL query

Generate only the SQL query, without any additional explanation. [/INST]

"""

    # Make the API call
    result = client.predict(
        prompt=prompt,
        temperature=0.6,
        max_new_tokens=256,
        top_p=0.9,
        repetition_penalty=1.2,
        api_name="/chat"
    )
    print(result)
    print(type(result))

    # Extract the SQL query from the result
    try:
        # Split the result to isolate the SQL code block
        sql_query = result.replace("```sql", "").replace("```</s>", "")
    except IndexError:
        sql_query = "Error: SQL query not found in the response."

    print(sql_query)
    return sql_query

# Example usage:
# user_question = "What are the top 5 customers by total order amount?"
# instructions = "Use PostgreSQL syntax."
# create_table_statements = """
# CREATE TABLE customers (
#   customer_id INT PRIMARY KEY,
#   name VARCHAR(100),
#   email VARCHAR(100)
# );

# """

# sql_query = generate_sql_query(user_question, create_table_statements, instructions)
# print(sql_query)
