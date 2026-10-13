import { Braces, Code2, Database, Smartphone, Workflow } from 'lucide-react'

export type Specialty = 'web' | 'android' | 'data'
export type Project = {
  id: string; category: string; title: string; summary: string; stack: string[];
  icon: typeof Database; number: string; status: string; details: string[];
  roles: Specialty[]; link?: string; sourceVisibility: 'public' | 'private' | 'unverified';
}

export const projects: Project[] = [
  {
    id: 'cityflow-databricks', title: 'CityFlow Data Lakehouse', category: 'DATA / LAKEHOUSE', roles: ['data'],
    summary: 'A Databricks lakehouse that ingests NYC taxi data from S3, cleans trips, and builds daily revenue and hourly demand datasets.',
    stack: ['Python', 'PySpark', 'Databricks', 'Delta Lake', 'AWS S3', 'SQL'], icon: Database, number: '01', status: 'PUBLIC PROJECT', sourceVisibility: 'public',
    details: ['Bronze, Silver, and Gold notebooks separate ingestion, validation, and business aggregations.', 'Silver transformations filter invalid fares, distances, and passenger counts and derive time dimensions.', 'Gold outputs include daily trip summaries and hourly demand; the repository also includes air-quality and Unity Catalog notebooks.'],
    link: 'https://github.com/Aliertaza104/cityflow-databricks',
  },
  {
    id: 'imdb-data-etl', title: 'IMDb Data ETL', category: 'DATA / ETL & ANALYTICS', roles: ['data'],
    summary: 'A modular Python pipeline for cleaning movie data, loading PostgreSQL tables, and exporting analytical query results.',
    stack: ['Python', 'Pandas', 'PostgreSQL', 'SQL', 'ETL'], icon: Database, number: '02', status: 'PUBLIC PROJECT', sourceVisibility: 'public',
    details: ['A reusable pipeline validates required columns, removes duplicates, handles missing values, and converts dates and numeric fields.', 'Database modules manage connections, schema creation, loading, and analytical query execution.', 'The documented warehouse design models movies, actors, directors, and genres with junction tables.'],
    link: 'https://github.com/Aliertaza104/IMDB_data_ETL',
  },
  {
    id: 'asaan-karobar', title: 'Asaan Karobar', category: 'ANDROID / BUSINESS SOFTWARE', roles: ['android'],
    summary: 'An SME-focused Android business management app bringing inventory, billing, Khata, expenses, and supplier workflows into one place.',
    stack: ['Kotlin', 'XML', 'MVVM', 'Room'], icon: Smartphone, number: '03', status: 'MVP BUILT', sourceVisibility: 'unverified',
    details: ['Android application built with Kotlin and XML using an MVVM structure.', 'Business modules include QR inventory, billing, Khata, suppliers, expenses, ledger, contacts, and role-based access.', 'This case study retains the existing portfolio description; the repository was not accessible during the GitHub review.'],
  },
  {
    id: 'supreme-app', title: 'Supreme Services Portal', category: 'WEB / BUSINESS OPERATIONS', roles: ['web'],
    summary: 'A React and TypeScript business portal for sales, stock, customer accounts, payments, and operational dashboards.',
    stack: ['React', 'TypeScript', 'Material UI', 'Vite', 'Zod'], icon: Workflow, number: '04', status: 'PRIVATE PROJECT', sourceVisibility: 'private',
    details: ['Organization project in the Supreme Services application repository.', 'Feature screens cover sales, stock, customers, receivable statements, payments, and dashboards.', 'A typed API transport connects the frontend to the separate Supreme API; the repository includes unit and browser workflow tests.'],
  },
  {
    id: 'supreme-api', title: 'Supreme Services API', category: 'WEB / BACKEND & DATABASE', roles: ['web'],
    summary: 'An Express and TypeScript backend for business operations, with PostgreSQL persistence and a canonical OpenAPI contract.',
    stack: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'OpenAPI', 'Vitest'], icon: Braces, number: '05', status: 'PRIVATE PROJECT', sourceVisibility: 'private',
    details: ['Organization project in the Supreme Services API repository.', 'A feature-based modular backend owns authentication, business workflows, database migrations, and the API contract.', 'API and database tests exercise HTTP behavior and PostgreSQL invariants. Source code remains private.'],
  },
  {
    id: 'prime-finance', title: 'Prime Finance Backend', category: 'WEB / CRM INTEGRATION', roles: ['web'],
    summary: 'A modular backend connecting Fillout submissions to HubSpot CRM and a synchronized MongoDB database.',
    stack: ['Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'HubSpot', 'Swagger'], icon: Braces, number: '06', status: 'PUBLIC PROJECT', sourceVisibility: 'public',
    details: ['Fillout webhook integration handles form submissions and maps them into CRM workflows.', 'HubSpot is documented as the source of truth, with webhook-driven updates to the MongoDB mirror.', 'The code includes integration-specific modules, retry handling, centralized errors, logging, and Swagger documentation.'],
    link: 'https://github.com/Aliertaza104/prime-finance-backend',
  },
  {
    id: 'pagespeed-bot', title: 'Website PageSpeed Bot', category: 'WEB / PERFORMANCE TOOLING', roles: ['web'],
    summary: 'A Python website audit tool with a local browser dashboard for mobile and desktop PageSpeed analysis and report exports.',
    stack: ['Python', 'PageSpeed Insights API', 'JavaScript', 'HTML', 'CSS'], icon: Code2, number: '07', status: 'PUBLIC PROJECT', sourceVisibility: 'public',
    details: ['Discovers same-origin pages using sitemaps and HTML links, respecting robots rules.', 'A local dashboard displays audit progress, metrics, insights, and history, with CSV and JSON exports.', 'The command-line interface supports saved-response resume and sequential audits with retry and backoff.'],
    link: 'https://github.com/Aliertaza104/pagespeed-bot',
  },
  {
    id: 'django-online-shop', title: 'Django Online Shop', category: 'WEB / E-COMMERCE', roles: ['web'],
    summary: 'A Django e-commerce project with authentication, product browsing, cart management, checkout, and an administration dashboard.',
    stack: ['Python', 'Django'], icon: Code2, number: '08', status: 'PUBLIC PROJECT', sourceVisibility: 'public',
    details: ['The repository README describes authentication, product browsing, cart management, and checkout.', 'The documented dashboard supports product and order management.', 'Application source is distributed as a RAR archive; this description is based on the repository README.'],
    link: 'https://github.com/Aliertaza104/Online-Shop-in-Django',
  },
  {
    id: 'django-shop-cash-flow', title: 'Shop Cash Flow Tracker', category: 'WEB / SALES & EXPENSES', roles: ['web'],
    summary: 'A Django website for tracking a shop’s daily sales and expenses.',
    stack: ['Python', 'Django'], icon: Workflow, number: '09', status: 'PUBLIC PROJECT', sourceVisibility: 'public',
    details: ['The repository README describes daily sales and expense tracking.', 'Application source is distributed as cash_flow.rar.', 'The portfolio description is limited to documented functionality because the archived source was not inspected.'],
    link: 'https://github.com/Aliertaza104/Daily-in-out-of-shop-in-Django',
  },
  {
    id: 'zanderio-wp-widget', title: 'Zanderio AI Chat Widget', category: 'WEB / ORGANIZATION PROJECT', roles: ['web'],
    summary: 'A React chat widget source repository for the Zanderio AI WordPress plugin, using streaming chat transport.',
    stack: ['React', 'TypeScript', 'Vite', 'Vercel AI SDK', 'WordPress'], icon: Code2, number: '10', status: 'SHARED REPOSITORY', sourceVisibility: 'public',
    details: ['Shared organization repository accessible through the connected GitHub account; individual contribution scope has not been verified.', 'The README describes the human-readable source for the WordPress plugin’s compiled widget.', 'The project uses React, Vite, and the Vercel AI SDK for streaming chat transport and includes a WordPress bundle build command.'],
    link: 'https://github.com/Zanderio-ai/zanderio-wp-widget',
  },
]
