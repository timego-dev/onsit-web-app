# Base image for Python environment
FROM python:3.9

# Create a working directory
WORKDIR /app

# Mount the host directory containing your code as a volume
VOLUME ["/app"]

# Copy requirements.txt
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy your Flask application code
COPY . .

# Expose port for Flask app (adjust based on your app)
EXPOSE 5000

# Command to run the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]