# 🚚 Sistema de Gestão para Transportadora

Projeto desenvolvido para gestão e controle operacional de transportadoras, integrando cadastro de motoristas, veículos, viagens, despesas e pagamentos de comissões.

## 🏗️ Arquitetura do Projeto

O projeto é composto por:
* **Backend**: Java 17 + Spring Boot + Spring Data JPA + PostgreSQL ([`backend/tcc-backend`](./backend/tcc-backend))
* **Frontend**: Angular 22 + TailwindCSS + Nginx ([`frontend/transportadora-frontend`](./frontend/transportadora-frontend))
* **Banco de Dados**: PostgreSQL 15
* **Orquestração e Deploy**: Docker & Docker Compose integrado ao Coolify e GitHub Actions

## 🐳 Como Executar com Docker Compose

Para subir toda a aplicação localmente:

```bash
docker compose up -d --build
```

Serviços iniciados:
* **Frontend**: [http://localhost](http://localhost) (porta 80)
* **Backend**: [http://localhost:8080](http://localhost:8080) (porta 8080)
* **PostgreSQL**: porta 5432
