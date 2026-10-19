from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="WU Connect API",
    description="Independent demo money-transfer prototype. No real money is moved.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
    ],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to WU Connect",
        "status": "running",
        "mode": "demo",
    }


@app.get("/api/services")
def services():
    return {
        "services": [
            {
                "id": "send",
                "name": "Send money",
                "description": "Explore a demo transfer",
            },
            {
                "id": "track",
                "name": "Track a transfer",
                "description": "Tracking will be added later",
            },
            {
                "id": "history",
                "name": "Transaction history",
                "description": "History will be added later",
            },
        ]
    }


@app.get("/api/transfer-demo")
def transfer_demo():
    return {
        "mode": "demo",
        "message": "No money has been sent.",
        "tracking_number": None,
    }