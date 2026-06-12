# 📋 GestorTareas API

API REST desarrollada con ASP.NET Core 8 para la gestión de tareas. Permite crear, consultar, actualizar, eliminar y marcar tareas como completadas.

## 🚀 Tecnologías utilizadas

- ASP.NET Core 8
- Entity Framework Core 8
- MySQL
- AutoMapper
- Swagger / OpenAPI
- DTOs
- C#

---

## 📂 Estructura del proyecto

```text
appNet/
│
├── Controllers/
│   └── TasksController.cs
│
├── Data/
│   └── AppDbContext.cs
│
├── DTOs/
│   ├── CreateTaskDto.cs
│   ├── UpdateTaskDto.cs
│   └── TaskDto.cs
│
├── Models/
│   └── TaskItems.cs
│
├── Profiles/
│   └── MappingProfile.cs
│
├── Migrations/
│
├── appsettings.json
├── Program.cs
└── appNet.csproj
```

---

## ⚙️ Características

- Crear tareas
- Consultar todas las tareas
- Consultar una tarea por ID
- Actualizar tareas
- Eliminar tareas
- Marcar tareas como completadas
- Validación de datos mediante DTOs
- Mapeo automático con AutoMapper
- Documentación interactiva con Swagger

---

## 🗄️ Modelo de datos

```csharp
public class TaskItems
{
    public Guid Id { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public DateTime CreationDate { get; set; }

    public bool IsComplete { get; set; }
}
```

---

## 🔧 Configuración

### Clonar repositorio

```bash
git clone https://github.com/tuusuario/GestorTareas.git
```

### Restaurar dependencias

```bash
dotnet restore
```

### Configurar cadena de conexión

Editar el archivo:

```json
appsettings.json
```

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "server=localhost;port=3306;database=GestorTareasDb;user=root;password=PASSWORD"
  }
}
```

---

## 🗃️ Crear base de datos

Crear la base de datos en MySQL:

```sql
CREATE DATABASE GestorTareasDb;
```

---

## 🔄 Aplicar migraciones

```bash
dotnet ef database update
```

---

## ▶️ Ejecutar aplicación

```bash
dotnet run
```

La API estará disponible en:

```text
http://localhost:5071
```

Swagger:

```text
http://localhost:5071/swagger
```

---

## 📌 Endpoints

### Obtener todas las tareas

```http
GET /api/Tasks
```

### Obtener tarea por ID

```http
GET /api/Tasks/{id}
```

### Crear tarea

```http
POST /api/Tasks
```

Body:

```json
{
  "title": "Aprender ASP.NET Core",
  "description": "Implementar API REST"
}
```

---

### Actualizar tarea

```http
PUT /api/Tasks/{id}
```

Body:

```json
{
  "title": "Aprender Angular",
  "description": "Consumir API",
  "isComplete": false
}
```

---

### Marcar tarea como completada

```http
PATCH /api/Tasks/{id}/complete
```

---

### Eliminar tarea

```http
DELETE /api/Tasks/{id}
```

---

## 🧪 Pruebas

Las pruebas de los endpoints pueden realizarse mediante:

- Swagger UI
- Postman
- Insomnia

---

## 📈 Mejoras futuras

- Autenticación con JWT
- Paginación
- Filtros y búsqueda
- Registro de usuarios
- Frontend en Angular 17
- Dockerización del proyecto

---

## 👩‍💻 Autor

Desarrollado por **Merari Ruidiaz**

Tecnóloga en Análisis y Desarrollo de Software.
