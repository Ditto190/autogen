FROM python:3.11-slim-bookworm

# add git lhs to apt
RUN curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash

# Update and install dependencies
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    software-properties-common sudo git-lfs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Setup a non-root user 'autogen' with sudo access
RUN adduser --disabled-password --gecos '' autogen
RUN adduser autogen sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER autogen
WORKDIR /home/autogen

# Set environment variable if needed
# ENV OPENAI_API_KEY="{OpenAI-API-Key}"

# Set environment variables
ENV OPENAI_API_KEY="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" \
    SUPABASE_URL="https://efddpqslpcdfpyeytfrq.supabase.co" \
    SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZGRwcXNscGNkZnB5ZXl0ZnJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4NDM1OTIsImV4cCI6MjAyMjQxOTU5Mn0.x1u5TWiwpt2UbPs88lwtDClE415PBxa95SnNBTbRpys" \
    SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZGRwcXNscGNkZnB5ZXl0ZnJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjg0MzU5MiwiZXhwIjoyMDIyNDE5NTkyfQ.eq78VeERJJpoAVyhMrKx-FJokPQEYxE6J74dH2VPPSg" \
    QDRANT_URL="https://efd061e9-8ba4-4715-a848-f8dcd018c2d8.us-east4-0.gcp.cloud.qdrant.io" \
    QDRANT_API_KEY="Qgq4GUMPRVgkrAg7_z9qAg14Def_dJMZUYNvIo4kjARszoeTq9kRXg"

# Install Python packages
RUN pip install --upgrade pip
RUN pip install pyautogen[teachable,lmm,retrievechat,mathchat,blendsearch] autogenra
RUN pip install numpy pandas matplotlib seaborn scikit-learn requests urllib3 nltk pillow pytest beautifulsoup4

# Expose port
EXPOSE 8081

# Start Command
CMD ["/bin/bash"]
