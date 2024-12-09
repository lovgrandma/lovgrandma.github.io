import { init, h, classModule, propsModule, styleModule, eventListenersModule } from 'https://cdn.jsdelivr.net/npm/snabbdom@3.6.2/+esm'

const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule
])

const SKILLS = [ 'System Architecture', 'Web UI UX', 'Multi-tenant Infrastructure', 'Concurrency', 'Distributed Systems', 'Real Time Data Transfer', 'Data Modelling', 'Rapid Product Development' ]
const LANGUAGES = [ 'Javascript', 'Go', 'Python', 'Java', 'C Sharp', 'Php' ]
const TOPICS = [ 'PL SQL', 'Redis', 'Next_js React', 'gRPC', 'Websockets', 'Playwright', 'Neo4j', 'NGINX', 'Kubernetes', 'AWS', 'Postgres', 'Proxmox', 'FFmpeg', 'Node js', 'RTMP', 'Live Chat', 'E-commerce', 'Redux', 'Google Ads IMA SDK', 'Twilio', 'MongoDB' ]

const ALL_SECTIONS = Object.freeze({
    SKILLS: SKILLS,
    LANGUAGES: LANGUAGES,
    TOPICS: TOPICS
})

const handleSpecialChar = c => {
    if (c === 'C Sharp') {
        return 'C#'
    } else if (c === 'Next_js React') {
        return 'Next.js/React'
    } else if (c === 'Node js') {
        return 'Node.js'
    }
    return c
}

function buildContainer(container, header, items, f, options) {
    const c = document?.getElementById(container)
    if (c) {
        const vLan = items.map((m, i) => h(options?.itemProps ?? `a#${m?.toLowerCase()?.replaceAll(' ', '_') ?? ''}-button.font-bold.text-sm.rounded-2xl.px-2.py-1.interact-button.gentle-shake`, { props: { href: `#${m}`, i: i }, style: { border: '1px solid grey' }, on: { click: e => window.addNewTopic(e, m, header) }}, `${handleSpecialChar(m)}`))
        var vh = h(options?.hProps ?? 'h5.mt-8', null, header)
        var v = h(`div#${header}-subContainer.flex.gap-x-2.gap-y-2.flex-wrap.mt-2`,
            vLan
        )
        var vLoadTo = h(`div#${header}-loadTo`)
        var vc = h(`div#${container}`, [ vh, v, vLoadTo ])
        patch(c, vc)
    }
}

window.unblurAll = () => {
    var c = document.getElementsByClassName('blur')
    for (let i = 0; i < c?.length; i++) {
        if (c[i]?.classList && !c[i].classList?.contains('unblur')) {
            c[i].classList.add('unblur')
        }
    }
}

setInterval(() => {
    window.unblurAll()
}, 250)

window.runTypedJob = (data, i, s) => {
    if (data?.[i]?.container) {
        var c = document.getElementById(data[i].container)
        if (data[i]?.content) {
            new Typed(`#${data[i].container}`, {
                strings: [ data[i].content ],
                typeSpeed: 0,
                showCursor: null,
                onComplete: () => {
                    if (data[i + 1]) {
                        setTimeout(() => {
                            window.runTypedJob(data, i + 1, s)
                        }, data[i]?.delay ?? 1)
                    }
                }
            })
        }
        if (data[i]?.href) {
            if (c) {
                c.href = data[i].href
            }
        }
        if (c?.classList?.contains('story-media') && !c.classList.contains('story-media-filled') && s === 'media') {
            c.classList.add('story-media-filled')
        }
    }
}

const content = new Map()
content.set('javascript', {
    h5: [
        {
            container: `javascript-h5`,
            content: 'Javascript',
        }
    ],
    link: [
        {
            container: `javascript-link`,
            href: 'https://github.com/lovgrandma/minipost-client',
        }
    ],
    media: [
        {
            container: `javascript-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/minipost-screen.png\'>'
        }
    ],
    content: [
        {
            container: `javascript-content`,
            content: `<div>I originally built a YouTube clone using Javascript and React. This was my first attempt at figuring out seamless onboarding flows for users, building a simple CRUD app, modelling a database to serve millions of users and iterating on a personal project over time. I developed a deeper understanding of the language with promises and javascript's single-threaded nature. Click on "Next.js/React" under tools below to learn more.</div>`
        }
    ],
})

content.set('go', {
    h5: [
        {
            container: `go-h5`,
            content: 'Go',
        }
    ],
    link: [
        {
            container: `go-link`,
            href: 'https://github.com/lovgrandma/tycoon-services/blob/master/ad/ad_queue/ad_queue.go',
        }
    ],
    media: [
        {
            container: `go-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/go-livestreaming-rclone.jpeg\'>'
        }
    ],
    content: [
        {
            container: `go-content`,
            content: `<div>I wanted to explore Golang for its simple concurrency, more disciplined packages and minimalist approach for production ready applications. I decided to reimplement a Mpeg-Dash and HLS FFmpeg video transcoding pipeline I had originally built in Node.js. I explored using gRPC across different servers of different languages and experimented with a pipeline that generated "packed" advert videos that I would then serve using VAST tags to the client Google IMA SDK advert video player. Click "RTMP" below to see my attempt to build a clusterized livestreaming service in Go</div>`
        }
    ],
})

content.set('python', {
    h5: [
        {
            container: `python-h5`,
            content: 'Python',
        }
    ],
    link: [
        {
            container: `python-link`,
            href: 'https://github.com/Tycoon-Systems-Corp/tycoon-web-crawler-python-base/blob/main/tycoon_crawler/tycoon_crawler/spiders/tycoon_spider.py',
        }
    ],
    media: [
        {
            container: `python-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/apc-scrape.jpeg\'>'
        }
    ],
    content: [
        {
            container: `python-content`,
            content: `<div>I built both a gRPC Python client to receive trades in real time from an internal intra-day trades service at RBC Capital Markets and also built a gRPC Playwright web scraper to pull retail product information using open graph standards.</div>`
        }
    ],
})

content.set('java', {
    h5: [
        {
            container: `java-h5`,
            content: 'Java',
        }
    ],
    link: [
        {
            container: `java-link`,
            href: 'https://github.com/lovgrandma/foodlist/blob/master/src/foodbase/Controller.java',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `java-content`,
            content: `<div>Collaborated with a classmate on a Java based OOP application that allowed for users to track their food consumption and foods they have eaten. Additionally, at RBC Capital Markets I was able to briefly examine the runtime for an application processing billions of dollars in trades for the global Swift financial messaging infrastructure. This was very informative about the changing requirements that banks have to continually update their systems.</div>`
        }
    ],
})

content.set('c_sharp', {
    h5: [
        {
            container: `c_sharp-h5`,
            content: 'C#',
        }
    ],
    link: [
        {
            container: `c_sharp-link`,
            href: 'https://github.com/lovgrandma/LINQPandemicDataAnalysis',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `c_sharp-content`,
            content: `<div>Quickly iterated on a C# LINQ CRUD application to examine geo-locational Covid cases data using entities to interface with database instance</div>`
        }
    ],
})

content.set('php', {
    h5: [
        {
            container: `php-h5`,
            content: 'PHP',
        }
    ],
    link: [
        {
            container: `php-link`,
            href: 'https://www.daycare-canada.com/',
        }
    ],
    media: [
        {
            container: `php-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/daycare-canada.png\'>'
        }
    ],
    content: [
        {
            container: `php-content`,
            content: `<div>Designed UI/UX and built PHP Wordpress website from scratch using internal Wordpress hooks and functions and integrated with Woo-commerce to support e-commerce requirements and collection releases for menswear fashion business.</div>`
        }
    ],
})

content.set('system_architecture', {
    h5: [
        {
            container: `system_architecture-h5`,
            content: 'System Architecture',
        }
    ],
    link: [
        {
            container: `system_architecture-link`,
            href: 'https://www.tycoon.systems/platform',
        }
    ],
    media: [
        {
            container: `system_architecture-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/ezgif-6-041de09617.gif\'>'
        }
    ],
    content: [
        {
            container: `system_architecture-content`,
            content: `<div style="font-size: .8rem; color: grey;">The architecture diagram above was simplified for presentation to non-technical stake holders</div><div>Architected and developed multi-tenant multimedia architecture to support complete requirement for hosting live TV streaming platforms with community features.</div>`
        }
    ],
})

content.set('web_ui_ux', {
    h5: [
        {
            container: `web_ui_ux-h5`,
            content: 'Web UI/UX',
        }
    ],
    link: [
        {
            container: `web_ui_ux-link`,
            href: 'https://www.tycoon.systems/w?v=8e706d41-9366-45ba-a03b-adb218b816a3',
        }
    ],
    media: [
        {
            container: `web_ui_ux-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/ui-ux.png\'>'
        }
    ],
    content: [
        {
            container: `web_ui_ux-content`,
            content: `<div>Built reusable modules to be obfuscated for delivery to multi-tenant customers such that they have access to presentation layer while the controllers and dependencies are hidden</div>`
        }
    ],
})

content.set('multi-tenant_infrastructure', {
    h5: [
        {
            container: `multi-tenant_infrastructure-h5`,
            content: 'Multi-tenant Infrastructure',
        }
    ],
    link: [
        {
            container: `multi-tenant_infrastructure-link`,
            href: 'https://www.tycoon.systems/w?v=ffdf8326-c854-40cc-aed1-6c18c9d02614',
        }
    ],
    media: [
        {
            container: `multi-tenant_infrastructure-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/multi-tenant-infrastructure.png\'>'
        }
    ],
    content: [
        {
            container: `multi-tenant_infrastructure-content`,
            content: `<div>Designed the architecture for a multi-tenant platform to support multiple customers using the same API. Setting up scripts to onboard new customers creating new AWS S3 buckets, Cloudfront CDN and Postgresql schemas to support all functionality for them to start serving real customers at their web domain</div>`
        }
    ],
})

content.set('concurrency', {
    h5: [
        {
            container: `concurrency-h5`,
            content: 'Concurrency',
        }
    ],
    link: [
        {
            container: `concurrency-link`,
            href: 'https://www.tycoon.systems/upload',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `concurrency-content`,
            content: `<div>Iterated on video upload pipeline to handle large lossy video upload processes from multiple users on Node.js clusterized API for MpegDash and HLS transcoding for consuming video on demand on any website in the world</div>`
        }
    ],
})

content.set('distributed_systems', {
    h5: [
        {
            container: `distributed_systems-h5`,
            content: 'Distributed Systems',
        }
    ],
    link: [
        {
            container: `distributed_systems-link`,
            href: 'https://www.tycoon.systems/upload',
        }
    ],
    media: [
        {
            container: `distributed_systems-media`,
            content: '<img src=\'https://d2p2h79srr15gg.cloudfront.net/img/ScreenShot2022-12-01at10.png\'>'
        }
    ],
    content: [
        {
            container: `distributed_systems-content`,
            content: `<div>Built Go RTMP livestreaming service, containerized via Docker and I am currently testing running k8s cluster to serve distributed HD livestreaming service from my personal Hp dl 380 g9's on proxmox Ubuntu VM. Additionally I built a VOD upload service that functions behind a clusterized Node.js API for transcoding user videos in various formats to normalized x264 and AAC format in separate MpegDash and HLS playlists</div>`
        }
    ],
})

content.set('real_time_data_transfer', {
    h5: [
        {
            container: `real_time_data_transfer-h5`,
            content: 'Real Time Data Transfer',
        }
    ],
    link: [
        {
            container: `real_time_data_transfer-link`,
            href: 'https://www.rbccm.com/en/',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `real_time_data_transfer-content`,
            content: `<div>Developed and built CI/CD pipeline for Python bi-directional gRPC client to serve real time intra-day trading data (10,000+ record paints) using Pandas for traders and quants at RBC Capital Markets. Additionally built live chat functionality for personal project empowering fast chat updates using Redis Streams</div>`
        }
    ],
})

content.set('data_modelling', {
    h5: [
        {
            container: `data_modelling-h5`,
            content: 'Data Modelling',
        }
    ],
    link: [
        {
            container: `data_modelling-link`,
            href: 'https://www.tycoon.systems/upload',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `data_modelling-content`,
            content: `<div>Modelled over 25 tables for serving e-commerce across different countries (Stripe, paystack), capturing forums and threads, video and livestreams, articles, collections containing other records. Additionally, experimented with copying data to Neo4j in older YouTube clone project which allowed for fetching only comments that friends and friends of friends had posted</div>`
        }
    ],
})

content.set('rapid_product_development', {
    h5: [
        {
            container: `rapid_product_development-h5`,
            content: 'Rapid Product Development',
        }
    ],
    link: [
        {
            container: `rapid_product_development-link`,
            href: 'https://www.tycoon.systems/w?v=e25015cf-0e0e-47b9-93f2-b649f1d4edae',
        }
    ],
    media: [
        {
            container: `rapid_product_development-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/immigration-poc.png\'>'
        }
    ],
    content: [
        {
            container: `rapid_product_development-content`,
            content: `<div>Built private Immigration hub in 2 days of development time to provide news via news aggregation service, legal consultation products with transactions handled using internally built cart handling different currencies and private forums community for customers</div>`
        }
    ],
})

content.set('pl_sql', {
    h5: [
        {
            container: `pl_sql-h5`,
            content: 'PL/SQL',
        }
    ],
    link: [
        {
            container: `pl_sql-link`,
            href: 'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/JesseThompsonDBAS32100Assignment2.txt',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `pl_sql-content`,
            content: `<div>Learned advanced SQL concepts such as PL SQL procedures in school and managed over 900 tables at RBC Capital Markets that were dependent on procedures ran daily to support transformation of incoming live trades</div>`
        }
    ],
})

content.set('redis', {
    h5: [
        {
            container: `redis-h5`,
            content: 'Redis',
        }
    ],
    // link: [
    //     {
    //         container: `redis-link`,
    //         href: ''
    //     }
    // ],
    media: [
        {
            container: `redis-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/livestream-w-chat-2.jpeg\'>'
        }
    ],
    content: [
        {
            container: `redis-content`,
            content: `<div>Built systems to support live chat between two individuals bi-directionally allowing users to see what the other person is typing before the other person sent it. Built live chat using Redis streams for customer production application (www.fidio.ca) and also leveraged for storing batch updates to push analytics to Clickhouse database for processing with Buffer function</div>`
        }
    ],
})

content.set('next_js_react', {
    h5: [
        {
            container: `next_js_react-h5`,
            content: 'Next.js/React',
        }
    ],
    link: [
        {
            container: `next_js_react-link`,
            href: 'https://www.tycoon.systems/w?v=ffdf8326-c854-40cc-aed1-6c18c9d02614',
        }
    ],
    media: [
        {
            container: `next_js_react-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/nextjs-multi-tenant-embed.png\'>'
        }
    ],
    content: [
        {
            container: `next_js_react-content`,
            content: `<div>Built framework for Next.js TV application handling automatic user location and IP tracking, onboarding via OAuth, modular controllers for delivery to users, live chat, automatic seo wrangling based on page type and record fetched, collections for videos, video player for handling VOD or livestreams conditionally, SEO optimized chapters, e-commerce cart handling multiple currencies, options, quantities and much more. Collaborated and owned Global TV app for delivery on LG TV to serve millions of Canadians across the country. Built multi-pane trading app at RBC Capital Markets to integrate with Observable HQ, internal RBC trading data, real time updates via socket.io and multi-step requests to run complex joins to get parameters of multiple types (date, lists of counterparties, metals, indices, etc) for users to select parameters for report query. It would be better to get on call for me to explain my depth of understanding of React and Next.js +1-647-492-1410.</div>`
        }
    ],
})

content.set('grpc', {
    h5: [
        {
            container: `grpc-h5`,
            content: 'gRPC',
        }
    ],
    link: [
        {
            container: `grpc-link`,
            href: 'https://github.com/lovgrandma/tycoon-services/blob/master/video/video.proto',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `grpc-content`,
            content: `<div>Implemented gRPC models on Go and Node.js for cross-service communication to initialize new video transcoding jobs after Bull job queue fires individual job</div>`
        }
    ],
})

content.set('websockets', {
    h5: [
        {
            container: `websockets-h5`,
            content: 'Websockets',
        }
    ],
    link: [
        {
            container: `websockets-link`,
            href: 'https://www.tycoon.systems/w?v=7e5431a8-7174-4717-96ac-97fff60d42ad'
        }
    ],
    media: [
        {
            container: `websockets-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/livestream-w-chat.jpeg\'>'
        }
    ],
    content: [
        {
            container: `websockets-content`,
            content: `<div>Using socket.io implemented Sockets Container in React applications for bi-directional communication between client and server to support initializing existing chats, join new chat, scraper updates, video transcode process updates and authorization flows</div>`
        }
    ],
})

content.set('playwright', {
    h5: [
        {
            container: `playwright-h5`,
            content: 'Playwright',
        }
    ],
    link: [
        {
            container: `playwright-link`,
            href: 'https://github.com/Tycoon-Systems-Corp/tycoon-web-crawler-python-base',
        }
    ],
    media: [
        {
            container: `playwright-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/1714105537037.jpg\'>'
        }
    ],
    content: [
        {
            container: `playwright-content`,
            content: `<div>Built web scraper to pull e-commerce retail products using open graph standards leveraging javascript-compatible Python Playwright library</div>`
        }
    ],
})

content.set('neo4j', {
    h5: [
        {
            container: `neo4j-h5`,
            content: 'Neo4j',
        }
    ],
    media: [
        {
            container: `neo4j-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-12-09-neo4j.png\'>'
        }
    ],
    content: [
        {
            container: `neo4j-content`,
            content: `<div>Duplicated incoming records from MongoDB to Neo4j graph database to empower recommended views for videos and articles on "Minipost" YouTube clone personal project. Additionally empowering only comments of users who are friends and friends of friends</div>`
        }
    ],
})

content.set('nginx', {
    h5: [
        {
            container: `nginx-h5`,
            content: 'Nginx',
        }
    ],
    // media: [
    //     {
    //         container: `nginx-media`,
    //         content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-12-09-neo4j.png\'>'
    //     }
    // ],
    content: [
        {
            container: `nginx-content`,
            content: `<div>Build nginx rule configurations on multiple AWS EC2 Ubuntu instances to support REST calls, Socket.io connections, RTMP streams using nginx rtmp module and gRPC calls across different internal servers and cross web origin</div>`
        }
    ],
})

content.set('kubernetes', {
    h5: [
        {
            container: `kubernetes-h5`,
            content: 'Kubernetes',
        }
    ],
    // media: [
    //     {
    //         container: `nginx-media`,
    //         content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-12-09-neo4j.png\'>'
    //     }
    // ],
    content: [
        {
            container: `kubernetes-content`,
            content: `<div>Ongoing: Implementing Go RTMP livestreaming service for distributed computing on HP DL 380 G9 proxmox server. Handling rtmp /servestream, /terminate and /startstream ingress endpoints</div>`
        }
    ],
})

content.set('aws', {
    h5: [
        {
            container: `aws-h5`,
            content: 'Amazon Web Services',
        }
    ],
    link: [
        {
            container: `aws-link`,
            href: 'https://www.tycoon.systems',
        }
    ],
    // media: [
    //     {
    //         container: `nginx-media`,
    //         content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-12-09-neo4j.png\'>'
    //     }
    // ],
    content: [
        {
            container: `aws-content`,
            content: `<div>Setup and managed business deployment on Amazon Web Services using AWS EC2, Route 53, S3, Cloudfront and ingested new customers via form to automatically provision tenant-separated resources (S3, Cloudfront distribution) to immediately onboard enterprise B2B customers. See example: www.fidio.ca. Leveraged rclone for continuous delivery of RTMP livestream chunks via HLS ABR playlist</div>`
        }
    ],
})

content.set('postgres', {
    h5: [
        {
            container: `postgres-h5`,
            content: 'Postgres',
        }
    ],
    link: [
        {
            container: `postgres-link`,
            href: 'https://www.tycoon.systems',
        }
    ],
    media: [
        {
            container: `postgres-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-10-04+142135.png\'>'
        }
    ],
    content: [
        {
            container: `postgres-content`,
            content: `<div>Built multi-tenant infrastructure using Postgres GraphQL foundation. Creating over 25 models to manage customers multi-faceted needs for serving communities, video on demand and live video, conversations via forums, products tracking type and stock. Additionally used to track customer automatic monthly invoices</div>`
        }
    ],
})

content.set('proxmox', {
    h5: [
        {
            container: `proxmox-h5`,
            content: 'Proxmox',
        }
    ],
    link: [
        {
            container: `proxmox-link`,
            href: 'https://www.tycoon.systems',
        }
    ],
    content: [
        {
            container: `proxmox-content`,
            content: `<div>Set up Proxmox on physical servers to support deployment of k8s on Ubuntu VM's</div>`
        }
    ],
})

content.set('ffmpeg', {
    h5: [
        {
            container: `ffmpeg-h5`,
            content: 'Ffmpeg',
        }
    ],
    link: [
        {
            container: `ffmpeg-link`,
            href: 'https://www.tycoon.systems/upload',
        }
    ],
    media: [
        {
            container: `ffmpeg-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/livestreampoc.png\'>'
        }
    ],
    content: [
        {
            container: `ffmpeg-content`,
            content: `<div>Built multiple pipelines to transcode video using Ffmpeg. Built commands to support video transcoding pipeline for static video on demand, livestreaming incoming RTMP publish streams and extracting thumbnails from ongoing livestreams</div>`
        }
    ],
})

content.set('node_js', {
    h5: [
        {
            container: `node_js-h5`,
            content: 'Node.js',
        }
    ],
    // link: [
    //     {
    //         container: `node_js-link`,
    //         href: 'https://www.tycoon.systems/upload',
    //     }
    // ],
    // media: [
    //     {
    //         container: `ffmpeg-media`,
    //         content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-10-04+142135.png\'>'
    //     }
    // ],
    content: [
        {
            container: `node_js-content`,
            content: `<div>Built Express.js based Node.js API's utilizing clusterization, job queues and asynchronous programming to support E-commerce transactions with Stripe, user onboarding, CRUD operations to Postgres, MongoDB and Neo4j, user cart management, image processing for products and user icons, live chat using socket.io and forums</div>`
        }
    ],
})

content.set('rtmp', {
    h5: [
        {
            container: `rtmp-h5`,
            content: 'RTMP',
        }
    ],
    link: [
        {
            container: `rtmp-link`,
            href: 'https://www.tycoon.systems/w?v=f3fc2ffe-389d-4dd7-81f0-54f644a78eb0',
        }
    ],
    media: [
        {
            container: `rtmp-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/tycoon-livestream-drifting.png\'>'
        }
    ],
    content: [
        {
            container: `rtmp-content`,
            content: `<div>Built proof of concept for RTMP livestreaming service in Go to serve Livestreams via CDN to the web. Creates individual channels for ingesting stream on unique port on request to create stream and then listens for publishing rtmp stream from RTMP client (like OBS). Encodes incoming bytes and transcodes to flv for organizing in ABR playlist and automatic rclone upload to S3 for immediate consumption of authorized web video player clients</div>`
        }
    ],
})

content.set('live_chat', {
    h5: [
        {
            container: `live_chat-h5`,
            content: 'Live Chat',
        }
    ],
    link: [
        {
            container: `live_chat-link`,
            href: 'https://www.tycoon.systems/embed',
        }
    ],
    media: [
        {
            container: `live_chat-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/livestream-w-chat.jpeg\'><img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/live-chat.png\'>'
        }
    ],
    content: [
        {
            container: `live_chat-content`,
            content: `<div>Built Live chat using Redis streams to process thousands of incoming messages to clusterized Node.js API for multi-tenant customers from different domains appending to unique livestream instances under their unique tenant id</div>`
        }
    ],
})

content.set('e-commerce', {
    h5: [
        {
            container: `e-commerce-h5`,
            content: 'E-commerce',
        }
    ],
    link: [
        {
            container: `e-commerce-link`,
            href: 'https://www.tycoon.systems/w?v=1a8e2387-9ca5-41d9-b61b-964c9461b302',
        }
    ],
    media: [
        {
            container: `e-commerce-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-09-24+230622.png\'><img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-12-09-ecommerce-minipost.png\'><img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/shippingclassview.png\'>'
        }
    ],
    content: [
        {
            container: `e-commerce-content`,
            content: `<div>Developed e-commerce framework for customers to leverage with "add_to_cart", "buy", "create_product" hooks to interface with internal API. Empowering their users to purchase tickets and virtual products using Stripe and Paystack depending on detected user geo-location on Node.js API with geoip. Additionally built "shipping classes" module to handle shipping classes from vendor to allow for them to dynamically set shipping costs on products they have published</div>`
        }
    ],
})

content.set('redux', {
    h5: [
        {
            container: `redux-h5`,
            content: 'Redux',
        }
    ],
    // link: [
    //     {
    //         container: `redux-link`,
    //         href: 'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/shippingclassview.png',
    //     }
    // ],
    // media: [
    //     {
    //         container: `redux-media`,
    //         content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/Screenshot+2024-09-24+230622.png\'>'
    //     }
    // ],
    content: [
        {
            container: `redux-content`,
            content: `<div>Architected and delivered Redux structure at RBC Capital Markets to cache user session data and data sets data on React client side runtime. Keep track of report references and corresponding report individual queries with timestamps, records, columns, size and more</div>`
        }
    ],
})

content.set('google_ads_ima_sdk', {
    h5: [
        {
            container: `google_ads_ima_sdk-h5`,
            content: 'Google Ads IMA SDK',
        }
    ],
    // link: [
    //     {
    //         container: `redux-link`,
    //         href: 'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/shippingclassview.png',
    //     }
    // ],
    media: [
        {
            container: `google_ads_ima_sdk-media`,
            content: '<img src=\'https://tycoon-public-share.s3.us-east-2.amazonaws.com/resume/google-ads-ima-sdk.png\'>'
        }
    ],
    content: [
        {
            container: `google_ads_ima_sdk-content`,
            content: `<div>Integrated Google Ads IMA SDK for multi-tenant repository to serve multiple customers for static and video based advertisements</div>`
        }
    ],
})

content.set('twilio', {
    h5: [
        {
            container: `twilio-h5`,
            content: 'Twilio',
        }
    ],
    // media: [
    //     {
    //         container: `twilio-media`,
    //         content: 'Twilio'
    //     }
    // ],
    content: [
        {
            container: `twilio-content`,
            content: `<div>Give me a call at +1-647-492-1410</div>`
        }
    ],
})

content.set('mongodb', {
    h5: [
        {
            container: `mongodb-h5`,
            content: 'MongoDB',
        }
    ],
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `mongodb-content`,
            content: `<div>Created models for MongDB database for YouTube clone to support user onboarding, articles, videos and products</div>`
        }
    ],
})


document.addEventListener('typed-initialized', e => {
    Object.entries(ALL_SECTIONS).map(async m => {
        const containerName = `${m[0].charAt(0)}${m[0]?.substring(1, m[0].length).toLowerCase()}-loadTo`
        if (m?.[1]?.[0]?.toLowerCase) {
            const topic = m[1][0].toLowerCase()?.replaceAll(' ', '_')
            const b = await fetch(`/module/stories/${topic}`)
            const btn = document.getElementById(`${topic}-button`)
            console.log(btn)
            if (btn) {
                btn.classList.add('selected-item')
            }
            let useMarkup = b?.ok ? await b.text() : await fetch(`/module/stories/default`).then(res => res.text())
            if (useMarkup) {
                const c = document.getElementById(containerName)
                useMarkup = useMarkup.replaceAll('%var%', topic)
                c.innerHTML = useMarkup
                const t = content.get(topic)
                if (t && Object.entries(t)?.length > 0) {
                    Object.entries(t).map(m => {
                        window.runTypedJob(m[1], 0, m[0])
                    })
                }
            }
        }
    })
})

window.addNewTopic = async (e, t, container) => {
    if (e?.currentTarget && !e.currentTarget.classList.contains('selected-item')) {
        e.currentTarget.classList.add('selected-item')
    }
    if (t) {
        const containerName = `${container.charAt(0)}${container?.substring(1, container.length).toLowerCase()}-loadTo`
        const topic = t.toLowerCase()?.replaceAll(' ', '_')
        let topicExisting = document.getElementById(`${topic}-container`)
        if (!topicExisting) {
            const b = await fetch(`/module/stories/${topic}`)
            let useMarkup = b?.ok ? await b.text() : await fetch(`/module/stories/default`).then(res => res.text())
            if (useMarkup) {
                const t = content.get(topic)
                if (t) {
                    const c = document.getElementById(containerName)
                    useMarkup = useMarkup.replaceAll('%var%', topic)
                    const el = document.createElement('div')
                    el.innerHTML = useMarkup
                    c.insertBefore(el, c.firstChild)
                    Object.entries(t).map(m => {
                        window.runTypedJob(m[1], 0, m[0])
                    })
                }
            }
        } else {
            window.scrollTo({
                top: topicExisting.offsetTop,
                behavior: 'smooth'
            })
        }
    }
}

buildContainer('skills-container', 'Skills', SKILLS)
buildContainer('languages-container', 'Languages', LANGUAGES, null, {
    hProps: 'h5.mt-4'
})
buildContainer('topics-container', 'Topics', TOPICS)

setTimeout(() => {
    LANGUAGES.map((m, i)=> {
        setTimeout(() => {
            var c = document.getElementById(`${m?.toLowerCase()}-button`)
            console.log(c)
            if (c) {
                c.classList.add('gentle-shake-active')
                setTimeout(() => {
                    c.classList.remove('gentle-shake-active')
                }, 500)
            }
        }, i * 100)
    })
}, 1500)