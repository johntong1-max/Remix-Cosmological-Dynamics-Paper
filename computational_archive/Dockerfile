# Dockerfile for SVCC Computational Reproducibility
# Uses a pinned base image for absolute reproducibility
FROM python:3.10.12-slim-bullseye

# Set environment variables to ensure stable execution
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    OMP_NUM_THREADS=1

# Create unprivileged user for security and file ownership
RUN useradd --create-home --shell /bin/bash svccuser
WORKDIR /home/svccuser/app

# Install system dependencies (if numerical libraries require C extensions)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install exact python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy analytical scripts 
COPY . .
RUN chown -R svccuser:svccuser /home/svccuser/app

USER svccuser

# Default execution strategy
CMD ["python", "run_mcmc.py"]
