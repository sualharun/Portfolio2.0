# Sual Harun — Portfolio

Full-stack portfolio. **React (Vite) frontend + Spring Boot backend + H2.**

## Stack

- **Frontend:** React 18, Vite — in `frontend/`
- **Backend:** Java 17, Spring Boot 3.5, Spring Data JPA, Validation
- **Database:** H2 (file-based at `./data/portfolio.mv.db`)

## Project Structure

```
Portfolio/
├── pom.xml                          # Spring Boot build
├── frontend/                        # React app (Vite)
│   ├── package.json
│   ├── vite.config.js               # proxies /api -> localhost:8080 in dev
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── styles.css
│       ├── hooks/useScrollReveal.js
│       └── components/              # Nav, Hero, About, Projects, etc.
└── src/main/
    ├── java/com/sualharun/portfolio/
    │   ├── controller/              # REST endpoints
    │   ├── model/                   # JPA entities
    │   ├── repository/
    │   └── service/DataSeeder.java
    └── resources/
        ├── application.properties
        └── static/                  # Vite build output goes here
```

## Development — run both servers

**Terminal 1 — backend:**
```bash
mvn spring-boot:run
# → http://localhost:8080 (API + H2 console at /h2)
```

**Terminal 2 — frontend (hot reload):**
```bash
cd frontend
npm install          # first time only
npm run dev
# → http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `localhost:8080`. Edit any `.jsx` file and it hot-reloads instantly.

## Production build — one jar, one port

```bash
cd frontend && npm run build    # outputs to src/main/resources/static/
cd ..
mvn clean package
java -jar target/portfolio-1.0.0.jar
# → http://localhost:8080 serves React app + API together
```

## REST API

| Method | Endpoint                  | Purpose                      |
|--------|---------------------------|------------------------------|
| GET    | `/api/projects`           | All projects                 |
| GET    | `/api/experience`         | All experience               |
| GET    | `/api/certifications`     | All certifications           |
| GET    | `/api/extracurriculars`   | All extracurriculars         |
| POST   | `/api/contact`            | Submit a contact message     |

**POST /api/contact** body: `{ "name": "...", "email": "...", "message": "..." }`

## Admin

- **H2 console:** http://localhost:8080/h2 — JDBC URL `jdbc:h2:file:./data/portfolio`, user `sa`, blank password.
- Seed data lives in `DataSeeder.java`. First boot populates tables; subsequent boots skip if rows exist.
