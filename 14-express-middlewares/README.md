# Express Middlewares (The Checkpoints)

A Middleware is simply a function that sits between the Request and the Response. Instead of a request going directly to your route, it passes through one or more middlewares that can inspect, modify, or even block the request before it reaches its destination.

## The *Checkpoint* Analogy

Think of a Middleware like a security guard at an airport:

- **Request (You)**: You want to reach the Gate (The Route Handler).
- **Middleware 1 (ID Check)**: A guard checks your ID. If it's valid, they call `next()`.
- **Middleware 2 (Security Scan)**: Another guard scans your bags. If everything is clean, they call `next()`.
- **Route Handler (The Gate)**: You finally reach your plane.

**The catch**: If any guard (Middleware) finds a problem, they can stop you right there and send you back home (`res.end()`).

## What a Middleware Can Do

A middleware function has access to the `req` (Request), `res` (Response), and the `next` function. It can:

- **Execute any code**: Like logging the time of a request.
- **Modify `req` and `res`**: Add a user ID or a timestamp to the request object so the next functions can use it.
- **End the request-response cycle**: Stop a hacker or an unauthorized user before they reach your data.
- **Call `next()`**: Pass the control to the next middleware in the stack.

## Logging Middleware

The implementation is in `index.js`.

This `index.js` uses a custom Express middleware as a global logger.  
On every request, it:

- Logs timestamp, method, and path  
- Writes logs to `log.txt`  
- Attaches custom data to `req`  
- Passes control using `next()`

Flow:

Request → Logger → Second Middleware → Route

If `next()` or a response is not sent, the request will hang.



## Crucial Rules for Middlewares

- **The Order Matters**: Express runs middlewares in the exact order they are written in the code. If you place a logger after your routes, it will never run.
  
- **Don't forget `next()`**: If you don't call `next()` and you don't send a response (`res.end()`), the client's browser will just keep spinning forever (timeout).

- **Modifying `req`**: This is a powerful trick. You can fetch a user from a database in a middleware and attach it to `req.user`. Now, all your routes can see that user without querying the database again.

## Summary

- Middlewares are functions that process requests before they hit the final handler.

- They are used for Logging, Authentication, Input Validation, and Body Parsing.

- Always call `next()` unless you intend to end the request right there.

- `app.use()` is the way we apply middlewares globally.

## References

- Express Middleware Guide: https://expressjs.com/en/guide/using-middleware.html