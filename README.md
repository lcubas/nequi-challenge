# Nequi Challenge

This is a simple and practical project for the Nequi challenge.

## Requirements

- Node.js
- pnpm (package manager)
- Docker (optional, for deployment)

## Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/lcubas/nequi-challenge.git
  cd nequi-challenge
  ```

2. Install dependencies using pnpm:
  ```sh
  pnpm install
  ```

## Usage

To start the project, run:
```sh
pnpm start
```

## Deployment with Docker

1. Build the Docker image:
  ```sh
  docker build -t nequi-challenge .
  ```

2. Run the Docker container:
  ```sh
  docker run -p 3000:3000 --env-file .env nequi-challenge
  ```

## Endpoints
List of available endpoints

### API Endpoints
Franchise Endpoints
- POST /franchises: Create a new franchise.
- GET /franchises: List all franchises.

### Branch Endpoints
- POST /franchises/:franchiseId/branches: Add a branch to a franchise.
- GET /franchises/:franchiseId/branches: List branches for a franchise.

### Product Endpoints
- POST /branches/:branchId/products: Add a product to a branch.
- DELETE /products/:productId: Delete a product from a branch.
- PUT /products/:productId/stock: Update product stock.
- GET /franchises/:franchiseId/products/top: Get the top-stocked products for a franchise.

## License

This project is licensed under the MIT License.