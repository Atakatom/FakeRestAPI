# FakeRestAPI

You can use the API online from the link,

https://fake-rest-api-deploy.herokuapp.com/

<br>

<h3>Introduction</h3>
<br>
<p>Welcome to the FakeRestAPI where you can find fake attributes about users. This documentation should help you familiarise yourself with the resources available and how to consume them with HTTP requests.</p>
        
<br>
<h3>Getting started</h3>
<br>
        
<p>Let's make your first API request to the FakeRestAPI!</p>
        
<p>I'll be using <a href="https://www.postman.com/">postman</a> for examples as it displays responses nicely and gives us a whole lot more useful information.</p>
 
<br>
<h3>Base URL : <strong>https://fake-rest-api-deploy.herokuapp.com/</strong></h3>
<br>
        
<p>The <strong>Base URL</strong> is the root URL for all of the API, if you ever make a request to FakeRestAPI and you get back a <strong>404 NOT FOUND</strong> response then check the Base URL first.</p>
        
<p>This API let's you do all Create, Read, Update, Delete operations on <strong>USERS</strong>.</p>
<br>

<p><strong>Attributes:</strong></p>
        
<ol>
    <li><code>full_name</code> <em>string</em> -- The name and surname of a user.</li>
    <li><code>country</code> <em>string</em> -- The country where the user is from.</li>
    <li><code>created_at</code> <em>date</em> -- Full date of the time when the user's account is created.</li>
    <li><code>id</code> <em>string</em> -- Unique id of that user.</li>
    <li><code>email</code> <em>string</em> -- The email adress of that user.
</ol>
<br>
<ul>
    <li> <h3>CREATE</h3>
    <br>
        <p>POST a single user with the URL:</p>
        <pre><code><strong>https://fake-rest-api-deploy.herokuapp.com/users</strong></code></pre>

<p>With the body:</p>

```json
{
    "full_name" : "Atakan Yontar",
    "country" : "Turkey",
    "email" : "atakanyontar@gmail.com"
}
```
<p>Example response:</p>

```json
{
    "id": 1646155611621,
    "full_name": "Atakan Yontar",
    "country": "Turkey",
    "email": "atakanyontar@gmail.com",
    "created_at": "2022-03-01T17:26:51.621Z"
}
```
```yaml
HTTP status: 200 OK
```
<br>
</li>
    <li> 
        <h3>READ</h3>
<br>
<p>GET all of the users with to the URL:</p>

<pre><code><strong>https://fake-rest-api-deploy.herokuapp.com/users/</strong></code></pre>
        
<p>Example response:</p>

```json     
{
    "full_name": "Luisa Koelpin",
    "country": "Austria",
    "created_at": "2012-12-27T18:51:33.419Z",
    "id": 0,
    "email": "Lauriane_Dickens@derrick.us"

    ... with the rest of the users 
}
```
```yaml
HTTP status: 200 OK
```
<br>
<p>GET the infomation of user with id:0 using the URL:</p>
<pre><code><strong>https://fake-rest-api-deploy.herokuapp.com/users/0</strong></code></pre>
<p>after users/, 0 can be any number and FakeRestAPI will tell you if such user exists or not.</p>

<p>Example response:</p>

```json
{
    "full_name": "Luisa Koelpin",
    "country": "Austria",
    "created_at": "2012-12-27T18:51:33.419Z",
    "id": 0,
    "email": "Lauriane_Dickens@derrick.us"
}
```
```yaml
HTTP status: 200 OK
```

</li>
<br>
<li>
<h3>UPDATE</h3>
<br>
        
<p>Change the full_name & country of user 3 with the URL:</p>
<pre><code><strong>https://fake-rest-api-deploy.herokuapp.com/users/3
</strong></code></pre>

        
<p>With the body:</p>

```json
{
    "full_name": "Atakan Yontar",
    "country": "Turkey"
}
```

<p>Example response</p>
        
```json
{
    "full_name": "Atakan Yontar",
    "country": "Turkey",
    "created_at": "1996-02-27T17:42:21.329Z",
    "id": 10,
    "email": "Freddie@taylor.com"
}
```

```yaml
HTTP status: 200 OK
```

</li>
<br>
<li> 
<h3>DELETE</h3>
<br>
        
<p>Delete the user 3 with the URL:</p>

<pre><code><strong>https://fake-rest-api-deploy.herokuapp.com/users/3</strong></code></pre>
        
<p>Example response:</p>

```json
{
    "message": "User is deleted!"
}
```
```yaml
HTTP status: 200 OK
```

</li>
</ul>



