from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")  # Replace with actual template name if used

@app.route("/scan", methods=["POST"])
def scan():
  # Get domain name and user choice from request data
  domain_name = request.json.get("domain_name")
  user_choice = request.json.get("tool_choice")

  # Validate request data
  if not domain_name:
    return jsonify({"error": "Missing domain name in request body"}), 400
  if not user_choice:
    return jsonify({"error": "Missing tool selection in request body"}), 400

  # Function to run a specific tool
  def run_tool(tool_name):
    # Replace with actual commands to run theHarvester or Amass
    command = f"{tool_name} -d {domain_name}"  # Example command
    process = subprocess.Popen(command.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = process.communicate()
    return output.decode(), error.decode()

  # Run the chosen tool
  tool_output, tool_error = run_tool(user_choice)

  # Process and handle output/errors (implement your logic here)
  if tool_error:
    print(f"Error running {user_choice}: {tool_error}")
    return jsonify({"error": f"Error running {user_choice}"}), 500
  else:
    # Process and return the tool output (example: return relevant data)
    processed_output = process_output(tool_output)  # Replace with your processing logic
    return jsonify({"domain": domain_name, "tool_output": processed_output})

def process_output(raw_output):
  # Implement logic to extract relevant data from the tool output (example)
  return {"subdomains": raw_output.splitlines()}  # Replace with actual processing


if __name__ == "__main__":
  app.run(debug=True, host='0.0.0.0')