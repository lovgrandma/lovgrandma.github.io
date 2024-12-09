import { init, h, classModule, propsModule, styleModule, eventListenersModule } from 'https://cdn.jsdelivr.net/npm/snabbdom@3.6.2/+esm'

const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule
])

const SKILLS = [ 'System Architecture', 'Web UI UX', 'Multi-tenant Infrastructure', 'Concurrency', 'Distributed Systems', 'Real Time Data Transfer', 'Data Modelling' ]
const LANGUAGES = [ 'Javascript', 'Go', 'Python', 'Java', 'C Sharp', 'Php' ]
const TOOLS = [ 'PL SQL', 'Redis', 'Next_js React', 'gRPC', 'Websockets', 'Playwright', 'Neo4j', 'NGINX', 'Kubernetes', 'AWS', 'Postgres', 'Proxmox', 'FFmpeg', 'Node.js', 'RTMP', 'Live Chat', 'E-commerce', 'Redux', 'Google Ads IMA SDK', 'Twilio', 'MongoDB' ]

const ALL_SECTIONS = Object.freeze({
    SKILLS: SKILLS,
    LANGUAGES: LANGUAGES,
    TOOLS: TOOLS
})

const handleSpecialChar = c => {
    if (c === 'C Sharp') {
        return 'C#'
    } else if (c === 'Next_js React') {
        return 'Next.js/React'
    }
    return c
}

function buildContainer(container, header, items, f, options) {
    const c = document?.getElementById(container)
    if (c) {
        const vLan = items.map((m, i) => h(options?.itemProps ?? 'a.font-bold.text-sm.rounded-2xl.px-2.py-1.interact-button', { props: { href: `#${m}`, i: i }, style: { border: '1px solid grey' }, on: { click: () => window.addNewTopic(m, header) }}, `${handleSpecialChar(m)}`))
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

window.runTypedJob = (data, i) => {
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
                            window.runTypedJob(data, i + 1)
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `system_architecture-content`,
            content: `<div>Architected and developed multi-tenant multimedia architecture to support complete requirement for hosting live TV streaming platforms with community features.</div>`
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `distributed_systems-content`,
            content: `<div>Built Go RTMP livestreaming service, containerized via Docker and I am currently testing running k8s cluster to serve distributed HD livestreaming service from my personal Hp dl 380 g9's on proxmox Ubuntu VM</div>`
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
    link: [
        {
            container: `redis-link`,
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
    // media: [
    //     {
    //         container: `javascript-media`,
    //         content: 'Javascript'
    //     }
    // ],
    content: [
        {
            container: `next_js_react-content`,
            content: `<div>Built framework for Next.js TV application handling automatic user location and IP tracking, onboarding via OAuth, modular controllers for delivery to users, live chat, automatic seo wrangling based on page type and record fetched, collections for videos, video player for handling VOD or livestreams conditionally, SEO optimized chapters, e-commerce cart handling multiple currencies, options, quantities and much more. Collaborated and owned Global TV app for delivery on LG TV to serve millions of Canadians across the country. Built multi-pane trading app at RBC Capital Markets to integrate with Observable HQ, internal RBC trading data, real time updates via socket.io and multi-step requests to run complex joins to get parameters of multiple types (date, lists of counterparties, metals, indices, etc) for users to select parameters for report query. It would be better to get on call for me to explain my depth of understanding of React and Next.js +1-647-492-1410.</div>`
        }
    ],
})

document.addEventListener('typed-initialized', e => {
    Object.entries(ALL_SECTIONS).map(async m => {
        const containerName = `${m[0].charAt(0)}${m[0]?.substring(1, m[0].length).toLowerCase()}-loadTo`
        if (m?.[1]?.[0]?.toLowerCase) {
            const topic = m[1][0].toLowerCase()?.replaceAll(' ', '_')
            const b = await fetch(`/module/stories/${topic}`)
            let useMarkup = b?.ok ? await b.text() : await fetch(`/module/stories/default`).then(res => res.text())
            if (useMarkup) {
                const c = document.getElementById(containerName)
                useMarkup = useMarkup.replaceAll('%var%', topic)
                c.innerHTML = useMarkup
                const t = content.get(topic)
                if (t && Object.entries(t)?.length > 0) {
                    Object.entries(t).map(m => {
                        window.runTypedJob(m[1], 0)
                    })
                }
            }
        }
    })
})

window.addNewTopic = async (t, container) => {
    if (t) {
        const containerName = `${container.charAt(0)}${container?.substring(1, container.length).toLowerCase()}-loadTo`
        const topic = t.toLowerCase()?.replaceAll(' ', '_')
        const topicExisting = document.getElementById(`${topic}-container`)
        if (!topicExisting) {
            const b = await fetch(`/module/stories/${topic}`)
            let useMarkup = b?.ok ? await b.text() : await fetch(`/module/stories/default`).then(res => res.text())
            if (useMarkup) {
                const c = document.getElementById(containerName)
                useMarkup = useMarkup.replaceAll('%var%', topic)
                const el = document.createElement('div')
                el.innerHTML = useMarkup
                c.insertBefore(el, c.firstChild)
                const t = content.get(topic)
                Object.entries(t).map(m => {
                    window.runTypedJob(m[1], 0)
                })
            }
        }
    }
}

buildContainer('skills-container', 'Skills', SKILLS)
buildContainer('languages-container', 'Languages', LANGUAGES, null, {
    hProps: 'h5.mt-4'
})
buildContainer('tools-container', 'Tools', TOOLS)