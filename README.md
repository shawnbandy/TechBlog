# MVC Tech Blog

## Acceptance Criteria
    1. Landing page should be a home page that shows existing blog posts ✅
    2. Landing page should have navigation to the homepage and dashboard ✅
    3. Landing page should have a log in option ✅
    4. clicking any other links in the nav bar should redirect you to log in/sign up ✅ 
    5. Signing up should require a username and password. User credentials should be saved ✅
    6. User should be able to use same username/password whenever signing in ✅
    7. A signed in user should be able to go to the dashboard and log out ✅
    8. Existing blog posts should have a title, contents, OP's username, and date created for post ✅
    9. Existing blog posts should be able to be commented on only by signed in users ✅
    10. Comments should display the comment, creator's username, and date created ✅
    11. Dashboard should display created blog posts ✅ 
    12. Dashboard should allow user to create and save a new blog post ✅
    13. Blog posts should have a title and contents ✅ 
    14. After saving a blog post, user should be redirected back to the dashboard page ✅
    15. Clicking on a blog post on the dashboard should allow the user to delete or update it ✅
    16. User should be able to logout via a logout button on the dashboard ✅
    17. After a set amount of time, user should automatically be logged out ✅


## Application Specifics
### Application must use: 
    1. Express-handlebars ✅
    2. MySQL2 ✅
    3. Sequelize ✅
    4. Dotenv package ✅
    5. Bcrypt package ✅
    6. Express-session ✅
    7. Connect-Session-Sequelize ✅
### Models
    1. User
        A. Has ID ✅
        B. Has Username ✅
        C. Has Password ✅
    2. Post
        A. Has ID ✅
        B. Has Title ✅
        C. Has body/content ✅
        D. References the user ✅
    3. Comment
        A. Has ID ✅
        B. Has body/content ✅
        C. Has User ✅
        D. References the user ✅
        E. References the Post ✅

 
## Accomplished By
    1. Using models, seeding, and a db to store user, post, and comment data
    2. Having user authentication at each page to ensure that the user is logged in prior to seeing anything on the page
    3. Using routes to render a home page, login page, main page, dashboard, viewing, editing pages via handlebars.js
    4. Using API routes to handle GET/POST/PUT/DELETE routes for models
    5. Using JS files for scripting, which handles form submits, API calls, and other interactions

## Application Description
Return to the early ages of blog posts with this complete front to back end application. Sign up or log into your account to begin viewing and posting blogs. Complete with a dashboard to see your posts, ability to comment on your and other's posts, ability to edit or delete your post, and ability to see light statistics like post creation and update dates. Finally, an auto log out feature for user security. 

Link to Repo: https://github.com/shawnbandy/TechBlog

Link to Deployed Page: https://mvc-tech-blog-shawncanavan.herokuapp.com/

Application Image: ![image](https://user-images.githubusercontent.com/105885313/194713160-0c392150-309d-4d17-8fa0-6d8156cbba6e.png)
