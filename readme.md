### NestJs microservices gRPC example

1. Project setup
```bash
    docker-compose up
```

2. Make requests to server
```bash
    curl http://localhost:3000/api/book/1
```

Request will be received by `nestjs-rest-client` and handled by `nestjs-grpc`
