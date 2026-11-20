const PORTFOLIO_DATA = {
  personal: {
    name: "HIMANSHU PANDEY",
    shortName: "Himanshu",
    tagline: "Building intelligent systems that solve real-world problems.",
    subtitle: "AI Engineer focused on Agentic AI, Machine Learning, LLM systems, Data Engineering and MLOps.",
    intro: "AI Engineer and Data Science undergraduate at IIT Madras, and Founder of Decode AI. Experienced in architecting production-ready Agentic AI systems, enterprise RAG pipelines with security guardrails, end-to-end MLOps architectures, and high-frequency data engineering pipelines.",
    availability: "Available for AI & MLOps Engineering Roles",
    institution: "Indian Institute of Technology (IIT) Madras",
    degree: "BS in Data Science and Applications",
    diploma: "Diploma in Programming & App Development",
    location: "India • Remote & On-site",
    email: "himanshupandey2166@gmail.com",
    phone: "+91-7652023417",
    github: "https://github.com/HimanshuPandey216",
    githubUsername: "HimanshuPandey216",
    linkedin: "https://linkedin.com/in/himanshu-pandey12",
    linkedinUsername: "himanshu-pandey12",
    resumeUrl: "assets/resume.html",
    decodeAiUrl: "https://decodeai-alpha.vercel.app/",
    metrics: [
      { value: "1M+", label: "Financial Data Rows Optimized", sub: "PostgreSQL & indexing" },
      { value: "~30%", label: "Query Latency Reduction", sub: "Execution time cut" },
      { value: "~40%", label: "ETL Preprocessing Speedup", sub: "Automated pipelines" },
      { value: "~50%", label: "MLOps Release Cycle Cut", sub: "Docker + DVC + AWS" }
    ]
  },

  skills: {
    "GenAI & Agentic AI": [
      "LangChain",
      "LangGraph",
      "Agentic RAG",
      "Qdrant",
      "Gemini Embeddings",
      "NeMo Guardrails",
      "RAGAS",
      "Portkey",
      "LangSmith",
      "MCP (Model Context Protocol)",
      "Prompt Engineering",
      "LLM Fine-Tuning",
      "LoRA / QLoRA",
      "PEFT",
      "Hugging Face Transformers",
      "TRL"
    ],
    "Machine Learning & Data Science": [
      "Scikit-learn",
      "XGBoost",
      "PyTorch",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
      "Data Visualization",
      "Random Forest",
      "Time Series Forecasting"
    ],
    "Programming & Backend": [
      "Python",
      "SQL",
      "FastAPI",
      "Flask",
      "REST APIs",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "JWT Authentication",
      "JavaScript (ES6+)"
    ],
    "Databases & Data Engineering": [
      "PostgreSQL",
      "MySQL",
      "MongoDB Atlas",
      "SQLite",
      "Query Optimization",
      "Schema Design",
      "ETL Pipelines",
      "DVC",
      "Data Versioning"
    ],
    "MLOps, DevOps & Cloud": [
      "Docker",
      "AWS (EC2, S3, IAM, ECR)",
      "MLflow",
      "DagsHub",
      "CI/CD (GitHub Actions)",
      "Grafana",
      "Prometheus",
      "Linux Administration",
      "Git / GitHub"
    ],
    "Supply Chain & Analytics": [
      "Inventory Management",
      "Demand Forecasting",
      "Logistics Analytics",
      "Procurement Fundamentals",
      "Supply Chain Analytics",
      "ABC Classification",
      "Safety Stock Optimization",
      "Microsoft Excel (Pivot Tables, Dashboards)"
    ],
    "Frontend": [
      "React",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Canvas API",
      "Responsive Layouts"
    ]
  },

  projects: [
    {
      id: "agentic-rag",
      title: "Enterprise Agentic RAG — Multi-Agent LLM Pipeline",
      category: "Agentic AI & LLMs",
      featured: true,
      image: "assets/images/project_rag.jpg",
      github: "https://github.com/HimanshuPandey216/ragproject",
      tech: ["LangChain", "LangGraph", "Portkey", "Qdrant", "Gemini Embeddings", "FlashRank", "NeMo Guardrails", "RAGAS", "LangSmith"],
      shortDesc: "Production-grade multi-agent cyclic RAG system with multi-step reasoning, security guardrails, and automated evaluation tracing.",
      highlights: [
        "Architected cyclic multi-step reasoning with conversational memory and dynamic query routing using LangChain and LangGraph node graphs (Planner-Retriever-Responder).",
        "Implemented NeMo Guardrails for pre-retrieval input filtering against prompt injection, jailbreaks, and off-topic queries.",
        "Integrated Portkey LLM gateway for automatic primary and fallback failover across Groq (Llama 3.3 70B) API keys.",
        "Built on-device document parsing supporting PDF, HTML, DOCX, and PPTX with zero external OCR dependencies.",
        "Constructed vector retrieval layer on Qdrant Cloud with 3072-dim Gemini embeddings and FlashRank local reranking.",
        "Validated system quality with a 6-metric RAGAS evaluation suite and complete LangSmith/Logfire distributed execution tracing."
      ]
    },
    {
      id: "phishing-mlops",
      title: "Network Security — Phishing Detection MLOps Platform",
      category: "MLOps & Systems",
      featured: true,
      image: "assets/images/project_phishing.jpg",
      github: "https://github.com/HimanshuPandey216/networksecurity",
      tech: ["Python", "FastAPI", "MLflow", "Docker", "MongoDB", "AWS (EC2, S3, ECR)", "DagsHub", "GitHub Actions"],
      shortDesc: "End-to-end automated MLOps platform classifying URLs in real time with schema validation, drift detection, and automated CI/CD.",
      highlights: [
        "Engineered an end-to-end production MLOps platform to classify URLs as phishing or legitimate with modular pipeline architecture.",
        "Modular pipeline design spanning automated data ingestion, schema validation, data drift detection, feature transformation, and model training.",
        "Benchmarked 5 classifiers (Random Forest, Decision Tree, Gradient Boosting, Logistic Regression, AdaBoost) tracked via MLflow and DagsHub.",
        "Exposed model inference and retraining microservice endpoints via FastAPI backed by MongoDB Atlas.",
        "Automated CI/CD with GitHub Actions to build and push Docker containers to Amazon ECR, deploying via a self-hosted EC2 runner with S3 artifact sync."
      ]
    },
    {
      id: "contextgate",
      title: "ContextGate — Governed Context Layer for AI Agents",
      category: "Agentic AI & LLMs",
      featured: true,
      image: "assets/images/project_contextgate.jpg",
      github: "https://github.com/HimanshuPandey216",
      tech: ["Python", "FastAPI", "Vector Search", "Policy Engine", "Audit Logging", "Security"],
      shortDesc: "Governed context mediation layer between autonomous LLM agents and sensitive enterprise data stores with policy enforcement.",
      highlights: [
        "Architected an enterprise-grade context mediation layer governing agent interactions with private enterprise data stores.",
        "Hybrid context retrieval across structured and unstructured data with real-time privacy filtering and automatic PII redaction.",
        "Dynamic context ranking and comprehensive source provenance tracking to prevent hallucinations and enforce auditability.",
        "Granular agent action policies preventing unauthorized tool calls, API dispatch, or out-of-scope database queries.",
        "Tamper-evident audit logging and hardened defenses against adversarial prompt injection and context contamination."
      ]
    },
    {
      id: "decode-ai",
      title: "Decode AI — Open Knowledge Platform for AI & ML",
      category: "Open Source & Platforms",
      featured: true,
      image: "assets/images/project_decodeai.jpg",
      live: "https://decodeai-alpha.vercel.app/",
      github: "https://github.com/HimanshuPandey216",
      tech: ["HTML5", "CSS3 / Editorial", "JavaScript (ES6+)", "Neural Canvas API", "Vercel"],
      shortDesc: "Community-driven knowledge platform covering 16+ AI domains, 23-phase roadmaps, simplified research papers, and study guides.",
      highlights: [
        "Founded and architected Decode AI ('Learn AI. Build Future.'), an open knowledge platform spanning 16+ core AI/ML domains.",
        "Authored the 23-phase interactive AI Engineer Roadmap 2026, guiding learners from Python fundamentals to production agentic LLM systems.",
        "Curated 50+ handpicked study resources, simplified seminal research paper breakdowns (Attention, LoRA, ResNet), and technical book summaries.",
        "Engineered interactive neural canvas visualization, quick command palette search (⌘K), and open-source contributor workflows.",
        "Deployed live on Vercel at decodeai-alpha.vercel.app."
      ]
    },
    {
      id: "demand-forecasting",
      title: "Inventory Demand Forecasting & Replenishment Optimization",
      category: "Data Science & Analytics",
      featured: false,
      image: "assets/images/project_supplychain.jpg",
      github: "https://github.com/HimanshuPandey216",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Excel"],
      shortDesc: "Machine learning time-series demand forecasting with trend, seasonality, safety stock, and automated replenishment planning.",
      highlights: [
        "Developed time-series demand forecasting models on historical retail sales data capturing trend and seasonality to estimate SKU requirements.",
        "Applied inventory planning models: dynamic safety stock calculation, statistical reorder points (ROP), and ABC classification.",
        "Flagged stockout risks and excess inventory holdings, recommending automated replenishment order quantities to cut holding costs."
      ]
    },
    {
      id: "supply-chain-analytics",
      title: "Supply Chain Analytics & Logistics Dashboard",
      category: "Data Science & Analytics",
      featured: false,
      image: "assets/images/project_supplychain.jpg",
      github: "https://github.com/HimanshuPandey216",
      tech: ["SQL", "Excel", "Python", "Data Visualization", "Dashboards"],
      shortDesc: "Operations analytics dashboard monitoring inventory levels, order fulfillment, transportation costs, and delivery performance.",
      highlights: [
        "Designed an operational analytics dashboard to monitor inventory levels, order fulfillment, transportation costs, and delivery performance.",
        "Constructed complex SQL queries and analytical models to track core KPIs: On-Time Delivery (OTD), Inventory Turnover, and Order Fulfillment Rate.",
        "Synthesized multi-source transactional data into operational intelligence to drive inventory optimization and logistics decisions."
      ]
    },
    {
      id: "shodhshala-mlops",
      title: "Financial Data Engineering & Algorithmic Trading MLOps Engine",
      category: "MLOps & Systems",
      featured: false,
      image: "assets/images/project_fintech.jpg",
      github: "https://github.com/HimanshuPandey216",
      tech: ["PostgreSQL", "Python", "MLflow", "DVC", "Docker", "AWS (EC2, S3)", "Grafana", "Prometheus"],
      shortDesc: "High-frequency financial data architecture with 30+ engineered market signals, DVC versioning, and Grafana drift alerts.",
      highlights: [
        "Managed and maintained PostgreSQL databases containing 1M+ rows of high-frequency financial data with advanced indexing, cutting query latency by ~30%.",
        "Built automated Python ETL pipelines to ingest and transform large-scale datasets, reducing preprocessing time by ~40%.",
        "Architected end-to-end MLOps pipeline with DVC + DagsHub data versioning and Docker on AWS, reducing release cycles by ~50%.",
        "Engineered 30+ features from raw market tick data; developed and backtested trading strategies resulting in ~12% higher win rate.",
        "Handled order-data pipelines processing 1,000+ orders/day across multiple broker APIs with validation checks and real-time alerts.",
        "Configured Grafana + Prometheus monitoring dashboards for data drift detection and latency degradation alerts in live trading strategies."
      ]
    }
  ],

  experience: [
    {
      role: "Data Science & MLOps Intern",
      company: "Shodhshala",
      location: "Remote",
      period: "Jan 2026 – June 2026",
      type: "Internship",
      details: [
        "Designed and maintained PostgreSQL databases (1M+ rows of high-frequency financial data) with query optimization and indexing strategies, reducing average query response time by ~30%.",
        "Built automated ETL pipelines in Python for ingesting, extracting, and transforming large-scale trading datasets, cutting preprocessing time by ~40% for real-time feature availability.",
        "Architected and deployed an end-to-end MLOps pipeline spanning data ingestion, feature engineering, model training, MLflow tracking, and DVC + DagsHub data versioning — containerized via Docker on AWS (EC2/S3), reducing model release cycles by ~50%.",
        "Configured Grafana + Prometheus monitoring dashboards for real-time model performance tracking, data drift detection, and automated alerting on latency and accuracy degradation.",
        "Engineered 30+ features from raw market data via modular Python scripts using Pandas and NumPy, improving model signal quality by ~15%; developed and backtested algorithmic trading strategies, improving average win rate by ~12%.",
        "Maintained order-data pipelines handling 1,000+ orders/day across multiple broker APIs with schema validation checks, monitoring, and real-time alerts."
      ]
    },
    {
      role: "Founder & Lead Architect",
      company: "Decode AI",
      location: "Remote • Open Source",
      period: "2026 – Present",
      type: "Leadership",
      details: [
        "Founded Decode AI ('Learn AI. Build Future.'), a community-driven knowledge platform for Artificial Intelligence, Machine Learning, and Data Science.",
        "Authored the 23-phase AI Engineer Roadmap 2026 guiding learners from Python fundamentals to production LLM agents and MLOps deployment.",
        "Curated 50+ study resources, simplified seminal research paper breakdowns, technical book summaries, and built an open-source contribution workflow."
      ]
    },
    {
      role: "Supply Chain Associate Trainee",
      company: "COLTE",
      location: "Chennai, India",
      period: "Dec 2026",
      type: "Trainee Program",
      details: [
        "Completed specialized program focused on Supply Chain Management, Inventory Optimization, Logistics, and Procurement fundamentals.",
        "Applied inventory planning models (ABC classification, safety stock calculations, demand forecasting) to support data-driven supply chain decisions."
      ]
    }
  ],

  education: [
    {
      institution: "Indian Institute of Technology (IIT) Madras",
      location: "Chennai, India",
      degree: "BS in Data Science and Applications",
      period: "Expected 2026 – 2027",
      details: "Diploma in Programming & App Development. Coursework: Data Structures, Database Management Systems (DBMS), Algorithms, Statistics, Machine Learning."
    },
    {
      institution: "COLTE",
      location: "Chennai, India",
      degree: "Supply Chain Associate Program",
      period: "December 2026",
      details: "Focus areas: Supply Chain Management, Inventory Optimization, Logistics, Procurement Fundamentals, and Analytics."
    }
  ],

  certifications: [
    {
      title: "NPTEL Star Performer",
      issuer: "IIT Roorkee / NPTEL",
      highlight: "Invited by IIT Roorkee for consistent nationwide excellence across NPTEL certification examinations.",
      badge: "Star Award"
    },
    {
      title: "NPTEL Elite Topper — Data Mining",
      issuer: "NPTEL",
      highlight: "Nationwide Top Ranker in Data Mining; Silver Elite in Cloud Computing & Data and Decision Making.",
      badge: "Top Ranker"
    },
    {
      title: "Top 5% — Data Analysis and Decision Making",
      issuer: "NPTEL",
      highlight: "Top 5% nationwide rank and Silver Elite credential in statistical data analysis and decision modeling.",
      badge: "Elite Top 5%"
    },
    {
      title: "Silver Elite — Cloud Computing",
      issuer: "NPTEL",
      highlight: "Silver Elite certification covering distributed cloud infrastructure, virtualization, and scalability.",
      badge: "Silver Elite"
    },
    {
      title: "Claude Code 101",
      issuer: "Anthropic",
      highlight: "Specialized certification in Anthropic's agentic AI tools and Claude Code development environments.",
      badge: "Agentic AI"
    },
    {
      title: "Generative AI",
      issuer: "Udemy",
      highlight: "Comprehensive mastery of LLM architectures, diffusion models, fine-tuning, and prompt engineering.",
      badge: "GenAI"
    },
    {
      title: "MLOps Bootcamp: Mastering AI Operations",
      issuer: "Udemy",
      highlight: "Production deployment, experiment tracking, model registry, monitoring, and pipeline automation.",
      badge: "MLOps"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "GeeksforGeeks",
      highlight: "AWS Core Infrastructure, IAM, S3, EC2, ECR, VPC, and Cloud Architecture best practices.",
      badge: "AWS Cloud"
    },
    {
      title: "Business Analytics with Excel",
      issuer: "Simplilearn",
      highlight: "Advanced business modeling, statistics, data analytics, and decision forecasting using Excel.",
      badge: "Analytics"
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      highlight: "Verified competency in advanced SQL queries, joins, subqueries, aggregations, and query optimization.",
      badge: "SQL"
    },
    {
      title: "Analyzing and Visualizing Data with Microsoft Excel",
      issuer: "Skill Course",
      highlight: "Data transformation, pivot tables, dashboard design, and business intelligence reporting.",
      badge: "Visualization"
    }
  ]
};
