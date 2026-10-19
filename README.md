# WU Connect — Money Transfer Website & Mobile App

**A Python-powered financial technology prototype for exploring digital money transfers.**

WU Connect is an independent development project that aims to demonstrate how a modern money-transfer platform could work across a website and mobile application. The project focuses on a clean user interface, a Python backend, a shared API, and a foundation for future transaction management features.

> **Disclaimer:** WU Connect is an independent prototype. It is not affiliated with, endorsed by, or an official product of Western Union or Standard Bank. It does not currently process real money transfers. Any references to these companies describe design inspiration or the broader financial services industry.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Project Objectives](#project-objectives)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Backend](#running-the-backend)
- [Running the Website](#running-the-website)
- [Running the Mobile App](#running-the-mobile-app)
- [API Documentation](#api-documentation)
- [How the System Works](#how-the-system-works)
- [Security Considerations](#security-considerations)
- [Current Limitations](#current-limitations)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Reporting Issues](#reporting-issues)
- [License](#license)
- [Author](#author)

---

## Project Overview

Digital financial services have changed the way people manage payments and transfer money. Customers increasingly expect accessible, responsive, and easy-to-use digital platforms.

WU Connect explores the development of such a platform using Python and modern web technologies.

The project consists of three main components:

1. **Website:** A responsive interface for exploring money-transfer services.
2. **Python backend:** A REST API built with FastAPI to provide data and services to the client applications.
3. **Mobile application:** A Python-based application built with Flet, designed to provide a mobile-friendly experience.

The long-term goal is to connect these components to a shared backend and database, creating a consistent experience across supported devices.

The initial implementation is a learning and demonstration project. Features such as customer authentication, persistent transaction history, live exchange rates, and real payment processing must be implemented and tested separately before production use.

## Project Objectives

The main objectives are to:

- Build a professional, responsive financial services website.
- Develop a mobile interface using Python.
- Create a reusable backend API with FastAPI.
- Learn how frontend applications communicate with a backend.
- Explore database integration and transaction management.
- Develop secure customer authentication.
- Practise software development, debugging, Git and GitHub workflows.
- Establish a foundation for future integration with authorised financial service providers.

## Features

### Website

The website is designed to provide:

- A modern landing page.
- Responsive navigation.
- A money-transfer demonstration form.
- Amount input in South African rand (ZAR).
- Destination selection.
- Service overview cards.
- A connection to the Python backend.
- Basic client-side input validation.
- A mobile-responsive layout.

### Python Backend

The FastAPI backend currently provides demonstration endpoints for:

- Checking API availability.
- Retrieving available demo services.
- Testing the transfer workflow without moving money.
- Exploring the API through automatically generated documentation.

### Mobile Application

The Flet mobile application demonstrates:

- A mobile-style dashboard.
- Transfer amount input.
- Destination selection.
- Basic input validation.
- Demo transfer previews.
- Service navigation elements.

### Planned Features

The following features are planned but should not be considered operational until implemented and tested:

- Customer registration and login.
- Secure password management.
- Identity verification.
- Persistent customer profiles.
- Transaction history.
- Transfer tracking.
- Exchange-rate integration.
- Fee calculation.
- Authorised payment-provider integration.
- Android and iOS application packaging.
- Administrative tools and audit logging.

---

## Screenshots

Screenshots will be added after the interfaces are tested and finalised.

Suggested screenshots:

| Screenshot | Description |
|---|---|
| `docs/images/website-homepage.png` | Website homepage |
| `docs/images/transfer-form.png` | Demo transfer form |
| `docs/images/mobile-dashboard.png` | Mobile application dashboard |
| `docs/images/api-docs.png` | FastAPI documentation |

To add a screenshot:

1. Create the `docs/images/` directory.
2. Save your screenshot in that directory.
3. Commit and push it to GitHub.
4. Reference it in this README.

Example:

```markdown
![WU Connect homepage](docs/images/website-homepage.png)
```

Only add screenshots of features that actually exist in your application.

## Technology Stack

| Technology | Purpose |
|---|---|
| Python | Backend and mobile application development |
| FastAPI | REST API framework |
| Uvicorn | ASGI server for running the backend |
| Flet | Python-based user interface and mobile development |
| HTML | Website structure |
| CSS | Website styling and responsive layout |
| JavaScript | Browser interactions and API requests |
| SQLite | Planned local development database |
| PostgreSQL | Potential production database |
| Git | Version control |
| GitHub | Source code hosting and collaboration |
| Visual Studio Code | Development environment |

## Project Structure

The intended project structure is:

```text
wu-connect/
├── backend/
│   └── main.py
├── frontend/
│   ├── index.html
│   └── mobile_app.py
├── docs/
│   └── images/
├── requirements.txt
├── .gitignore
├── README.md
└── .venv/
```

**Important:** The `.venv/` directory is a local development environment and should not be committed to GitHub. The actual repository should include the source files and dependency list, not the local environment.

The `docs/images/` directory is optional and can be added when screenshots are available.

## Getting Started

### Prerequisites

Before running the project, install:

- Windows 11, macOS, or a supported Linux distribution.
- Python 3.11 or another version supported by the installed dependencies.
- Visual Studio Code.
- Git.
- A modern web browser.

Python can be downloaded from:

https://www.python.org/downloads/

Git can be downloaded from:

https://git-scm.com/downloads

### 1. Clone the Repository

Replace `YOUR_USERNAME` with your actual GitHub username and use your repository's actual name.

```bash
git clone https://github.com/YOUR_USERNAME/wu-connect.git
```

Navigate into the project directory:

```bash
cd wu-connect
```

Open the project in VS Code:

```bash
code .
```

### 2. Create a Virtual Environment

On Windows PowerShell:

```powershell
py -m venv .venv
```

Activate the environment:

```powershell
.\.venv\Scripts\Activate.ps1
```

If PowerShell blocks script execution, you can temporarily allow activation scripts for the current terminal session:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1
```

### 3. Install Dependencies

Install the dependencies listed in `requirements.txt`:

```powershell
python -m pip install -r requirements.txt
```

If dependencies have not yet been recorded, install the required packages:

```powershell
python -m pip install fastapi "uvicorn[standard]" flet
```

For reproducible installations, the dependency versions should be tested and pinned before a production release.

## Running the Backend

From the root of the project, activate the virtual environment and run:

```powershell
python -m uvicorn backend.main:app --reload
```

The backend should become available at:

- **API homepage:** http://127.0.0.1:8000/
- **Interactive API documentation:** http://127.0.0.1:8000/docs
- **Alternative API documentation:** http://127.0.0.1:8000/redoc

The `--reload` option automatically restarts the development server when source code changes. It should not be used as a production deployment configuration.

To stop the server, press `Ctrl+C` in the terminal.

## Running the Website

The website is located at:

```text
frontend/index.html
```

### Option 1: VS Code Live Server

1. Open the project in VS Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `frontend/index.html`.
4. Select **Open with Live Server**.
5. Confirm that the website opens in your browser.

The local address may resemble:

```text
http://127.0.0.1:5500/frontend/index.html
```

The exact port and URL depend on your Live Server configuration.

Keep the backend running separately in its own terminal if the website needs to retrieve data from the API.

### Backend Connection

The frontend communicates with the development backend using JavaScript `fetch()` requests.

The development API address is:

```javascript
const API_URL = "http://127.0.0.1:8000";
```

This address is suitable for local development only. It must be changed to the appropriate backend URL when the website is deployed.

If requests fail, check:

- Whether the backend is running.
- Whether the API URL is correct.
- Whether the browser console reports a JavaScript error.
- Whether the browser reports a CORS error.
- Whether the backend terminal shows an exception.

## Running the Mobile App

The Python mobile interface is located at:

```text
frontend/mobile_app.py
```

From the root of the project, run:

```powershell
python frontend/mobile_app.py
```

The application should open in a desktop window if the installed Flet version and environment support that workflow.

The initial implementation is a mobile-style interface and is not automatically a published Android or iOS application.

To package and distribute the app, follow the current Flet documentation:

https://flet.dev/docs/

Mobile packaging, platform-specific permissions, testing and signing must be completed before distribution.

## API Documentation

The backend exposes the following demonstration endpoints.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Returns the API welcome message and status |
| GET | `/api/services` | Returns a list of demonstration services |
| GET | `/api/transfer-demo` | Returns a demonstration transfer response |

### Example: API Homepage

Request:

```http
GET /
```

Example response:

```json
{
  "message": "Welcome to WU Connect",
  "status": "running",
  "mode": "demo"
}
```

### Example: Services

Request:

```http
GET /api/services
```

The response contains the available demonstration services.

### Example: Transfer Demonstration

Request:

```http
GET /api/transfer-demo
```

Example response:

```json
{
  "mode": "demo",
  "message": "No money has been sent.",
  "tracking_number": null
}
```

These endpoints are for demonstration purposes. The transfer endpoint does not create a transaction, reserve funds or initiate a payment.

## How the System Works

The intended architecture is:

```text
Website (HTML, CSS, JavaScript)
                 |
                 v
          FastAPI Backend
                 |
                 v
          Application Logic
                 |
                 v
       Database and Integrations
                 ^
                 |
          Flet Mobile App
```

The website and mobile app will use the same backend API.

This approach allows shared functionality to be maintained in one place. For example, once implemented, customer profiles and transaction records could be accessed by both applications through appropriately authenticated API endpoints.

The database and financial integrations are part of the planned architecture and should not be assumed to exist in the current prototype.

## Security Considerations

Financial applications require careful security design.

Before any real customer data or financial transactions are introduced, the project must address:

- Secure authentication and authorisation.
- Password hashing using an established password-hashing algorithm.
- HTTPS for deployed services.
- Server-side input validation.
- Rate limiting and abuse prevention.
- Secure session or token management.
- Protection against unauthorised access to customer data.
- Secret management through environment variables or an appropriate secrets manager.
- Database access controls and encrypted backups where appropriate.
- Audit logging and monitoring.
- Data retention and privacy requirements.
- Identity verification and anti-money-laundering obligations where applicable.
- Payment-provider authorisation and transaction reconciliation.

The development CORS configuration should also be restricted to the actual trusted frontend origins in production.

Never commit passwords, API keys, private certificates, access tokens or customer information to GitHub.

The prototype must not be used to collect real banking credentials or process real customer funds.

## Current Limitations

The initial version is a demonstration application.

Known limitations include:

- No implemented customer authentication.
- No persistent customer database.
- No real transaction creation.
- No live exchange-rate service.
- No real payment processing.
- No production-grade transfer tracking.
- No completed mobile application distribution process.
- No verified production security or regulatory approval.

The project roadmap describes intended development work, not existing functionality.

## Roadmap

### Phase 1 — Core Prototype

- [x] Create the initial website interface.
- [x] Create a FastAPI backend.
- [x] Add demonstration API endpoints.
- [x] Create an initial Flet mobile interface.
- [ ] Verify the website-to-backend connection.
- [ ] Test the application on different screen sizes.
- [ ] Add screenshots and documentation.

### Phase 2 — Application Foundation

- [ ] Introduce a database and database migrations.
- [ ] Design the customer and transaction data models.
- [ ] Implement secure registration and login.
- [ ] Add input validation and structured error handling.
- [ ] Add automated tests.
- [ ] Configure development and production settings.

### Phase 3 — Transfer Demonstrations

- [ ] Build a simulated transfer workflow.
- [ ] Add recipient management.
- [ ] Add transaction history.
- [ ] Implement demo transfer references and status changes.
- [ ] Integrate a verified exchange-rate data source.
- [ ] Display transparent fee and currency-conversion estimates.

### Phase 4 — Deployment and Mobile Development

- [ ] Deploy the website to a suitable hosting platform.
- [ ] Deploy the backend to a secure server.
- [ ] Configure HTTPS and environment variables.
- [ ] Package and test the mobile application.
- [ ] Establish monitoring, backups and recovery procedures.

### Phase 5 — Financial Service Readiness

- [ ] Investigate applicable South African financial regulations.
- [ ] Determine the required licences, registrations and partnerships.
- [ ] Contact authorised payment and money-transfer providers.
- [ ] Complete independent security and compliance reviews.
- [ ] Obtain the necessary authorisations before processing real transfers.

## Contributing

Contributions and constructive feedback are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the relevant tests.
5. Submit a pull request explaining the changes.

Example:

```bash
git checkout -b feature/your-feature
```

Please avoid including secrets, customer data or other sensitive information in commits and pull requests.

## Reporting Issues

If you discover a bug or have a feature request, open an issue in the GitHub repository.

When reporting a bug, include:

- A clear description of the problem.
- The steps required to reproduce it.
- The expected behaviour.
- The actual behaviour.
- Relevant error messages.
- Your operating system and Python version.

Remove passwords, tokens and personal information from logs before sharing them.

## License

A license has not yet been selected.

Before making the project available for reuse, add a `LICENSE` file that reflects your intended permissions and restrictions. Until then, do not assume that others have permission to redistribute or reuse the code.

This project is an independent prototype and does not grant rights to third-party trademarks, branding or financial services.

## Author

**Project:** WU Connect  
**Developer:** Promedi Ilunga  
**GitHub:** https://github.com/Promza-20

WU Connect is being developed as a learning project focused on Python, web development, mobile application development, APIs and financial technology concepts.

---


