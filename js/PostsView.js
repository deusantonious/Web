class PostsView {
    constructor() {
        this.postsContainer = document.getElementById('posts-container');
        this.commentsContainer = document.getElementById('comments-container');
        this.postContainer = document.getElementById('post-container');
        this.commentForm = document.getElementById('comment-form');
        this.postForm = document.getElementById('post-form');
        this.titleInput = document.getElementById('title');
        this.imgUrlInput = document.getElementById('image');
        this.descriptionInput = document.getElementById('description');
        this.commentTextInput = document.getElementById('text');
        this.loginForm = document.getElementById('login-form');
        this.registrationForm = document.getElementById('registration-form');
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.sexRadioBtns = document.getElementsByName('sex');
        this.dateInputs = document.getElementById('birthday');
        this.profilePage = document.querySelectorAll('.profile');
        this.loginLogout = document.getElementById('login-logout');
        this.profileEmail = document.getElementById('profile-email');
        this.profileSex = document.getElementById('profile-sex');
        this.profileBirthday = document.getElementById('profile-birthday');
    }

    createPostElem = (id, title, img, description) => {
        const post = document.createElement('div');
        post.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-5');
        post.innerHTML = `
        <img style="height: 296px; width: 296px;"class="card-img-top shadow" src="${img}" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
                ${description}
            </p>
            <a href="./post.html?post=${id}" class="card-link text-light">
            Learn more...
            </a>
        </div>`;
        return post;
    };

    createPostPage = (title, img, description) => {
        const post = document.createElement('div');
        post.classList.add('row', 'flex-column', 'flex-lg-row', 'bg-dark');
        post.innerHTML = `
                <div class="col-12 col-lg-7 jumbotron order-2 text-light">
                    <h1 class="display-1 fw-bold">${title}</h1>
                    <p class="lead">
                        ${description}
                    </p>
                </div>
                <img src="${img}" class="col-12 col-lg-5 img-fluid order-1" alt="Responsive image" />`;
        return post;
    };

    createCommentElem = (username, usernameImg, text) => {
        const comment = document.createElement('div');
        comment.classList.add('rounded', 'row', 'justify-content-md-center', 'bg-light', 'text-dark', 'mb-3');
        comment.innerHTML = `
        <div class="col-md-1 col-3 pb-3">
                    <img src="${usernameImg}" alt="avatar" class="mt-3 rounded-circle" width="70" />
                </div>
                <div class="col-md-11 col-9 text-start">
                    <div class="row">
                        <div class="col">
                            <h4>${username}</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p class="col-11 text-wrap">
                                ${text}
                            </p>
                        </div>
                    </div>
                </div>`;
        return comment;
    };

    renderEmptyCommentsMessage = () => {
        const empty = document.createElement('h3');
        empty.innerHTML = 'No comments:(';
        this.commentsContainer.appendChild(empty);
    };

    createLogoutBtn = () => {
        const elem = document.createElement('a');
        elem.classList.add('nav-link');

        elem.innerHTML = 'Logout';
        return elem;
    };
}
