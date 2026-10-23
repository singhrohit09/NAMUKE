# Gaurav Role: AI/ML Engineer & Frontend Engineer

## Primary Responsibility
Own the AI/ML pipeline, data processing, prediction logic, and evaluation. Also contribute to frontend components that visualize model outputs and communicate important results.

## 1. AI/ML and Data Engineering
- Translate the problem statement into a concrete prediction or analysis task.
- Identify available datasets and verify their quality, availability, and licensing.
- Build data ingestion, preprocessing, and validation steps.
- Establish a baseline model or rule-based approach before attempting complex models.
- Implement the core inference pipeline.
- Define input/output schemas and coordinate them with Mohit.
- Evaluate results using appropriate metrics and representative test cases.
- Test missing data, invalid inputs, unusual values, and model failures.
- Document accuracy limitations, assumptions, and known failure cases.
- Keep training code separate from inference code where practical.

## 2. Frontend Engineering
- Build frontend components that present AI/ML results.
- Implement result cards, charts, tables, confidence indicators, or maps when appropriate.
- Display timestamps, relevant units, warnings, and limitations.
- Handle loading, empty, and failed-result states.
- Coordinate shared UI components with Rohit.
- Avoid changing Rohit's core frontend files without agreement.

## 3. AI/ML and Backend Integration
- Provide a stable function, service, or API interface for predictions.
- Document required inputs, output formats, dependencies, and runtime requirements.
- Work with Mohit to connect inference to backend routes.
- Optimize inference only after establishing that performance is a real bottleneck.
- Provide deterministic sample inputs and expected outputs for testing where possible.

## 4. Testing and Reliability
- Create tests for preprocessing, inference, and output validation.
- Compare model predictions against a baseline.
- Measure relevant accuracy and latency metrics.
- Clearly distinguish real predictions from simulated or mock results.
- Ensure the demo does not present unsupported claims as verified predictions.

## 5. Git and Collaboration
- Primarily own the AI/ML directory and assigned visualization components.
- Keep datasets, model artifacts, and generated files appropriately managed.
- Never commit credentials or sensitive data.
- Coordinate changes to shared schemas and dependencies.
- Pull the latest `main` before pushing and communicate integration blockers.

## 6. Deliverables
- Working and documented AI/ML pipeline.
- Validated inference interface.
- Evaluation results and known limitations.
- Frontend result-visualization components.
- Reproducible setup and test instructions.

## Working Rule
Build the simplest approach that demonstrably solves the problem. A reliable baseline with measured results is more valuable than an impressive model that cannot run during the hackathon demo.
