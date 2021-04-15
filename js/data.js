const data = [
    {
        title: 'Post title',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../assets/images/1.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../assets/images/avatar.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit adipisicing elitsit amet, consectetur adipisicing elitsit'
            }
        ]
    },
    {
        title: 'Post title',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../assets/images/2.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../assets/images/avatar.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit adipisicing elitsit amet, consectetur adipisicing elitsit'
            }
        ]
    },
    {
        title: 'Post title',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../assets/images/3.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../assets/images/avatar.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit adipisicing elitsit amet, consectetur adipisicing elitsit'
            }
        ]
    },
    {
        title: 'Post title',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../assets/images/4.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../assets/images/avatar.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit adipisicing elitsit amet, consectetur adipisicing elitsit'
            }
        ]
    },
    {
        title: 'Post title',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../assets/images/5.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../assets/images/avatar.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit adipisicing elitsit amet, consectetur adipisicing elitsit'
            }
        ]
    },
    {
        title: 'Post title',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../assets/images/6.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../assets/images/avatar.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit amet, consectetur adipisicing elitsit adipisicing elitsit amet, consectetur adipisicing elitsit'
            }
        ]
    }
];

if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify(data));
}

if (!localStorage.getItem('auth')) {
    localStorage.setItem(
        'auth',
        JSON.stringify({
            currentUser: null,
            users: [{ email: 'test@test.com', password: '123', sex: 'man', birthday: '12:00' }]
        })
    );
}
