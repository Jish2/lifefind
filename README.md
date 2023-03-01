<!-- Improved compatibility of back to top link: See: https://github.com/Jish2/lifefind/pull/73 -->

<a name="readme-top"></a>

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Jish2/lifefind">
    <img src="client/public/favicons/lifefind.svg" alt="Logo" width="150">
  </a>

  <h3 align="center">Lifefind Opensource!</h3>

  <p align="center">
Opensource repo for Lifefind, the first app that helps college students find lost items.
    <br />
    <a href="https://lifefind.co/"><strong>lifefind.co</strong></a>
    <br />
    <br />
    <!-- WEBSITE IS NOT DEPLOYED -->
    <a href="https://lifefind.co/">View Demo</a>
    ·
    <a href="https://github.com/Jish2/lifefind/issues">Report Bug</a>
    ·
    <!-- THIS WILL EVENTUALLY BE https://lifefind.co/feature -->
    <a href="https://github.com/Jish2/lifefind/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<div align="center">
    <details>
    <summary>Table of Contents</summary>
    <ul>
        <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
            <li><a href="#built-with">Built With</a></li>
        </ul>
        </li>
        <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
        </ul>
        </li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ul>
    </details>
</div>

<br>

<!-- ABOUT THE PROJECT -->

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
<div align="center">
    <img src="client/public/favicons/thumbnail.png" alt="Logo" width="300" height="225">
</div>

## About The Project

### Context

Lifefind was built as a hackathon project in 36-hours for HackIllinois 2023 ([Devpost](https://devpost.com/software/lifefind)). Although not a winning project, I felt like the idea had potential and decided to pursue it as an open source project.

### What is Lifefind?

Lifefind is an app & website that helps college students find lost items. Everyday, many students lose and find items, but there is no centralized platform to organize item recovery. If you lost an item, make a post about what you lost along with descriptors (such as color etc) and any potential locations. Now, when someone finds the item, they can easily locate the owner of the item. Results are refined by category, and geolocation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [x] Map fully integrated
-   [x] UI Designs complete
-   [] Sorting Feature
-   [] No route validation
-   [] Feature Request lifefind.co/feature

See the [open issues](https://github.com/Jish2/lifefind/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

### Frontend

<!-- -   [![Next][next.js]][next-url] -->

-   Next.js
-   Chakra-UI
-   react-icons

### Backend

-   ExpressJS
-   MongoDB

### API Services

-   Cloudinary
-   SendGrid
-   Twilio

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run this locally, follow these simple steps.

### Prerequisites

-   [NPM](https://www.npmjs.com/) 9.5+
-   [Google Cloud](https://console.cloud.google.com/welcome) API Key (with Places and Maps Javascript API enabled)
-   Empty [MongoDB](https://www.mongodb.com/atlas) Atlas Project
-   [Cloudinary](https://cloudinary.com/) API Key
-   [SendGrid](https://sendgrid.com/) API Key

### Installation

Once you have acquired API keys for all of the services above, clone the project.

```bash
git clone https://github.com/Jish2/lifefind.git
```

After cloning, install npm into the client and server directory.

Run this command after you cd into the cloned repo.

```bash
cd client; npm install; cd ../server; npm install; cd ..
```

Next, configure the environment variables for the client and server.

For the client, create a `.env.local` file. Add the following variable, replacing the key with your Google Cloud API key.

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="<GOOGLE CLOUD API KEY>"
```

For the server, create a `.env` file.

```env
PORT=3001
MONGO_URI="<MONGODB URI>"
SECRET="<ENTER ANYTHING HERE. FOR JWT TOKEN.>"

GOOGLE_MAPS_API_KEY=<GOOGLE CLOUD API KEY>

CLOUDINARY_API_KEY=<CLOUDINARY API KEY>
CLOUDINARY_API_SECRET=<CLOUDINARY API SECRET>
```

Also, create a `.sendgrid.env` file.

```
export SENDGRID_API_KEY='SG.<SENDGRID API KEY>'
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Please do not hesistate to reach out! If you don't get a response quickly, try me on another platform. I normally respond within 48 hours, your message may have gone to spam!.

**Joshua Goon**

-   Email: [jgoon@indut.net](mailto:jgoon@indut.net)
-   LinkedIn: [Joshua Goon](https://linkedin.com/in/jgoon)
-   Instagram: [@jgoon3](https://instagram.com/jgoon3)
-   Discord: [jgoon#9043](https://discord.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Jish2/lifefind.svg?style=for-the-badge
[contributors-url]: https://github.com/Jish2/lifefind/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Jish2/lifefind.svg?style=for-the-badge
[forks-url]: https://github.com/Jish2/lifefind/network/members
[stars-shield]: https://img.shields.io/github/stars/Jish2/lifefind.svg?style=for-the-badge
[stars-url]: https://github.com/Jish2/lifefind/stargazers
[issues-shield]: https://img.shields.io/github/issues/Jish2/lifefind.svg?style=for-the-badge
[issues-url]: https://github.com/Jish2/lifefind/issues
[license-shield]: https://img.shields.io/github/license/Jish2/lifefind.svg?style=for-the-badge
[license-url]: https://github.com/Jish2/lifefind/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jgoon
[product-screenshot]: client/public/favicons/thumbnail.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
