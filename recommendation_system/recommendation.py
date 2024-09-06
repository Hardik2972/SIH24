from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def extract_text_from_pdf(pdf_file):
    """Extracts text from a single PDF file."""
    text = ""
    pdf_reader = PdfReader(pdf_file)
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

def split_text_into_chunks(text):
    """Splits text into chunks for processing."""
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    return text_splitter.split_text(text)

def create_vector_store(text_chunks):
    """Creates a vector store from text chunks."""
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    return vector_store

def get_response_from_query(vector_store, user_query):
    """Generates a response to the user query using the vector store."""
    docs = vector_store.similarity_search(user_query)
    model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    prompt_template = """
    Answer the question in 100 words based on the provided context. If there is a match in the context, adopt the role of a salesperson and try to sell the product to the user.If there no context match return " "
    Context:\n {context}?\n
    Question: \n{question}\n
    Answer:
    """
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    response = chain({"input_documents": docs, "question": user_query}, return_only_outputs=True)
    return response["output_text"]

def process_pdf_and_query(user_query):
    """Processes a PDF file and user query to provide a response."""
    # Extract and process text from the PDF
    raw_text = '''The Tyrannosaurus Rex, often abbreviated as T-Rex, is one of the most iconic dinosaurs, known for its massive size and formidable presence. Among the many fascinating aspects of this prehistoric giant, its skull stands out as a remarkable feature, both in terms of its physical characteristics and its significance in paleontological studies. The T-Rex skull replica serves as a testament to the creature's evolutionary adaptations and its role as a top predator during the late Cretaceous period.
Physical Description and Construction
The T-Rex skull is a marvel of natural engineering, characterized by its massive size and unique structural features. Real T-Rex skulls can measure up to 1.54 meters (5 feet) in length, showcasing a complex architecture designed to support a powerful bite force. The skull is wide at the rear and narrows towards the snout, a design that provides excellent binocular vision. This anatomical feature is crucial for a predator that relied heavily on its sight to hunt and capture prey. Replicas of the T-Rex skull are crafted with meticulous attention to detail, often using materials such as polyresin, fiberglass, and steel to ensure durability and authenticity. These materials allow for intricate detailing, capturing the nuances of the T-Rex's cranial structure, including the large fenestrae (openings) that reduce weight and enhance the skull's strength. The use of lightweight yet robust materials ensures that these replicas are not only visually impressive but also suitable for various display environments, from museums to private collections.
Scientific and Educational Significance
The T-Rex skull is not just a display piece; it is a crucial tool for education and scientific inquiry. The skull's design reflects the evolutionary adaptations that made the T-Rex one of the most efficient predators of its time. The U-shaped upper jaw, for example, allowed the T-Rex to exert tremendous pressure, capable of crushing bones and tearing through the flesh of its prey. This feature, along with the heterodonty (variation in tooth shape) observed in the T-Rex's dentition, provides insights into the dietary habits and ecological niche of this apex predator. Educational replicas of the T-Rex skull are often used in classrooms and museums to engage audiences of all ages. They serve as tangible connections to the past, sparking curiosity and encouraging exploration into the world of dinosaurs. By studying these replicas, students and enthusiasts can gain a deeper understanding of the T-Rex's anatomy and its role within the broader context of dinosaur evolution.'''
    text_chunks = split_text_into_chunks(raw_text)
    # Create a vector store from text chunks
    vector_store = create_vector_store(text_chunks)
    
    # Get response for the user query
    response = get_response_from_query(vector_store, user_query)
    return response

pdf_file = "t_rex.pdf"
user_query = "tell me about heian era"
response = process_pdf_and_query(user_query)
print(response)
