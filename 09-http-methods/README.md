# Understanding HTTP Methods

In this module, I explored **HTTP Methods**. While the URL tells the server *where* to go, the Method tells the server *what* to do. This is the foundation of building interactive web applications where users can not only view data but also submit it.

---

## The 5 Main HTTP Methods

1.  **GET:** Used when we want to **get/retrieve** data from the server.
    - *Example:* Visiting a website, searching on Google, or viewing a profile.
    - *Note:* By default, the browser always makes a GET request when we type a URL.

2.  **POST:** Used when we want to **send/submit** data to the server to create something new.
    - *Example:* Filling out a signup form, posting a comment, or logging in.

3.  **PUT:** Typically used for uploading files or putting something specific on the server.

4.  **PATCH:** Used to **update** or change existing data.
    - *Example:* Changing our username or updating a status.

5.  **DELETE:** Used to **remove** data from the server.
    - *Example:* Deleting a post or closing an account.

---



### 1. `req.method`
I learned that the `req` object has a property called `method` that tells us exactly what type of request the user is making (GET, POST, etc.).

### 2. Handling Multiple Intents on One URL
One URL can do two different things based on the method. 
- **GET `/signup`**: Shows the user the empty form to fill out.
- **POST `/signup`**: Receives the data from that form and saves it to the database.

### 3. The Browser Default
I confirmed through the **Network Tab** in the browser that every time I refresh a page or click a link, the browser sends a **GET** request. To send a **POST** request, we usually need an HTML Form or a tool like Postman.

---

##  Method-Based Logic

I updated my server to log the method type into `server.txt`. Now my logs look like this:
`[GET] /about` or `[POST] /signup`.

I also implemented logic where the `/signup` route reacts differently depending on if you are just looking at the page (GET) or submitting data (POST).

---


## Development Note: --watch

This project uses `node --watch`, which automatically restarts the server
whenever we make changes to the code. This is useful during development
so we don't need to restart the server manually.


### Summary
- GET is for reading; POST is for creating.

- `req.method` helps the server distinguish between different user intents on the same path.

- Using the right method makes the API clean and standard.

- While we can handle these manually with if/else, I can see how this might get complicated as the app grows.