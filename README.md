<div id="top"></div>
<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/Dhanush2468/Sanity-Portfolio">
    
    
  ![logo](https://github.com/Dhanush2468/Sanity-Portfolio/assets/112778628/100330ed-b38a-450b-921b-18e0b80d82db)

    
  </a>

<h3 align="center">Portfolio Website</h3>

  <p align="center">
    A well designed portfolio to showcase your skills and achievements. A beautiful and functional portfolio with smooth animations. Built using React JS, Sanity, Framer-motion.
    <br />
    <a href="https://gdkdev.vercel.app/" target="_blank" rel="noreferrer"><strong>Portfolio Website</strong></a>
    <br />
    <a href="https://github.com/Dhanush2468/Sanity-Portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://gdkdev.vercel.app/" target="_blank" rel="noreferrer">View Demo</a>
    ·
    <a href="https://github.com/Dhanush2468/Sanity-Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/Dhanush2468/Sanity-Portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
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
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Home Page](https://github.com/Dhanush2468/Sanity-Portfolio/assets/112778628/722d4453-ea1a-4e65-8c14-a059b48343ea)](https://gdkdev.vercel.app)
[![Skills Page](https://github.com/Dhanush2468/Sanity-Portfolio/assets/112778628/67566719-10b8-4236-812c-ac4c834b38b4)](https://gdkdev.vercel.app/#skills)
[![Contact Page](https://github.com/Dhanush2468/Sanity-Portfolio/assets/112778628/abdb1277-c6e9-448d-8fc7-0ab2b48a1788)](https://gdkdev.vercel.app/#contact)


Website is completely built using the React JS and Sanity knowledge. No need to be proficient to understand or change the content, basic understanding is enough fill the gaps.

It is completely responsive works fine on most of the devices and highly interactive. Data can be changed using a Content Management Service(CMS), [Sanity](https://www.sanity.io/). Because of this data can be changed anytime even after deployment.


### Built With

- [React.js](https://reactjs.org/)
- [Sanity](https://www.sanity.io/)
- [SCSS](https://sass-lang.com/)
- [Netlify](https://www.netlify.com/)


<!-- GETTING STARTED -->

## Getting Started

Getting started, to avoid hassle at a later part, go ahead and create an account in Sanity and follow the displayed commands!

### Prerequisites

- Create a folder named \*\*backend_sanity" and navigate the terminal to it.
  ```
  cd backend_sanity
  ```
- Create the sanity client
  ```sh
  npx create-sanity@latest
  ```
- Note:
  ```sh
  - Login using your preferred way!
  - Enter the project name, press Y and use the default settings.
  - AFTER CRAETING COPY THE SANITY ID FROM CONFIG FILE AND RLPLACE WITH CLONED ONE NOW DELETE THE CRAETED FILE
  ```  

- Install the sanity client on clone
  ```sh
  npm install -g @sanity/cli
  ```

- Now use the command
  ```sh
  sanity start
  ```
- Now run the following in the terminal
  ```
  sanity manage
  ```
- Your project dashboard page pops up in your browser
  > These are the most important steps
- Note your project ID for future reference
- Click on **Token** -> **Add new Token**
- Give it a name and copy the token as it can be viewed only once.
- Now add your react browser address i.e. your localhost in **CORS ORIGIN**
- You are mostly done with setting up the backend.

### Installation

1. After completing the prerequistes, go ahead with the following steps.
2. Clone the repo
   ```sh
   git clone https://github.com/Dhanush2468/Sanity-Portfolio/tree/main
   ```
3. Install NPM packages in the folders [Frontend React](/frontend_react).
   > Make sure you are in the right folder path in the terminal.
   ```sh
   npm install
   ```
4. Replace the [Backend Sanity](/backend_sanity) file contents with your sanity file contents (entire folder).
5. Run the command and a page with your sanity documents appears.
   > Make sure you are in the right folder path in the terminal.
   ```
   sanity start
   ```
6. Add your details to the necessary documents, refer [Sanity](https://www.sanity.io/docs) for better understanding.
7. Create a .env file in the [Frontend React](/frontend_react) directory with the following
   ```
   REACT_APP_SANITY_PROJECT_ID= "your project id"
   REACT_APP_SANITY_TOKEN= "your api token"
   ```
8. Run the final command in the [Frontend React](/frontend_react).
   > Make sure you are in the right folder path in the terminal.
   ```
   npm start
   ```
9. Your website is up and running. Make the necessary changes and deploy it.
10. To add or change necessary documents in **Sanity Studio** refer the [Sanity Docs](https://sanity.io/docs), it is very intuitive and easy.


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


<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->

## Contact

Praveen Dunga - [@Praveenterax](https://www.instagram.com/white__devil2468/) - dhanushgollavilli02@gmail.com
Project Link: [https://praveenterax-portfolio.netlify.app](https://gdkdev.vercel.app/)

