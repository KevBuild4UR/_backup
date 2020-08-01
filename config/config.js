const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '中文', path: '/zh/', matchPath: /^\/zh/ },
];

docute.init({
    landing: 'landing-page.html',
    title: 'Neptune Works',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Contributors', path: '/contributors'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh/'
            },
            {
                title: '贡献者', path: '/zh/contributors'
            },
            {
                title: '语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'neptune',
            tags: ['english', 'zh'],
            url: 'https://www.neptune.work'
        }),
    ]
});


