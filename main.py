
from backend.main import app


@app.get("/api/transfer-demo")
def transfer_demo():
    return {
        "mode": "demo",
        "message": "No money has been sent.",
        "tracking_number": None,
    }
