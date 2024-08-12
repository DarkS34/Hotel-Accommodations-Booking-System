# Project Documentation - *Hotel Management System*

This project is a RESTful API built using Node.js and MongoDB, providing endpoints for managing users, hotels, and hotel accommodations. The application utilizes Mongoose for data modeling and Express for handling HTTP requests. It includes a authorization process for users and a file system to upload images to Cloudinary.

## API Routes

### Hotels

| Method | Endpoint           | Description |
| ------ | ------------------ | ----------- |
| **GET**  | /api/v1/hotels       | Retrieve all hotels. Accessible to **everyone**. |
| **GET**  | /api/v1/hotels/:id   | Retrieve a hotel by ID. Accessible to **everyone**. |
| **POST** | /api/v1/hotels       | Create a new hotel. Can only be performed by an **admin**. Admins cannot directly insert accommodations when creating a hotel. Additionally, hotels cannot have duplicate names. A hotel can only have one image, which must be provided in form-data body format. |
| **PUT**  | /api/v1/hotels/:id   | Update a hotel by ID. Can only be performed by an **admin** or a **hotel manager**. Changes to the accommodations array are prohibited. The hotel image can be replaced, with the previous one being deleted from Cloudinary storage. |
| **DELETE** | /api/v1/hotels/:id | Delete a hotel by ID. Can only be performed by an **admin**. Deleting a hotel also removes all associated accommodations and the corresponding image from Cloudinary storage. This request also reverts the hotel manager role to a normal user role. |

### Accommodations

| Method | Endpoint                 | Description |
| ------ | ------------------------ | ----------- |
| **GET**  | /api/v1/accommodations     | Retrieve all accommodations. Accessible to **everyone**. |
| **GET**  | /api/v1/accommodations/:id | Retrieve an accommodation by ID. Accessible to **everyone**. |
| **POST** | /api/v1/accommodations     | Create a new accommodation. Can only be performed by an **admin** or a **hotel manager**. The accommodation can only be created if the associated hotel exists. A maximum of 10 images can be associated with an accommodation. |
| **PUT**  | /api/v1/accommodations/:id | Update an accommodation by ID. Can only be performed by an **admin** or a **hotel manager**. The hotel field is immutable. Once an accommodation is booked, it becomes unavailable for further bookings. Additional images can be added to the accommodation as needed. |
| **DELETE** | /api/v1/accommodations/:id | Delete an accommodation by ID. Can only be performed by an **admin** or a **hotel manager**. The accommodation is removed from the hotel's accommodations array. All accommodation images are removed from Cloudinary storage. |

### Users

| Method | Endpoint                                  | Description |
| ------ | ----------------------------------------- | ----------- |
| **GET**  | /api/v1/users                               | Retrieve all users. Can only be performed by an **admin**. |
| **GET**  | /api/v1/users/:id                           | Retrieve a user by ID. Can only be performed by an **admin**. |
| **POST** | /api/v1/users/register                      | Register a new user. Accessible to **everyone**. |
| **POST** | /api/v1/users/login                         | Log in an existing user. Accessible to **everyone**. |
| **POST** | /api/v1/users/:newManagerId/to-manager/:hotelId | Promote a user to a hotel manager role. Can only be performed by an **admin** and only if a hotel exists for the user to manage. |
| **POST** | /api/v1/users/to-admin/:newAdminId          | Promote a user to an admin role. Can only be performed by an **admin**. |
| **POST** | /api/v1/users/:userId/book/:accommodationId | Book a specific accommodation. Can only be performed by an **authorized user**. |
| **PUT**  | /api/v1/users/:id                           | Update a user by ID. Can be performed by the **same user** or an **admin**. |
| **DELETE** | /api/v1/users/:id                         | Delete a user by ID. Can be performed by the **same user** or an **admin**. |