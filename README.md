# 📋 GestorTareas

Una aplicación web moderna para la gestión de tareas desarrollada con **ASP.NET Core (.NET 8)** y **Angular 17**.

El proyecto permite administrar tareas mediante operaciones CRUD, aplicar filtros, realizar búsquedas, editar registros, marcar tareas como completadas y disfrutar de una interfaz moderna con modo oscuro.

---

## 🚀 Tecnologías utilizadas

### Backend

* ASP.NET Core (.NET 8)
* Entity Framework Core
* SQL Server
* AutoMapper
* DTOs
* Swagger

### Frontend

* Angular 17
* Standalone Components
* Angular Signals
* Reactive Forms
* Bootstrap 5
* TypeScript
* CSS3

---

## ✨ Funcionalidades

* ✅ Crear tareas
* ✅ Editar tareas
* ✅ Eliminar tareas
* ✅ Marcar como completada/incompleta
* ✅ Buscar tareas por nombre
* ✅ Filtrar por:

  * Todas
  * Pendientes
  * Completadas
* ✅ Notificaciones al guardar y eliminar
* ✅ Modal para edición
* ✅ Modo oscuro
* ✅ Diseño responsive
* ✅ Sidebar de navegación

---

## 📂 Estructura del proyecto

```
GestorTareas
│
├── Backend
│   ├── Controllers
│   ├── DTOs
│   ├── Models
│   ├── Data
│   └── ...
│
└── Frontend
    ├── components
    ├── services
    ├── models
    ├── animations
    └── ...
```

---

## ⚙️ Instalación

### Clonar el proyecto

```bash
git clone https://github.com/meraryrv/GestorTareas.git
```

### Backend

```bash
cd Backend
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

```bash
cd gestor-tareas-front
npm install
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

## 📸 Características de la interfaz

* Diseño moderno
* Tarjetas con sombras suaves
* Barra lateral
* Modo oscuro
* Animaciones
* Formularios desplegables
* Edición mediante ventana modal

---

## 🎯 Próximas mejoras

* Drag & Drop estilo Trello
* Categorías de tareas
* Prioridades
* Fechas de vencimiento
* Autenticación con JWT
* Perfil de usuario
* Dashboard con estadísticas
* Consumo de API desplegada
* Deploy en Azure/Vercel

---

## 👨‍💻 Autor

**Merari Ruidiaz**

Proyecto desarrollado con ASP.NET Core y Angular como práctica de desarrollo Full Stack.
