class PostsController {
    constructor() {
        this.displayProfile();
        const url = window.location.href;
        if (url.includes('/create-post')) {
            this.createPostFormEvent();
        } else if (url.includes('/post')) {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('post');
            this.renderPostPage(id);
        } else if (url.includes('/login')) {
            this.loginFormEvent();
        } else if (url.includes('/registration')) {
            this.registrationFormEvent();
        } else if (url.includes('/profile')) {
            this.displayProfilePage();
        } else if (url.includes('/index.html')) {
            this.renderHomePage();
        }
    }
    #model = new PostsModel();
    #view = new PostsView();

    displayProfile = () => {
        if (!this.#model.currentUser) {
            [...this.#view.profilePage].map(link => (link.style.display = 'none'));
        } else {
            const logoutBtn = this.#view.createLogoutBtn();
            logoutBtn.onclick = () => {
                this.#model.logout();
                location.replace('/index.html');
            };
            this.#view.loginLogout.innerHTML = '';
            this.#view.loginLogout.appendChild(logoutBtn);
        }
    };

    renderHomePage = () => {
        const posts = this.#model.getPosts();
        posts.forEach((post, id) => {
            const postElem = this.#view.createPostElem(id, post.title, post.img, post.description);
            this.#view.postsContainer.appendChild(postElem);
        });
    };

    renderPostPage = id => {
        const post = this.#model.getPost(id);
        const postElem = this.#view.createPostPage(post.title, post.img, post.description);
        this.#view.postContainer.appendChild(postElem);
        if (!post.comments.length) {
            this.#view.renderEmptyCommentsMessage();
        } else {
            post.comments.forEach(comment => {
                const commentElem = this.#view.createCommentElem(comment.username, comment.usernameImg, comment.text);
                this.#view.commentsContainer.appendChild(commentElem);
            });
        }

        this.#view.commentForm.onsubmit = event => {
            event.preventDefault();
            const comment = new Comment('Anton', '../assets/images/avatar.jpg', this.#view.commentTextInput.value);
            this.#model.addComment(id, comment);
            location.reload();
        };
    };

    createPostFormEvent = () => {
        this.#view.postForm.onsubmit = () => {
            const post = new Post(
                this.#view.titleInput.value,
                this.#view.imgUrlInput.value,
                this.#view.descriptionInput.value,
                []
            );
            this.#model.addPost(post);
        };
    };

    registrationFormEvent = () => {
        this.#view.registrationForm.onsubmit = () => {
            const sex = [...this.#view.sexRadioBtns].find(btn => btn.checked).value;
            const newUser = {
                email: this.#view.emailInput.value,
                password: this.#view.passwordInput.value,
                sex,
                birthday: this.#view.dateInputs.value
            };
            this.#model.addUser(newUser);
        };
    };

    loginFormEvent = () => {
        this.#view.loginForm.onsubmit = () => {
            const user = {
                email: this.#view.emailInput.value,
                password: this.#view.passwordInput.value
            };
            const isLogin = this.#model.setCurrentUser(user);
            !isLogin ? alert('Email or password is incorrect!') : null;
        };
    };

    displayProfilePage = () => {
        const { email, sex, birthday } = this.#model.currentUser;
        this.#view.profileEmail.innerHTML = email;
        this.#view.profileSex.innerHTML = sex;
        this.#view.profileBirthday.innerHTML = birthday;
    };
}

const app = new PostsController();
