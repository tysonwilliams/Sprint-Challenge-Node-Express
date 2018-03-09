## Questions
1. What is Node?

  * Node is a JavaScript runtime evironment built of the Chrome V8 engine
  * It's used for backend development, particularly to create servers and manage packages (NPM)

2. What is Express?

  * Express is a Node framework that makes it easier or simpler to use node in server development

3. What is Middleware?

  * Middeleware is separate pieces of code packages that can be imported and used in other code files

4. What is an endpoint?

  * An endpoint is an URL/URI that when reached produces a get/post/delete/put request and / or response from a web server, for example, a `"/users"` endpoint returns a list of users (the response, or `res`) from an object of users:
  ```javascript
  server.get("/users", (req, res) => {
  res.status(STATUS_SUCCESS);
  res.send(Object.values(users));
  });
  ```