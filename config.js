const PORTFOLIO_DATA = {
  personal: {
    name: "Himanshu Pandey",
    title: "Founder @ Decode AI | Data Scientist & MLOps Engineer",
    subtitles: [
      "Founder @ Decode AI",
      "GenAI & Agentic AI Specialist",
      "MLOps & Pipeline Engineer",
      "Data Scientist @ IIT Madras",
      "Full-Stack AI Developer"
    ],
    institution: "Indian Institute of Technology (IIT) Madras",
    degree: "BS in Data Science and Applications",
    expectedGraduation: "Sept 2026",
    status: "Open to High-Impact Roles & AI Research",
    statusBadge: "Founder @ Decode AI | Open for Roles",
    location: "India (Remote / On-site)",
    email: "himanshupandey2166@gmail.com",
    phone: "+91-7652023417",
    github: "https://github.com/HimanshuPandey216",
    githubUsername: "HimanshuPandey216",
    linkedin: "https://linkedin.com/in/himanshu-pandey12",
    linkedinUsername: "himanshu-pandey12",
    resumeUrl: "assets/resume.html",
    decodeAiUrl: "https://decodeai-alpha.vercel.app/",
    bio: "Passionate Data Scientist, MLOps Engineer, and Founder of Decode AI — an open community knowledge platform for Artificial Intelligence, Machine Learning, and Data Science. Pursuing Data Science at IIT Madras with expertise in Agentic RAG multi-agent pipelines, LLM fine-tuning, and scalable cloud ML systems.",
    stats: [
      { label: "Decode AI Platform", value: "50+", suffix: "Resources" },
      { label: "Query Speedup", value: "~30%", suffix: "Faster" },
      { label: "ETL Optimization", value: "~40%", suffix: "Reduction" },
      { label: "MLOps Release Cycle", value: "~50%", suffix: "Shorter" }
    ]
  },

  skills: {
    "GenAI & Agentic AI": [
      { name: "LangGraph", level: 95, icon: "fa-project-diagram" },
      { name: "LangChain", level: 95, icon: "fa-link" },
      { name: "Agentic RAG", level: 92, icon: "fa-brain" },
      { name: "Qdrant Vector DB", level: 90, icon: "fa-database" },
      { name: "Gemini Embeddings", level: 90, icon: "fa-microchip" },
      { name: "NeMo Guardrails", level: 88, icon: "fa-shield-halved" },
      { name: "RAGAS Evaluation", level: 88, icon: "fa-chart-line" },
      { name: "Portkey Gateway", level: 85, icon: "fa-network-wired" },
      { name: "LangSmith & Logfire", level: 85, icon: "fa-glasses" },
      { name: "Model Context Protocol (MCP)", level: 88, icon: "fa-plug" },
      { name: "LLM Fine-Tuning (LoRA/QLoRA)", level: 85, icon: "fa-sliders" },
      { name: "Hugging Face / TRL", level: 85, icon: "fa-robot" },
      { name: "Prompt Engineering", level: 95, icon: "fa-terminal" }
    ],
    "MLOps & Cloud": [
      { name: "MLflow", level: 92, icon: "fa-flask" },
      { name: "DVC & DagsHub", level: 90, icon: "fa-code-branch" },
      { name: "Docker", level: 92, icon: "fa-docker" },
      { name: "Grafana & Prometheus", level: 88, icon: "fa-chart-area" },
      { name: "AWS (EC2, S3, ECR, IAM)", level: 88, icon: "fa-aws" },
      { name: "CI/CD (GitHub Actions)", level: 90, icon: "fa-arrows-rotate" },
      { name: "Model Registry", level: 88, icon: "fa-boxes-stacked" },
      { name: "Linux Administration", level: 85, icon: "fa-terminal" }
    ],
    "Backend & DB": [
      { name: "Python", level: 98, icon: "fa-python" },
      { name: "FastAPI", level: 92, icon: "fa-bolt" },
      { name: "Flask", level: 88, icon: "fa-pepper-hot" },
      { name: "PostgreSQL & Query Optimization", level: 90, icon: "fa-database" },
      { name: "MongoDB Atlas", level: 88, icon: "fa-leaf" },
      { name: "ETL Pipelines", level: 92, icon: "fa-filter" },
      { name: "SQLAlchemy & Celery", level: 85, icon: "fa-gears" },
      { name: "Redis & JWT Auth", level: 85, icon: "fa-key" }
    ],
    "ML & Data Science": [
      { name: "Scikit-Learn", level: 92, icon: "fa-chart-pie" },
      { name: "XGBoost", level: 90, icon: "fa-bolt-lightning" },
      { name: "PyTorch & TensorFlow", level: 85, icon: "fa-fire" },
      { name: "Pandas & NumPy", level: 95, icon: "fa-table" },
      { name: "Exploratory Data Analysis (EDA)", level: 95, icon: "fa-magnifying-glass-chart" },
      { name: "Algorithmic Feature Engineering", level: 90, icon: "fa-calculator" }
    ],
    "Frontend": [
      { name: "React", level: 80, icon: "fa-react" },
      { name: "Vue.js", level: 78, icon: "fa-vuejs" },
      { name: "JavaScript (ES6+)", level: 85, icon: "fa-js" },
      { name: "HTML5 / CSS3", level: 88, icon: "fa-html5" }
    ]
  },

  projects: [
    {
      id: "decode-ai",
      title: "Decode AI — Open Knowledge Platform for AI & ML",
      subtitle: "Community-driven knowledge platform for Artificial Intelligence, Machine Learning, Roadmaps, and Research.",
      category: "EdTech & Open Source AI",
      image: "assets/images/project_decodeai.jpg",
      live: "https://decodeai-alpha.vercel.app/",
      github: "https://github.com/HimanshuPandey216",
      tech: ["HTML5", "CSS3 / Glassmorphism", "JavaScript (ES6+)", "Neural Canvas API", "Vercel", "Open Source"],
      highlights: [
        "Founded and architected Decode AI ('Learn AI. Build Future.'), a community-driven knowledge platform covering 16+ core AI/ML domains.",
        "Featured interactive 23-phase AI Engineer Roadmap 2026, Machine Learning Engineer paths, and Generative AI specialist guides.",
        "Curated 50+ handpicked study resources, simplified research paper breakdowns (Attention, LoRA, ResNet), and technical book summaries.",
        "Integrated interactive neural canvas visualizer, quick command search (⌘K), dark/light theme engine, and open-source contribution workflows.",
        "Built responsive, accessible glassmorphic design system deployed live at decodeai-alpha.vercel.app."
      ]
    },
    {
      id: "agentic-rag",
      title: "Enterprise Agentic RAG — Multi-Agent LLM Pipeline",
      subtitle: "Production-grade multi-agent cyclic RAG system with safety guardrails and evaluation tracing.",
      category: "GenAI & Agentic AI",
      image: "assets/images/project_rag.jpg",
      github: "https://github.com/HimanshuPandey216/ragproject",
      tech: ["LangChain", "LangGraph", "Portkey", "Qdrant", "Gemini Embeddings", "FlashRank", "NeMo Guardrails", "RAGAS", "LangSmith"],
      highlights: [
        "Architected cyclic multi-step reasoning with conversational memory via LangChain/LangGraph node graphs (Planner-Retriever-Responder).",
        "Implemented NeMo Guardrails for pre-retrieval security filtering (jailbreak, injection, off-topic detection).",
        "Integrated Portkey LLM gateway for automatic primary/fallback failover across Groq (Llama 3.3 70B) keys.",
        "Built on-device document parsing (PDF, HTML, DOCX, PPTX) without external OCR dependency.",
        "Constructed vector retrieval engine on Qdrant Cloud with 3072-dim Gemini embeddings & FlashRank local reranking.",
        "Validated system quality using a 6-metric RAGAS evaluation suite and full LangSmith/Logfire distributed tracing."
      ]
    },
    {
      id: "phishing-mlops",
      title: "Network Security — Phishing Detection MLOps Platform",
      subtitle: "End-to-end automated MLOps pipeline for real-time URL phishing detection with AWS cloud CI/CD.",
      category: "MLOps & Cloud",
      image: "assets/images/project_phishing.jpg",
      github: "https://github.com/HimanshuPandey216/networksecurity",
      tech: ["Python", "FastAPI", "MLflow", "Docker", "MongoDB", "AWS (EC2, S3, ECR)", "DagsHub", "GitHub Actions"],
      highlights: [
        "Engineered an end-to-end production MLOps platform classifying URLs as phishing or legitimate.",
        "Modular pipeline design covering data ingestion, schema validation/drift detection, feature engineering, and automated model training.",
        "Benchmarked 5 ML classifiers (Random Forest, Decision Tree, Gradient Boosting, Logistic Regression, AdaBoost) tracked via MLflow & DagsHub.",
        "Exposed model inference & retraining API endpoints using FastAPI backed by MongoDB Atlas.",
        "Automated CI/CD workflow with GitHub Actions to build Docker images, push to Amazon ECR, and deploy via self-hosted EC2 runners with S3 artifact sync."
      ]
    },
    {
      id: "shodhshala-mlops",
      title: "Financial Data Engineering & MLOps Engine",
      subtitle: "High-frequency market data pipeline with feature store, model drift detection, and automated trading backtests.",
      category: "MLOps & Data Engineering",
      image: "assets/images/project_fintech.jpg",
      github: "https://github.com/HimanshuPandey216",
      tech: ["PostgreSQL", "Python", "MLflow", "DVC", "Docker", "AWS (EC2, S3)", "Grafana", "Prometheus"],
      highlights: [
        "Designed and maintained PostgreSQL databases containing 1M+ rows of high-frequency financial data with advanced indexing, cutting query response time by ~30%.",
        "Built automated Python ETL ingestion & transformation pipelines, cutting dataset preprocessing time by ~40%.",
        "Architected end-to-end MLOps pipeline with DVC + DagsHub data versioning, containerized via Docker on AWS, reducing release cycles by ~50%.",
        "Configured real-time Grafana + Prometheus monitoring dashboards for data drift detection and latency degradation alerts.",
        "Engineered 30+ market signals from raw tick data; developed and backtested trading strategies resulting in a ~12% boost in average win rate."
      ]
    }
  ],

  experience: [
    {
      role: "Founder & Lead Architect",
      company: "Decode AI",
      location: "Remote / Open Source",
      period: "2026 – Present",
      type: "Founder",
      details: [
        "Founded Decode AI ('Learn AI. Build Future.'), a community-driven knowledge platform for Artificial Intelligence, Data Science, and Machine Learning.",
        "Authored the 23-phase AI Engineer Roadmap 2026 guiding learners from Python fundamentals to production LLM agents and MLOps.",
        "Curated 50+ study resources, simplified research paper breakdowns, technical book summaries, and built an open-source contribution workflow."
      ]
    },
    {
      role: "Data Science & MLOps Intern",
      company: "Shodhshala",
      location: "Remote",
      period: "Jan 2026 – June 2026",
      type: "Internship",
      details: [
        "Designed & maintained PostgreSQL databases (1M+ rows high-frequency financial data) with query optimization & indexing, reducing query latency by ~30%.",
        "Built automated ETL pipelines in Python, cutting data preprocessing time by ~40% for real-time feature availability.",
        "Architected end-to-end MLOps pipeline (data ingestion, feature engineering, MLflow tracking, DVC data versioning) containerized with Docker on AWS EC2/S3, reducing release cycles by ~50%.",
        "Configured Prometheus + Grafana monitoring dashboards for data drift detection and live strategy performance alerting.",
        "Engineered 30+ market features and backtested algorithmic trading strategies, improving signal quality by ~15% and win rate by ~12%."
      ]
    }
  ],

  education: [
    {
      institution: "Indian Institute of Technology (IIT) Madras",
      location: "Chennai, India",
      degree: "BS in Data Science and Applications",
      period: "Expected Sept 2026",
      coursework: "Diploma in Programming & App Dev — Data Structures, DBMS, Algorithms, Statistics, Machine Learning"
    }
  ],

  certifications: [
    {
      title: "NPTEL Star Performer",
      issuer: "IIT Roorkee / NPTEL",
      highlight: "Invited by IIT Roorkee for consistent nationwide excellence across NPTEL certification exams.",
      badge: "Star Award"
    },
    {
      title: "NPTEL Elite Topper (Data Mining)",
      issuer: "NPTEL",
      highlight: "Nationwide Top Ranker in Data Mining; Silver Elite in Cloud Computing & Data and Decision Making.",
      badge: "Top Ranker"
    },
    {
      title: "Claude Code 101",
      issuer: "Anthropic",
      highlight: "Specialized certification in Anthropic's Claude Code environment and agentic AI tools.",
      badge: "AI Agent"
    },
    {
      title: "Generative AI",
      issuer: "Udemy",
      highlight: "Comprehensive mastery of LLM architectures, diffusion models, and prompt engineering.",
      badge: "GenAI"
    },
    {
      title: "MLOps Bootcamp: Mastering AI Operations",
      issuer: "Udemy",
      highlight: "Production deployment, experiment tracking, model monitoring, and pipeline automation.",
      badge: "MLOps"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "GeeksforGeeks",
      highlight: "AWS Core Cloud Infrastructure, IAM, S3, EC2, ECR, and Cloud Architecture best practices.",
      badge: "AWS Cloud"
    }
  ]
};
