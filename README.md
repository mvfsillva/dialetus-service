<p align="center">
  <img width="400" height="auto" src="logo.svg"/>
</p>

[![CircleCI](https://circleci.com/gh/mvfsillva/dialetus-service.svg?style=svg&circle-token=1e9adb58a5664ddd2c80e17f641775e2cbb6346f)](https://circleci.com/gh/mvfsillva/dialetus-service)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-28-orange.svg?style=flat-square)](#contributors)

# How did the idea come about?

 The idea came about through the meeting of friends who only knew each other through the internet, each one with its linguistic-cultural traits, we thought of creating an informal dictionary for the idiomatic expressions that each Brazilian region possessed, so the project was totally collaborative, bringing cultural diversity from each one of us, being able, to deepen in the our Brazilian's daily culture.

## Projects using the dialects-service

 - [dialetus web](https://github.com/mvfsillva/dialetus)
 - [dialetus-cli](https://github.com/bukinoshita/dialetus-cli) by [Bu Kinoshita](https://github.com/bukinoshita)

## 📃 API

All endpoints live under the URL https://dialetus-service.now.sh and then generally follow the REST architecture.

All requests must be encoded as JSON with the Content-Type: application/json header. Most responses, including errors, are encoded exclusively as JSON as well.

### GET /regions

List all regions available with the total mapped dialects.

#### Request

```bash
$ curl https://dialetus-service.now.sh/regions
```

#### Response

```json
[{
  "name": "alagoanes",
  "total": 64
}, {
  "name": "amazones",
  "total": 9
}, {
  "name": "baianes",
  "total": 42
}, {
  "name": "carioques",
  "total": 14
}, {
  "name": "catarines",
  "total": 22
}, {
  "name": "cearences",
  "total": 10
}, {
  "name": "gauches",
  "total": 25
}, {
  "name": "lageanes",
  "total": 28
}, {
  "name": "maranhes",
  "total": 15
}, {
  "name": "mineires",
  "total": 26
}, {
  "name": "paraense",
  "total": 30
}, {
  "name": "paranes",
  "total": 53
}, {
  "name": "paulistes",
  "total": 16
}, {
  "name": "pernambuques",
  "total": 17
}, {
  "name": "piauies",
  "total": 30
}, {
  "name": "potiguares",
  "total": 35
}, {
  "name": "rondones",
  "total": 9
}, {
  "name": "sergipanes",
  "total": 11
}]
```

### GET /regions/:region/dialects

List all dialects mapped.

#### Request

```bash
$ curl https://dialetus-service.now.sh/regions/baianes/dialects
```

#### Response

```json
[
  {
    "slug": "relaxe-mo-fiu",
    "dialect": "Relaxe mô fiu.",
    "meanings": [
      "Sem problemas",
      "Fique tranquilo"
    ],
    "examples": [
      "Ô vei, relaxe mô fiu todo nervoso ele."
    ]
  },
  {
    "slug": "e-bala",
    "dialect": "É bala!",
    "meanings": [
      "algo interessante",
      "massa"
    ],
    "examples": [
      "Que computador bala!"
    ]
  },
  {
    "slug": "comer-agua",
    "dialect": "Comer água!",
    "meanings": [
      "Vodka",
      "Cerveja",
      "Qualquer bebida que contenha álcool"
    ],
    "examples": [
      "Vamo pro reg comer água galera!"
    ]
  },
]
```

### GET /regions/:region/dialects/:slug

Get a dialect by slug.

#### Request

```bash
$ curl https://dialetus-service.now.sh/regions/baianes/dialects/relaxe-mo-fiu
```

#### Response

```json
{
  "slug": "relaxe-mo-fiu",
  "dialect": "Relaxe mô fiu.",
  "meanings": [
    "Sem problemas",
    "Fique tranquilo"
  ],
  "examples": [
    "Ô vei, relaxe mô fiu todo nervoso ele."
  ]
}
```

#### List of dialects

### GET /dialect

```bash
GET /dialect

# /dialect/:region
GET /dialect/baianes
GET /dialect/mineires
GET /dialect/paranes
GET /dialect/carioques
GET /dialect/potiguares
GET /dialect/rondones
GET /dialect/cearences
GET /dialect/pernambuques
GET /dialect/piauies
GET /dialect/catarines
GET /dialect/paraense
GET /dialect/gauches
```

### GET /search?q={words}

Search the words in all dialects mapped.

#### Request

```bash
$ curl https://dialetus-service.now.sh/search?q=regui
```

#### Response

```json
{
    "baianes": [
        {
            "slug": "regui",
            "dialect": "Regui",
            "meanings": [
                "Reunião com os amigos",
                "Balada",
                "Festa"
            ],
            "examples": [
                "Ô mizera, bora pro regui logo vá!"
            ]
        },
        {
            "slug": "num-to-comeno-regui",
            "dialect": "Num tô comeno regui",
            "meanings": [
                "Não acreditar em algo",
                "Não se importar"
            ],
            "examples": [
                "Num tô comeno regui não viu pae."
            ]
        }
    ]
}
```

#### Request

```bash
$ curl https://dialetus-service.now.sh/search?q=Virado no cão
```

#### Response

```json
{
    "baianes": [
        {
            "slug": "virado-no-cao",
            "dialect": "Virado no cão",
            "meanings": [
                "Mal humorado",
                "Aborrecido"
            ],
            "examples": [
                "Eu to virado no cão, o primeiro que passar na minha frente vou rumaláporra!"
            ]
        }
    ]
}
```

#### Request

```bash
$ curl https://dialetus-service.now.sh/search?q=baita
```

#### Response

```json
{
    "gauches": [
        {
            "slug": "baita",
            "dialect": "Baita",
            "meanings": [
                "Grande",
                "Imenso"
            ],
            "examples": [
                "Bah tchê, que baita de um problema tu arranjaste?!"
            ]
        }
    ],
    "paranes": [
        {
            "slug": "baita",
            "dialect": "Baita",
            "meanings": [
                "grande",
                "enorme",
                "de grandes proporções"
            ],
            "examples": [
                "Mas que baita susto tu me deu"
            ]
        }
    ]
}
```

## Respect earns Respect 👏

Please respect our [Code of Conduct](.github/code-of-conduct.md), in short:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## Contribute 🍕
Please take a look at the [contributing guide](.github/contributing.md).

## Authors 😎

- Marcus Silva ([@mvfsillva](https://github.com/mvfsillva))
- Angelmario Santana ([@anfsantana](https://github.com/anfsantana))
- Jader Gomes ([@jdrgomes](https://github.com/jdrgomes))
- Rodolfo Silva ([@RodolfoSilva](https://github.com/RodolfoSilva))

## Contributors 🎉
Thanks goes out to all these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/4579340?v=4" width="100px;"/><br /><sub><b>Marcus Silva</b></sub>](https://github.com/mvfsillva)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=mvfsillva "Code") [📖](https://github.com/mvfsillva/dialetus-service/commits?author=mvfsillva "Documentation") [👀](#review-mvfsillva "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/7683909?v=4" width="100px;"/><br /><sub><b>Angelmário Santana</b></sub>](https://github.com/anfsantana)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=anfsantana "Code") [📖](https://github.com/mvfsillva/dialetus-service/commits?author=anfsantana "Documentation") [👀](#review-anfsantana "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/1703020?v=4" width="100px;"/><br /><sub><b>Rodolfo Silva</b></sub>](http://www.rodolfosilva.com)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=RodolfoSilva "Code") [📖](https://github.com/mvfsillva/dialetus-service/commits?author=RodolfoSilva "Documentation") [👀](#review-RodolfoSilva "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/1204692?v=4" width="100px;"/><br /><sub><b>Bruno Pulis</b></sub>](http://www.brunopulis.com)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=brunopulis "Code") | [<img src="https://avatars1.githubusercontent.com/u/5539257?v=4" width="100px;"/><br /><sub><b>Wellington Mitrut</b></sub>](https://medium.com/blog-do-mitrut/)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=Wmitrut "Code") | [<img src="https://avatars2.githubusercontent.com/u/1463578?v=4" width="100px;"/><br /><sub><b>Diego Ramos</b></sub>](https://www.linkedin.com/in/rdiego26/)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=rdiego26 "Code") | [<img src="https://avatars1.githubusercontent.com/u/6919712?v=4" width="100px;"/><br /><sub><b>Caio Alcântara</b></sub>](http://sourcerer.io/clucasalcantara)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=clucasalcantara "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/698313?v=4" width="100px;"/><br /><sub><b>Lucas Farias</b></sub>](https://medium.com/@luksrn)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=luksrn "Code") | [<img src="https://avatars1.githubusercontent.com/u/808785?v=4" width="100px;"/><br /><sub><b>Higor Morais</b></sub>](https://github.com/higorae)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=higorae "Code") | [<img src="https://avatars3.githubusercontent.com/u/19912294?v=4" width="100px;"/><br /><sub><b>Medson Mendes</b></sub>](https://github.com/lmedson)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=lmedson "Code") | [<img src="https://avatars2.githubusercontent.com/u/4191734?v=4" width="100px;"/><br /><sub><b>Randѕon Oliveira</b></sub>](https://rands0n.com)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=rands0n "Code") | [<img src="https://avatars1.githubusercontent.com/u/9031279?v=4" width="100px;"/><br /><sub><b>Murillo de Miranda Pereira</b></sub>](https://twitter.com/murillomirandaa)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=murillo94 "Code") | [<img src="https://avatars0.githubusercontent.com/u/3356720?v=4" width="100px;"/><br /><sub><b>Rafael Nunes</b></sub>](http://peaonunes.github.io/)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=peaonunes "Code") | [<img src="https://avatars3.githubusercontent.com/u/1252570?v=4" width="100px;"/><br /><sub><b>Will Mendes</b></sub>](https://medium.com/@willmendesneto)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=willmendesneto "Code") |
| [<img src="https://avatars2.githubusercontent.com/u/26495329?v=4" width="100px;"/><br /><sub><b>kathleenrego</b></sub>](https://github.com/kathleenrego)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=kathleenrego "Code") | [<img src="https://avatars0.githubusercontent.com/u/15023006?v=4" width="100px;"/><br /><sub><b>Jader</b></sub>](https://github.com/jdrgomes)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=jdrgomes "Code") | [<img src="https://avatars3.githubusercontent.com/u/8007426?v=4" width="100px;"/><br /><sub><b>Rodolfo Candido</b></sub>](https://github.com/rdl-candido)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=rdl-candido "Code") | [<img src="https://avatars2.githubusercontent.com/u/5585596?v=4" width="100px;"/><br /><sub><b>Jefferson Moura</b></sub>](http://jeffersonmourak.me)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=jeffersonmourak "Code") | [<img src="https://avatars3.githubusercontent.com/u/3630346?v=4" width="100px;"/><br /><sub><b>Raphael Amorim</b></sub>](http://raphamorim.io)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=raphamorim "Code") | [<img src="https://avatars3.githubusercontent.com/u/1644099?v=4" width="100px;"/><br /><sub><b>Adriano Canofre</b></sub>](https://adrianocanofre.github.io/)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=adrianocanofre "Code") | [<img src="https://avatars3.githubusercontent.com/u/5712300?v=4" width="100px;"/><br /><sub><b>Maurício Coelho</b></sub>](https://github.com/mauscoelho)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=mauscoelho "Code") |
| [<img src="https://avatars0.githubusercontent.com/u/13842868?v=4" width="100px;"/><br /><sub><b>Marcela Barella</b></sub>](https://twitter.com/MarcelaBarella)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=MarcelaBarella "Code") | [<img src="https://avatars1.githubusercontent.com/u/5808206?v=4" width="100px;"/><br /><sub><b>Matheus Monte</b></sub>](https://matheusmonte.github.io/)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=matheusmonte "Code") | [<img src="https://avatars2.githubusercontent.com/u/11067705?v=4" width="100px;"/><br /><sub><b>Gabriel Kalani</b></sub>](https://gkal19.github.io)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=gkal19 "Code") | [<img src="https://avatars2.githubusercontent.com/u/16547662?v=4" width="100px;"/><br /><sub><b>Ruan Kaylo</b></sub>](https://ruankaylo.netlify.com)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=RuanAyram "Code") | [<img src="https://avatars1.githubusercontent.com/u/1802025?v=4" width="100px;"/><br /><sub><b>Thiago Guimarães</b></sub>](https://github.com/thiagogsr)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=thiagogsr "Code") | [<img src="https://avatars3.githubusercontent.com/u/5823027?v=4" width="100px;"/><br /><sub><b>Welkson Ramos</b></sub>](https://twitter.com/welksonramos)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=welksonramos "Code") | [<img src="https://avatars1.githubusercontent.com/u/19865835?v=4" width="100px;"/><br /><sub><b>Mateus Malaquias</b></sub>](http://malaquias.dev)<br />[💻](https://github.com/mvfsillva/dialetus-service/commits?author=malaquiasdev "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Dialetus is released under the [MIT license](license).

Copyright © 2019.