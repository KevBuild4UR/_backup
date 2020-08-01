const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|contributors|ipls)/ },
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
                title: 'Available IPLs', path: '/ipls'
                
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
                title: '可用物品放置场景', path: '/ipls'
                
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


