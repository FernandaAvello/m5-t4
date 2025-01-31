## Uso de Hooks y manejo de errores en la Web del Hospital

En este proyecto, se implementaron hooks para la gestión de estado y efectos secundarios, además de manejar errores y excepciones dentro del sistema del hospital.

## Hook personalizado
El hook personalizado `useDoctorForm` se utiliza para gestionar el estado y la lógica del formulario de registro de un nuevo doctor en una aplicación React. Este hook encapsula la lógica relacionada con la visibilidad del modal, la validación del formulario y el manejo de errores, proporcionando una interfaz limpia y reutilizable para los componentes que necesitan esta funcionalidad.

## Creación de nueva sección Administración
En esta ocasión se creó la sección para administrar los doctores disponibles en el hospital y un formulario para agregar, editar y eliminar nuevos doctores.
Se utilizaron hooks en esta sección para la gestión del estado y de efectos secundarios.

## Implementación de consumo de datos en Sección Pacientes
En esta sección se implementaron las solicitudes GET, POST, PUT y DELETE utilizando la base de datos simulada. Se muestran los datos de los pacientes obtenidos en la interfaz y se manejan errores en el formulario de crear/edición.

## Integración de TypeScript
Se refactorizaron los componentes de `ListServices`, `ServiceCard`,`ListDoctors` y `DoctorCard`. Se aplicaron interfaces esos componenetes.

## Credenciales de Acceso

**Administrador:**
- **Username:** admin
- **Contraseña:** asd123123
- **Rol:** Administrador

**Doctor:**
- **Username:** juan
- **Contraseña:** 54321
- **Rol:** Doctor

## Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. Clona el repositorio:

    ```sh
    git clone https://github.com/FernandaAvello/m5-t4.git
    cd m5-t4/
    ```

2. Instala las dependencias: Asegúrate de tener Node.js instalado. Luego, instala las dependencias del proyecto:

    ```sh
    npm install
    ```

3. Inicia el servidor de desarrollo: Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo:

    ```sh
    npm run dev
    ```

4. Inicia la base de datos simulada: En una nueva terminal, ejecuta el siguiente comando para iniciar la base de datos simulada utilizando json-server:

    ```sh
    npm run server
    ```

5. Accede a la aplicación: Abre tu navegador y ve a [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento.
