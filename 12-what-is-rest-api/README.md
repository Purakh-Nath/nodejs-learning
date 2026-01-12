# What is a REST API?

REST (REpresentational State Transfer) is not a technology or a language; it is an **Architectural Style**. It defines a set of rules for how the Client and Server should talk to each other so that the communication is standard and predictable.

---

## The Rules of REST

To call an API "RESTful," it should follow these core principles:

1. **Client-Server Architecture**  
   The Client (Frontend) and the Server (Backend) are completely independent.
   The server does not care whether the client is a web browser, a mobile app, or another server.

   As long as both follow the same REST rules -> such as using standard HTTP methods, resource-based URLs, and JSON for data, they can communicate with each other.
2. **Statelessness**  
   This is a big one. The server does not remember you. Every single request from the client must contain all the information needed to understand and process that request (like an Auth Token or User ID). The server doesn't "store" your session state between requests.

3. **Proper Use of HTTP Methods**  
   A REST API respects the "verb" of the request. You don't use a GET request to delete a user. You follow the standard:
   - GET: Retrieve data.
   - POST: Create new data.
   - PUT/PATCH: Update data.
   - DELETE: Remove data.

4. **Uniform Interface (Resource-Based)**  
   Everything in a REST API is a Resource. You don't name your URLs based on "Actions" (like `/getUsers` or `/deleteUser`). Instead, you use Nouns and let the HTTP method decide the action.

    | Action        | Bad (Action-based)    | Good (RESTful / Resource-based)   |
    |---------------|-----------------------|-----------------------------------|
    | Get all users | `/getAllUsers`        | `GET /users`                      |
    | Get user 1    | `/getUser/1`          | `GET /users/1`                    |
    | Create user   | `/createUser`         | `POST /users`                     |
    | Delete user 1 | `/deleteUser/1`       | `DELETE /users/1`                 |

---

## Implementation

we are going to build a REST API for Users. To make it real, we will follow these standards:
- **GET /users**: Send back a list of all users.
- **GET /users/:id**: Use Dynamic Path Parameters to find and send one specific user.
- **POST /users**: Take data from the request body and create a new entry.
- **PATCH /users/:id**: Find a user by ID and update their info.
- **DELETE /users/:id**: Remove a specific user from our "database" (the JSON file).

---

## Summary

- **Always use JSON**: Modern REST APIs almost exclusively use JSON for sending and receiving data.
- **Status Codes Matter**: Don't just send "Success" text. Send a `200 OK`, `201 Created`, or `404 Not Found`.
- **Nouns, not Verbs**: Keep your URLs simple (`/users`, `/products`, `/orders`).
- **Nesting**: If you want to get orders for a specific user, use `/users/1/orders`.