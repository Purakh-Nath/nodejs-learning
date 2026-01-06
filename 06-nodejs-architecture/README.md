# How Node.js Works? (Internal Architecture)

This module covers the Internal Architecture of Node.js, focusing on how it manages high concurrency despite being single-threaded. Understanding the relationship between the Event Loop and the Thread Pool is essential for writing scalable backend applications.

---

## The Node.js Flow: How a Request is Handled

Here is exactly how a request travels through the system:

1.  **The Client:** A user sends a request to our Node.js server.
2.  **The Event Queue:** All incoming requests are placed in a "Line" called the Event Queue. Node handles them one by one (FIFO - First In, First Out).
3.  **The Event Loop:** This is the heart of Node.js. It constantly watches the Event Queue.
    - If the request is **Non-Blocking** (simple tasks), the Event Loop processes it immediately and sends the response.
    > **Examples:** Basic math calculations, string formatting, JSON parsing, or simple logic.
    - If the request is **Blocking** (heavy tasks like DB queries or File I/O), it hands the work over to the **Thread Pool**.
    > **Examples:** Database queries, File I/O (reading/writing large files), or Password Hashing (Cryptography).
4.  **The Thread Pool:** This is a group of "Workers" (Threads) that handle heavy lifting. By default, Node.js provides **4 threads**.
5.  **The Response:** Once a thread finishes the heavy task, it returns the result to the Event Loop, which then sends the response back to the client.

---

## Blocking vs. Non-Blocking Code

This is the most important technical distinction for a Backend Developer:

| Feature | Blocking (Synchronous) | Non-Blocking (Asynchronous) |
| :--- | :--- | :--- |
| **Flow** | Stops execution until task is done. | Continues execution; task runs in background. |
| **Mechanism** | Occupies the main thread. | Uses Thread Pool or OS kernel. |
| **Performance** | Can make the server slow/unresponsive. | High scalability and fast response times. |
| **Code** | `readFileSync`, `writeFileSync` | `readFile`, `writeFile` |

### Why should we avoid Blocking code?
If your thread pool is full (e.g., 4 heavy requests are running), the 5th user has to wait. If you write your entire server using Blocking code, it will crash or lag under heavy traffic. **Always aim for Non-Blocking code.**

---

## Experimentation

I used the `os` module to see how many "Workers" my machine can actually support.

```javascript
const os = require("os");
console.log("Total CPU Cores available:", os.cpus().length); // In my case, it returned 12
```

This means my CPU has 12 cores, and I can technically scale my Thread Pool up to 12 threads to handle more concurrent blocking tasks.

I also ran a comparison script where the Synchronous read stopped my console logs, while the Asynchronous read allowed the program to finish first and print the file data later.

## How to Run
Ensure you have a `contacts.txt` file in the folder.

Run the demo script: `node architecture.js`

## Summary
**Node.js is Single-Threaded** but uses a **Thread Pool** for heavy tasks.

**Event Loop** is the manager that decides where a request goes.

**Non-Blocking** code is the secret to Node's performance.

Use the `os` **module** to understand your system's hardware limits.