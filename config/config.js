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
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer0();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

function aplayerfixed () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayerfixed'),
        theme: '#F57F17',
        fixed: true,
        audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
            theme: '#505d6b'
        }]
    });
}
