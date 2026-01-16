# HTTP Status Codes - Communicating Success and Failure

We have already learned about headers and how they provide context for our requests and responses. Now, we dive into **HTTP Status Codes**. Status codes are essential for letting the client (the browser or a tool like Postman) know whether its request was successful or if something went wrong on the server or client side.

Here is a detailed guide on what I learned and how to implement these status codes in our Node.js and Express applications.

---

## What are HTTP Status Codes?
Status codes are **3-digit numbers** that a server sends back to the client in the HTTP response. They communicate the outcome of the request. Think of it as a universal language for the web that tells you: 
- "Everything's fine,"
- "You did something wrong," or 
- "The server is having a bad day."

---

## The Five Classes of Status Codes
Status codes are grouped into five categories based on their first digit:

### 1. 1xx: Informational Responses (100-199)
These are used to tell the client that the request was received and the process is continuing.

- **Example**: 
  - *100 Continue*
  - *101 Switching Protocols*

### 2. 2xx: Success Responses (200-299)
This is what we want, It means the request was successfully received, understood, and accepted.

- **200 OK**: The standard response for successful HTTP requests.
- **201 Created**: The request was successful, and a new resource was created. This is perfect for POST requests when a new user or product is added.
- **202 Accepted**: The request has been received but not yet acted upon.
- **204 No Content**: The request was successful, but there’s no content to send back in the response.

### 3. 3xx: Redirection Messages (300-399)
Tells the client that further action needs to be taken to complete the request.

- **Example**: 
  - *301 Moved Permanently*
  - *302 Found*

These are commonly used in services like URL shorteners or during payment redirects.

### 4. 4xx: Client Error Responses (400-499)
The request contains bad syntax or cannot be fulfilled. This means the error is on the client's side.

- **400 Bad Request**: The server cannot or will not process the request due to an error on the client's side (e.g., missing data in the request body).
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content. Unlike 401, the client's identity is known to the server.
- **404 Not Found**: The server cannot find the requested resource. This is probably the most famous status code.

### 5. 5xx: Server Error Responses (500-599)
The server failed to fulfill an apparently valid request. This means something went wrong on the server side (e.g., a bug in the code or a database connection issue).

- **500 Internal Server Error**: A generic error message when no more specific message is suitable.
- **501 Not Implemented**: The server does not support the functionality required to fulfill the request.
- **503 Service Unavailable**: The server is currently unable to handle the request due to maintenance or overloading.

---

## Implementing Status Codes in Express

We can easily set status codes in **Express** using the `res.status()` method.

### 1. Setting a 201 Created Status for POST Requests
When a new resource is created, it's a good practice to send a **201** status instead of the default **200**.

```javascript
app.post("/api/users", (req, res) => {
    const body = req.body;
    // ... logic to create user ...
    return res.status(201).json({ status: "success", id: users.length });
});
```
### 2. Handling Missing Data with 400 Bad Request

If a user forgets to provide essential information, we should return a 400 status.
```javascript
app.post("/api/users", (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.email) {
        return res.status(400).json({ msg: "All fields are required..." });
    }
});
```

### 3. Dealing with 404 Not Found for Specific Resources
```javascript
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
});
```
## Notes

- **Standardization is Key**: Status codes are a universal standard, making it easier for developers to build and debug applications.

- **Improved Debugging**: Using specific status codes helps you and other developers quickly identify whether an issue is on the client or server side.

- **Postman is Indispensable**: Tools like Postman allow you to see these status codes clearly, which is critical for testing your APIs.

---

## Summary

Status codes are the heartbeat of HTTP communication.

- **2xx** = Success
- **4xx** = Client Error
- **5xx** = Server Error

Use `res.status(code)` in Express to send the appropriate status back to the client.

Always aim to be as specific as possible with your status codes to make your API more robust and user-friendly.

For more detailed information on HTTP status codes, visit the [MDN Web Docs on HTTP Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status).