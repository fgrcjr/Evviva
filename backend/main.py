from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import os
from supabase import create_client, Client

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Supabase client
supabase: Client = create_client(
    os.environ.get("SUPABASE_URL", ""),
    os.environ.get("SUPABASE_KEY", "")
)

class ContactMessage(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str

@app.post("/api/contact")
async def contact(message: ContactMessage):
    try:
        # Insert contact message into Supabase
        data = supabase.table("contact_messages").insert({
            "name": message.name,
            "email": message.email,
            "phone": message.phone,
            "message": message.message,
            "status": "unread"
        }).execute()
        
        return {"message": "Message sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/programs")
async def get_programs():
    try:
        # Fetch programs from Supabase
        data = supabase.table("programs").select("*").execute()
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))