class Post {
    constructor(title, img, description, comments) {
        this.title = title;
        this.img = img;
        this.description = description;
        this.comments = comments;
    }
}

class Comment {
    constructor(username, usernameImg, text) {
        this.username = username;
        this.usernameImg = usernameImg;
        this.text = text;
    }
}

class User {
    constructor({ email, password, sex, birthday }) {
        this.email = email;
        this.password = password;
        this.sex = sex;
        this.birthday = birthday;
    }
}

class PostsModel {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('posts')).map(
            post => new Post(post.title, post.img, post.description, post.comments)
        );
        const { currentUser, users } = JSON.parse(localStorage.getItem('auth'));
        this.currentUser = currentUser ? new User(currentUser) : null;
        this.users = users.map(user => new User(user));
    }

    getPosts = () => {
        return this.posts;
    };

    getPost = id => {
        return this.posts[id];
    };

    addPost = ({ title, img, description, comments }) => {
        const post = new Post(title, img, description, comments);
        this.posts.push(post);
        localStorage.setItem('posts', JSON.stringify(this.posts));
    };

    addComment = (id, { username, usernameImg, text }) => {
        const comment = new Comment(username, usernameImg, text);
        this.posts[id].comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(this.posts));
    };

    addUser = user => {
        const newUser = new User(user);
        this.users.push(newUser);
        this.currentUser = newUser;
        localStorage.setItem('auth', JSON.stringify({ currentUser: this.currentUser, users: this.users }));
    };

    setCurrentUser = user => {
        const existingUser = this.users.find(u => user.email === u.email && user.password === u.password);
        if (existingUser) {
            this.currentUser = new User(existingUser);
            localStorage.setItem('auth', JSON.stringify({ currentUser: this.currentUser, users: this.users }));
            return true;
        } else return false;
    };

    logout = () => {
        this.currentUser = null;
        localStorage.setItem('auth', JSON.stringify({ currentUser: this.currentUser, users: this.users }));
    };
}
