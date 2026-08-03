# Product Catalog

Web application built with .NET 10 backend and Angular 22 frontend.

## Prerequisites

- **.NET 10 SDK** - [Download](https://dotnet.microsoft.com/download)
- **Node.js** (LTS recommended) - [Download](https://nodejs.org/)
- **npm** (included with Node.js)

## Project Structure

- ProductCatalog.Server - .NET 10 ASP.NET Core backend API
- ProductCatalog.Client - Angular 22 frontend application

## Running the Application

### Option 1: Running in IDE

Simply run the server project from your IDE (Visual Studio, Rider, or VS Code with C# extension):

- **Visual Studio**: `F5` or click "Run" on `ProductCatalog.Server`
- **Rider**: Click "Run" or press `Shift+F10`
- **VS Code**: Run the `.NET: Debug` configuration

### Option 2: Running from Console

#### Start the Backend
```bash
cd ProductCatalog.Server
dotnet run
```

Dotnet will automatically run both the backend server and the Angular development server. The frontend will be served alongside the backend.

## Access the Application

Once running, open your browser and navigate to:

| Service | URL                                       |
|---------|-------------------------------------------|
| **Frontend** | https://localhost:2395                    |
| **Backend API** | https://localhost:7154                    |
| **Swagger/OpenAPI** | https://localhost:7154/swagger/index.html |
