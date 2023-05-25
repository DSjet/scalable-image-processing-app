# scalable-image-processing-app
Final Project for Scalable Software Development

## Step 1: Setting up NGINX

This guide will walk you through the installation process of Nginx, a popular and powerful web server, on your system. By following these steps, you will be able to set up Nginx and start utilizing its features.

### Prerequisites

Before proceeding with the installation, please ensure that you have the following prerequisites:

- Operating System: Linux, macOS, or Windows
- Access to a terminal or command prompt with administrative privileges

### Installation Steps

1. **Linux:**

   On a Linux system, you can install Nginx using the package manager specific to your distribution.

   - **Ubuntu/Debian:**
     ```bash
     sudo apt update
     sudo apt install nginx
     ```

   - **CentOS/Fedora:**
     ```bash
     sudo dnf install nginx
     ```

2. **macOS:**

   On macOS, you can use Homebrew, a popular package manager, to install Nginx.

   - Install Homebrew (if not already installed):
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

   - Install Nginx using Homebrew:
     ```bash
     brew install nginx
     ```

3. **Windows:**

   On Windows, you can download the Nginx installer from the official Nginx website and follow the steps below:

   - Visit the [Nginx download page](https://nginx.org/en/download.html) and choose the latest stable version for Windows.
   - Download the installer (nginx-<version>.zip) and extract the contents to a preferred location, such as `C:\nginx`.
   - Open a command prompt with administrative privileges and navigate to the extracted directory (e.g., `C:\nginx`).
   - Start Nginx:
     ```bash
     nginx.exe
     ```

### Verification and Usage

Once the installation is complete, you can verify if Nginx is running correctly:

- Open a web browser and visit `http://localhost` or `http://127.0.0.1`. You should see the default Nginx welcome page if everything is set up properly.

Find nginx.conf file copy the contents in nginxconf.txt to the configuration file:

- Linux: `/etc/nginx/nginx.conf`
- macOS: `/usr/local/etc/nginx/nginx.conf` (using curl)
- macOS: `/opt/homebrew/etc/nginx/nginx.conf`
- Windows: `C:\nginx\conf\nginx.conf`
  
## Step 2: Running the app.js server

### Prerequisites

Before proceeding with the installation, please ensure that you have the following prerequisites:

- Operating System: Linux, macOS, or Windows
- Access to a terminal or command prompt
- Node.js installed on your system. You can download and install it from the official Node.js website (https://nodejs.org).

### Installation Steps

1. **npm (Node Package Manager) Installation:**

   npm is typically installed automatically when you install Node.js. You can verify if npm is installed by running the following command in your terminal or command prompt:

   ```bash
   npm -v
   ```

   If it displays the version number, npm is already installed. Otherwise, you can install it by following the instructions on the official npm website (https://www.npmjs.com/get-npm).

2. **Setting the Server Port:**

   In your Node.js application, you can set the desired server port by using the `process.env` object. This allows you to configure the port dynamically based on your requirements. Here's an example of setting the server port to 3000:

   - JavaScript (app.js or index.js):

     ```bash
     export PORT={Desired Port}
     ```

3. **Running the Node.js Server:**

   Once you have your Node.js application code ready, follow these steps to run the server:

   - Open a terminal or command prompt.
   - Navigate to the directory where your Node.js application files are located.
   - Install the required dependencies by running the following command:

     ```bash
     npm install
     ```

   - After the dependencies are installed, start the server by running the following command:

     ```bash
     node app.js
     ```

   Your Node.js server will start running on the specified port. You can access it in your web browser by visiting `http://localhost:<port>`, where `<port>` is the value you set for the server port in your Node.js application.

## Step 3: Testing load balancing

### Running Nginx Server:
1. **Start Nginx:**

   To start the Nginx server, follow the instructions below based on your operating system:

   - **Linux:**

     Open a terminal and run the following command:

     ```bash
     sudo service nginx start
     ```

   - **macOS:**

     Open a terminal and run the following command:

     ```bash
     sudo nginx
     ```

   - **Windows:**

     Open the Command Prompt as an administrator and navigate to the Nginx installation directory (e.g., `C:\nginx`).

     To start Nginx as a service, run the following command:

     ```bash
     nginx.exe
     ```

     Alternatively, to start Nginx in the foreground, run:

     ```bash
     nginx.exe -g "daemon off;"
     ```

2. **Verify Nginx Status:**

   To verify if Nginx is running correctly, follow the instructions below based on your operating system:

   - **Linux:**

     Open a web browser and visit `http://localhost:80`.

   - **macOS:**

     Open a web browser and visit `http://localhost:80`.

   - **Windows:**

     Open a web browser and visit `http://localhost:80` or `http://127.0.0.1`. 
   
   To make sure that it already acts as a load balancer refresh the page in it should change the port in the html view.

3. **Stop Nginx:**

   To stop the Nginx server, follow the instructions below based on your operating system:

   - **Linux:**

     Open a terminal and run the following command:

     ```bash
     sudo service nginx stop
     ```

   - **macOS:**

     Open a terminal and run the following command:

     ```bash
     sudo nginx -s stop
     ```

   - **Windows:**

     Open the Command Prompt as an administrator and navigate to the Nginx installation directory (e.g., `C:\nginx`).

     To stop Nginx, run the following command:

     ```bash
     nginx.exe -s stop
     ```

     Alternatively, you can press `Ctrl + C` in the Command Prompt window where Nginx is running.
   
4. **Restarting Nginx:**
   To restart the Nginx server, follow the instructions below based on your operating system:
    - **Linux:**

     Open a terminal and run the following command:

     ```bash
     sudo service nginx restart
     ```

   - **macOS:**

     Open a terminal and run the following command:

     ```bash
     sudo nginx -s reload
     ```

   - **Windows:**

     Open the Command Prompt as an administrator and navigate to the Nginx installation directory (e.g., `C:\nginx`).

     To stop Nginx, run the following command:

     ```bash
     nginx.exe -s reload
     ```

     Alternatively, you can press `Ctrl + C` in the Command Prompt window where Nginx is running.
   
