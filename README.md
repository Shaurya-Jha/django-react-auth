### Full-Stack Authentication App built using Django + Django Rest Framework as backend and React JS for frontend

----

*Tech-stack used*
- Backend - Django + Django Rest Framework
- Frontend - React JS

*Packages and libraries used*
- Backend
  - Django Knox for Token based authentication instead of by default Token based auth provided by Django as it limits user to have one token per user for authentication
  - Django Rest Password Reset for easy password reset functionality via email support
  - Django Cors Headers for handling cors errors when interacting with frontend
  - Python Dotenv for using env variables for security purposes

- Frontend
  - Material UI for ready-made UI components
  - Yup for validations
  - React Hook Form instead of default form to use controlled input with respect to Material UI controlled components
  - Axios instead of default fetch API to learn usage of Axios
  - React Router for routing

----

Development setup

1. Clone the repository

2. Create a virtual environment for django. Here, I am using virtual-env but you can also use uv
  ```bash
  python3 -m venv .venv
  ```

3. Activate virtual environment
  ```bash
  source .venv/bin/activate     # for macOS and linux
  ```

4. Setup backend and install required packages
  ```bash
  cd backend
  pip install -r requirements.txt
  ```

5. Setup frontend and install required packages
  ```bash
  pnpm install
  pnpm dev      # run dev server
  ```