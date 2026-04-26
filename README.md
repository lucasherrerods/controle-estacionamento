## 🚗 Controle de Estacionamento - Full Stack

### 🚀 Tecnologias Usadas

[![My Skills](https://skillicons.dev/icons?i=cs,dotnet,mysql,react,ts,vite,tailwind)](https://skillicons.dev)

### 📌 Sobre o projeto

Projeto desenvolvido com o objetivo de simular um sistema real de controle de estacionamento, abordando desde a construção de uma API RESTful em C# com ASP.NET Core até a criação de um frontend moderno em React + TypeScript.

A aplicação permite gerenciar o fluxo completo de entrada e saída de veículos, controle de vagas disponíveis, cálculo de tempo de permanência e valor a pagar, além de oferecer uma interface interativa com feedbacks em tempo real.

O foco principal foi aplicar conceitos de arquitetura em camadas, boas práticas de desenvolvimento e construção de uma aplicação próxima de um cenário corporativo.


### 🗂️ Estrutura do projeto
🔹 Backend
```text
api/
 ├── Controllers/
 │    └── EstacionamentoController.cs
 │
 ├── Services/
 │    └── VeiculoService.cs
 │    └── EstacionamentoService.cs
 │
 ├── Repositories/
 │    └── VeiculoRepository.cs
 │
 ├── Data/
 │    └── AppDbContext.cs
 │
 ├── Models/
 │    ├── Veiculo.cs
 │    └── Estacionamento.cs
 │
 ├── DTO/
 │    └── SaidaResult.cs
 │    └── StatusEstacionamento.cs
 │    └── VeiculoRequest.cs
 │
 ├── Migrations/
 │
 └── Program.cs
```

🔹 Frontend
```text
web/
 ├── components/
 │    ├── ResultadoModal.tsx
 │    ├── BilheteSaidas.tsx
 │    ├── StatusEstacionamento.tsx
 │    ├── Footer.tsx
 │    ├── ControleAcesso.tsx
 │    ├── ListaVeiculos.tsx
 │    └── Header.tsx
 │
 ├── hooks/
 │    └── useEstacionamento.ts
 │
 ├── services/
 │    ├── api.ts
 │    └── controleService.ts
 │
 ├── pages/
 │    └── Home.tsx
 │
 ├── types/
 │    └── index.tsx
 │
 └── main.tsx
 └── App.tsx
 └── index.css
```

### ▶️ Como executar o projeto  
🔹 Clonar o repositório e acessar API 
   ```sh
   git clone https://github.com/lucasherrerods/help-desk
   cd api/
   ```
🔹 Configurar banco SQL Server através do arquivo ``appsettings.json``
   ```sh
   "ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=ControleEstacionamento;Trusted_Connection=True;TrustServerCertificate=True;"
  }
   ```
🔹 Rodar migrations e executar API 
   ```sh
   dotnet ef database update
   dotnet run
   ```
🔹 Acessar o frontend 
   ```sh
   cd web/
   npm install
   npm run dev
   ```  

Você pode interagir com os endpoints e acessar a documentação disponível no Swagger gerada pelo terminal (``http://localhost:5108/swagger``).