<a name="top"></a>

<h1 align="center">Deviant Art API Scraper</h1>

![Frieren](https://static.zerochan.net/Sousou.no.Frieren.full.3233123.jpg)

## How to use

Install packages.

```sh
npm install
```

or `yarn`

```sh
yarn add
```

### Basic

Import packages.

- `CommonJS`

```js
const {
  topTopics,
  dailyDeviations,
  deviationId,
  searchUsers,
  userGallery,
} = require("deviantart-api-scraper");
```

- `ESM`

```js
import {
  topTopics,
  dailyDeviations,
  deviationId,
  searchUsers,
  userGallery,
} from "deviantart-api-scraper";
```

### Example

<details><summary>Get latest deviation top topics.</summary>

```js
import { topTopics } from "deviantart-api-scraper";
topTopics().then((json) => {
  console.log(json);
});
```

`Output`

```js
{
    status: Boolean,
    results: [
        {
            name: String,
            canonical_name: String,
            example_deviations: [
                {
                    deviationid: 'XXXXXXXX-XXXX-XXXX-XXXX-14098127CA22', // UUID
                    printid: null,
                    url: String,
                    title: String,
                    category: String,
                    category_path: String,
                    is_favourited: Boolean,
                    is_deleted: Boolean,
                    is_published: Boolean,
                    is_blocked: Boolean,
                    author: {
                        userid: String,
                        username: String,
                        usericon: String,
                        type: String,
                    },
                    stats: {
                        comments: Number,
                        favourites: Number,
                    },
                    published_time: String,
                    allows_comments: Boolean,
                    preview: {
                        src: String,
                        height: Number,
                        width: Number,
                        transparency: Boolean,
                    },
                    content: {
                        src: String,
                        height: Number,
                        width: Number,
                        transparency: Boolean,
                        filesize: Number,
                    },
                    thumbs: [
                        {
                            src: String,
                            height: Number,
                            width: Number,
                            transparency: Boolean,
                        },
                        ...
                    ],
                    is_mature: Boolean,
                    is_downloadable: Boolean,
                    download_filesize: Number
                }
            ]
        }
        ...
    ]
}
```

</details>

<details><summary>Get daily deviations.</summary>

```js
import { dailyDeviations } from "deviantart-api-scraper";
dailyDeviations().then((json) => {
  console.log(json);
});
```

`Output`

```js
{
    status: Boolean,
    results: [
        {
            deviationid: 'XXXXXXXX-XXXX-XXXX-XXXX-14098127CA22', // UUID
            printid: null,
            url: String,
            title: String,
            category: String,
            category_path: String,
            is_favourited: Boolean,
            is_deleted: Boolean,
            is_published: Boolean,
            is_blocked: Boolean,
            author: {
                userid: String;
                username: String;
                usericon: String;
                type: String;
            },
            stats: {
                comments: Number;
                favourites: Number;
            },
            published_time: String,
            allows_comments: Boolean,
            /** Some user may didn't have content, thumbs. but have bellow */
            formatted_exerpt: String
            text_content: {
                excerpt: String,
                body: {
                    type: String,
                    features: String // Array Object String formatted
                }
            },
            excerpt: String,
            /** */
            daily_deviation: {
                body: String,
                time: String,
                giver: {
                    userid: String,
                    username: String,
                    usericon: String,
                    type: String,
                }
            },
            content: {
                src: String,
                height: Number,
                width: Number,
                transparency: Boolean,
                filesize: Number,
            },
            thumbs: [
                {
                    src: String,
                    height: Number,
                    width: Number,
                    transparency: Boolean,
                },
                ...
            ],
            is_mature: Boolean,
            is_downloadable: Boolean,
            download_filesize: Number
        }
        ...
    ]
}
```

</details>

<details><summary>Get deviation by UUID</summary>

```js
import { deviationId } from "deviantart-api-scraper";

const UUID = "XXXXXXXX-XXXX-XXXX-XXXX-14098127CA22"; // make sure this real UUID/deviationid
deviationId(UUID).then((json) => {
  console.log(json);
});
```

`Output`

```js
{
    status: Boolean,
    deviationid: 'XXXXXXXX-XXXX-XXXX-XXXX-14098127CA22', // UUID
    printid: null,
    url: String,
    title: String,
    category: String,
    category_path: String,
    is_favourited: Boolean,
    is_deleted: Boolean,
    is_published: Boolean,
    is_blocked: Boolean,
    author: {
        userid: String,
        username: String,
        usericon: String,
        type: String,
        is_watching: Boolean
    },
    stats: {
        comments: Number,
        favourites: Number
    },
    published_time: String,
    allows_comments: Boolean,
    preview: {
        src: String,
        height: Number,
        width: Number,
        transparency: Boolean
    },
    content: {
        src: String,
        height: Number,
        width: Number,
        transparency: Boolean,
        filesize: Number
    },
    thumbs: [
        {
        src: String,
        height: Number,
        width: Number,
        transparency: Boolean
        },
        ...
    ],
    daily_deviation: {
        body: String,
        time: String,
        giver: {
        userid: String,
        username: String,
        usericon: String,
        type: String,
        is_watching: Boolean
        }
    },
    is_mature: Boolean,
    is_downloadable: Boolean,
    download_filesize: Number
}
```

</details>

<details><summary>Search Deviant Art Users.</summary>

```js
import { searchUsers } from "deviantart-api-scraper";

const query = "Makima";
searchUsers(query).then((json) => {
  console.log(json);
});
```

`Output`

```js
{
    status: Boolean,
    estimated_total: Number,
    has_more: Boolean,
    users: [
    {
        userid: String,
        username: String,
        usericon: String,
        type: String,
        details: {
            sex: String,
            age: null,
            joindate: String
        },
        profile: {
            user_is_artist: Boolean,
            artist_level: null|"Unkown",
            artist_speciality: null|"Unkown",
            real_name: String,
            tagline: String,
            website: String,
            cover_photo: String
        },
        stats: {
            watchers: Number,
            friends: Number
        }
    },
    ...
]
```

</details>

<details><summary>Get Deviant Art Users Gallery.</summary>

```js
import { userGallery } from "deviantart-api-scraper";

const username = "Makima"; // Make sure this is real username
userGallery(username).then((json) => {
  console.log(json);
});
```

`Output`

```js
{
  status: Boolean,
  results: [
    {
        deviationid: 'XXXXXXXX-XXXX-XXXX-XXXX-14098127CA22', // UUID
        printid: null,
        url: String,
        title: String,
        category: String,
        category_path: String,
        is_favourited: Boolean,
        is_deleted: Boolean,
        is_published: Boolean,
        is_blocked: Boolean,
        author: {
            userid: String,
            username: String,
            usericon: String,
            type: String,
        },
        stats: {
            comments: Number,
            favourites: Number,
        },
        published_time: String,
        allows_comments: Boolean,
        preview: {
            src: String,
            height: Number,
            width: Number,
            transparency: Boolean,
        },
        content: {
            src: String,
            height: Number,
            width: Number,
            transparency: Boolean,
            filesize: Number,
        },
        thumbs: [
            {
                src: String,,
                height: Number,
                width: Number,
                transparency: Boolean,
            },
            ...
        ],
        is_mature: Boolean,
        is_downloadable: Boolean,
        download_filesize: Number
    },
    ...
],
```

</details>
<p align="right">(<a href="#top">Back to top</a>)</p>
