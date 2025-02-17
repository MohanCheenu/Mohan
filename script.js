        /* style.css */
        :root {
            --bgColor: #fcf2ee;
            --fColor: #5B2333;
            --skillItemBg: #fcf2ee;
            --progressBarColor: #5B2333;
        }
        
        body {
            margin: 0;
            padding: 0;
            background-color: var(--bgColor);
            color: var(--fColor);
            font-family: "Poppins", serif;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        section { /* Added this for consistent section styling */
            width: 100vw;
            max-width: 1880px;
            margin: 0 auto;
            box-sizing: border-box;
        }
        
        .homePageSection {
            height: 1000px; /* Changed to viewport height */
            display: grid;
            grid-template-rows: repeat(10, 10%);
            grid-template-columns: repeat(10, 1fr);
        }
        
        .header {
            grid-column: 1 / 11;
            grid-row: 1 / 2;
            display: flex;
            position: relative;
            align-items: center; /* Added for vertical alignment */
        }
        
        .header h1 {
            font-family: "Grechen Fuemen", serif;
            color: var(--fColor);
            margin: 20px 50px;
            font-size: 3em;
        }
        
        .header nav ul li {
            font-weight: 700;
            display: inline;
            color: var(--fColor);
            padding: 10px 20px;
            transition: .2s;
        }
        
        .header nav {
            position: absolute;
            right: 1%;
            top: 50%;
            transform: translateY(-50%);
        }
        
        .header nav ul li:hover {
            font-weight: 900;
            cursor: pointer;
            background-color: var(--fColor);
            color: var(--bgColor);
            border-radius: 05px;
        }
        
        .fa-solid:hover {
            cursor: pointer;
            background-color: var(--fColor);
            box-sizing: border-box;
            padding: 15px;
            color: var(--bgColor);
            border-radius: 05px;
            transition: .2s;
        }
        
        .fa-solid:active {
            border-radius: 30px;
        }
        
        .header nav p:active {
            font-weight: 900;
            cursor: default;
            background-color: var(--fColor);
            color: var(--bgColor);
            border-radius: 40px;
        }
        
        .socialMedia {
            grid-column: 1 / 2;
            grid-row: 3 / 9;
            place-content: center;
        }
        
        .socialMedia a {
            color: var(--fColor);
            font-size: 2.3rem;
            padding: 10px;
            text-decoration: none;
            display: flex;
            width: fit-content;
            padding: 25px;
            margin: 20px;
            text-align: center;
            transition: .2s;
        }
        
        .socialMedia a:hover {
            color: var(--bgColor);
            background-color: var(--fColor);
            border-radius: 15px;
        }
        
        .socialMedia a:active {
            color: var(--bgColor);
            background-color: var(--fColor);
            border-radius: 50%;
        }
        
        .intro {
            grid-column: 2 / 7;
            grid-row: 3 / 9;
            display: flex;
            align-items: center;
        }
        
        .intro p {
            margin-left: 2.5rem;
            font-size: 2.3em;
            color: var(--fColor);
        }
        
        #mohan {
            font-weight: 700;
            color: var(--fColor);
        }
        
        .text-container {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            width: 0ch;
            padding: 0;
            margin: 0;
            font-size: 2.5rem;
            font-weight: 800;
            transition: 2s steps(13, end);
            transform: translateY(+25%);
            color: var(--fColor);
        }
        
        .profile {
            grid-row: 3 / 9;
            grid-column: 7 / 11;
            background-color: var(--fColor);
            animation: profileBg 7s infinite ease-in-out;
            display: flex;
            justify-self: center;
            align-self: center;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            height: 30rem;
            width: 28rem;
        }
        
        #inner {
            padding: 15px;
            background-color: var(--bgColor);
            animation: innerBg 7s infinite ease-in-out;
            width: 90%;
            height: 90%;
            overflow: hidden;
            position: relative;
        }
        #inner img{
            height: 500px;
            width: auto;
            position: absolute;
            left: 30px;
            top: 50px;
            filter: drop-shadow(0px 0px 17px grey);
        }
        
        @keyframes profileBg {
            0% {
                border-radius: 53% 47% 42% 58% / 60% 31% 69% 40% ;
            }
            25% {
                border-radius: 41% 59% 36% 64% / 49% 60% 40% 51% ;
            }
            50% {
                border-radius: 51% 49% 44% 56% / 41% 48% 52% 59% ;
            }
            75% {
                border-radius: 58% 42% 48% 52% / 60% 38% 62% 40% ;
            }
            100% {
                border-radius: 53% 47% 42% 58% / 60% 31% 69% 40%;
            }
        }
        
        @keyframes innerBg {
            0% {
                border-radius: 53% 47% 42% 58% / 60% 31% 69% 40% ;
            }
            25% {
                border-radius: 41% 59% 36% 64% / 49% 60% 40% 51% ;
            }
            50% {
                border-radius: 51% 49% 44% 56% / 41% 48% 52% 59% ;
            }
            75% {
                border-radius: 58% 42% 48% 52% / 60% 38% 62% 40% ;
            }
            100% {
                border-radius: 53% 47% 42% 58% / 60% 31% 69% 40% ;
            }
        }
        
        .hireButton {
            margin-left: 1.7rem;
            grid-row: 9 / 10;
            grid-column: 2/ 7;
        }
        
        .resume {
            align-self: center;
            background-color: var(--bgColor);
            color: var(--fColor);
            width: fit-content;
            padding: 17px 27px;
            font-size: 1.5rem;
            text-decoration: none;
            border-radius: 8px;
            margin-right: 20px;
            font-weight: 600;
            position: relative;
            box-sizing: border-box;
            transition: .2s;
        }
        
        #hireMe {
            animation: borderAnimation1 2s linear infinite;
        }
        
        #hireMe::after,
        #hireMe::before {
            background-image: conic-gradient(from var(--bdeg), var(--fColor), transparent 90%);
        }
        
        #res {
            animation: borderAnimation 2s linear infinite;
        }
        
        .header .fa-solid {
            color: var(--bgColor);
            z-index: -100;
        }
        
        @property --bdeg {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: true;
        }
        
        .resume::after,
        .resume::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: conic-gradient(from var(--bdeg), transparent 10%, var(--fColor));
            z-index: -2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 3px;
            border-radius: 8px;
        }
        
        @keyframes borderAnimation {
            from {
                --bdeg: 0deg;
            }
            to {
                --bdeg: 360deg;
            }
        }
        
        @keyframes borderAnimation1 {
            from {
                --bdeg: 360deg;
            }
            to {
                --bdeg: 0deg;
            }
        }
        
        .resume:hover {
            background-color: #8d6571;
            color: var(--bgColor);
        }
        
        @media (min-width: 800px) and (max-width: 1435px) {
            .homePageSection {
                width: 100vw;
                height: auto;
            }
            .fa-bars {
                display: none;
            }
            .intro p {
                margin-left: 1.5rem;
                font-size: 1.5rem;
                color: var(--fColor);
            }
            .text-container {
                font-size: 1.5rem;
            }
            .profile {
                height: 21rem;
                width: 19rem;
            }
            #inner {
                width: 85%;
                height: 85%;
            }
            .socialMedia a {
                font-size: 1.8rem;
                padding: 15px;
                margin: 20px;
            }
            .resume {
                font-size: 1rem;
            }
            #inner img{
                height: 350px;
                width: auto;
                position: absolute;
                left: 13px;
                top: 30px;
            }
        }
       
        @media all and (max-width: 395px) {
            #res,#hireMe{
                font-size: 16px;
            }
            .hireButton{
                margin-left: .3rem;
            }
            .hireButton {
                grid-row: 5/ 6;
                grid-column: 4 / 8;
                place-self: center;
                margin-left: 40px;
            }
        }
        @media all and (max-width: 800px){
            body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .homePageSection {
                width: 100%;
                height: 100%;
                grid-template-rows: repeat(5,1fr);
            }
            .header {
                grid-row: 1 / 2;
                grid-column: 1 / 11;
                display: flex;
                justify-content: space-between;
                align-items: start;
            }
            .header .fa-solid{
                margin: 40px 30px;
            }
            .profile {
                grid-row: 1 / 3;
                grid-column: 4 / 8;
                height: 22rem;
                width: 20rem;
                margin-top: 130px;
            }
            #inner {
                width: 85%;
                height: 85%;
            }
            .header nav ul {
                position: absolute;
                top: 20%;
                padding: 0%;
                margin: 0;
                left: 50%;
                transform: translateX(-50%);
            }
            .header nav ul li {
                font-weight: 700;
                display: block;
                color: var(--fColor);
                transition: .2s;
                margin: 10px 0;
                padding: 10px;
                text-align: center;
            }
            .header nav {
                border: solid 5px var(--fColor);
                display: none;
                position: absolute;
                background-color: var(--bgColor);
                height: 400px;
                width: 390px;
                align-items: center;
                justify-content: center;
                left: 50%;
                top: 150px;
                transform: translateX(-50%);
                padding: 0;
                margin: 10px 0;
                padding-bottom: 30px;
                border-radius: 30px;
                transition: .4s;
            }
            .header nav:hover {
                box-shadow: 10px 10px 20px var(--fColor);
            }
            .fa-bars {
                margin-right: 20px;
                font-size: 1.5rem;
                color: var(--fColor);
            }
            .header h1 {
                margin: 20px 20px;
                font-size: 3em;
            }
            .intro {
                grid-row: 3/ 5;
                grid-column: 4 / 8;
                font-size: .8rem;
                align-items: start;
            }
            .intro p{
                margin-left: 0;
            }
            .text-container {
                font-size: 1.8rem;
                font-weight: 800;
            }
            .hireButton {
                grid-row: 4/ 5;
                grid-column: 2 / 10;
                place-self: center;
                align-self: end;
            }
            .header .fa-solid {
                z-index: 0;
                color: var(--fColor);
            }
            .header .fa-solid:hover {
                color: var(--bgColor);
            }
            .socialMedia {
                grid-row: 5/ 6;
                grid-column: 4 / 8;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                width: 300px;
                place-self: center;
                align-self:end;
            }
            #inner img{
                height: 350px;
                width: auto;
                position: absolute;
                left: 17px;
                top: 30px;
            }
            .socialMedia a {
                margin: 0;
            }
            .showmenu {
                display: flex !important;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            }
        }
        
        .contactPageSection {
            position: relative; /* Changed to relative */
            height: 1100px; /* Changed to auto */
            display: grid;
            grid-template-rows: repeat(10, auto); /* Changed to auto */
            grid-template-columns: repeat(10, 1fr);
            padding-top: 50px; /*added padding*/
        }
        
        .formContainer {
            grid-row: 3 / 10;
            grid-column: 2 / 6;
            background: linear-gradient(134deg, var(--fColor), #c2657f);
            box-sizing: border-box;
            padding: 40px 80px;
            box-shadow: -10px 10px 30px;
            z-index: 2;
        }
        
        input::placeholder {
            color: var(--bgColor);
            opacity: 1;
        }
        
        
        textarea::placeholder {
            color: var(--bgColor);
        }
        
        .formContainer h1 {
            color: var(--bgColor);
            font-weight: 600;
        }
        
        #contact-form input,
        #contact-form button,
        #contact-form textarea {
            display: block;
            margin: 20px 0;
        }
        
        #contact-form input,
        #contact-form textarea {
            border: none;
            background-color: transparent;
            width: 80%;
            padding: 20px 0;
            border-bottom: 2px solid var(--bgColor);
            color: var(--bgColor);
        }
        
        #contact-form button {
            padding: 15px 20px;
            font-weight: 700;
            border-radius: 7px;
            font-size: 15px;
            color: var(--fColor);
            margin-top: 40px;
            background: linear-gradient(250deg, #8f5163);
            border: none;
            cursor: pointer;
        }
        
        .contInfo {
            grid-row: 3 / 10;
            grid-column: 6 / 10;
            box-sizing: border-box;
            padding: 40px 80px;
            box-shadow: -20px 10px 30px black;
            color: #5B2333;
            width: 100%;
        }
        
        .contAddress,
        .contAddress p {
            border: none;
            background-color: transparent;
            width: 100%;
            border-bottom: 2px solid var(--bgColor);
            position: relative;
        }
        
        .contAddress p {
            font-weight: 700;
            width: 100%;
        }
        
        .contAddress .fa-solid,
        .contAddress .fa-brands {
            padding: 10px;
            display: inline-block;
            box-shadow: 2px 2px 10px;
            border-radius: 20px;
            margin: 20px 20px 20px 0;
        }
        
        .contAddress span {
            font-weight: 450;
            width: 80%;
        }
        
        .add span {
            display: flex;
            width: 80%;
            position: absolute;
            top: 27px;
            left: 135px;
        }
        
        .headContact {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
            font-family: "Grechen Fuemen", serif;
            color: var(--fColor);
            margin: 20px 50px;
            font-size: 3em;
        }
        
        .sendMail:active {
            border-radius: 30px;
        }
        
        #message-status {
            margin-top: 10px;
            color: green;
        }
        
        @media (min-width: 800px) and (max-width: 1430px) {
            .contactPageSection {
                width: 90%;
                max-width: 1200px;
                height: auto;
                padding: 20px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 auto;
            }
        
            .headContact {
                width: 90%;
                text-align: center;
            }
        
            .formContainer,
            .contInfo {
                width: 100%;
                max-width: 800px;
                padding: 20px;
                box-sizing: border-box;
            }
        
            .formContainer {
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-bottom: 0;
            }
        
            .contInfo {
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-top: 0;
            }
        
            .add span {
                display: inline;
                position: static;
                width: auto;
                margin-left: 10px;
            }
        
            .contAddress .fa-solid,
            .contAddress .fa-brands {
                margin-bottom: 0;
            }
        }
        
        @media all and (max-width: 800px) {
            .contactPageSection {
                width: 100%;
                height: auto;
                padding: 20px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .headContact {
                width: 90%;
                text-align: center;
            }
            .formContainer,
            .contInfo {
                width: 90%;
                max-width: 400px;
                padding: 20px;
                box-sizing: border-box;
            }
            .formContainer {
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-bottom: 0;
            }
            .contInfo {
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-top: 0;
            }
            .add span {
                display: inline;
                position: static;
                width: auto;
                margin-left: 10px;
            }
            .contAddress .fa-solid,
            .contAddress .fa-brands {
                margin-bottom: 0;
            }
        }
        
        .add:hover,
        .mail:hover,
        .phone:hover {
            background-color: transparent !important;
            color: inherit !important;
            cursor: default !important;
        }
        
        /* Skills Section CSS */
        .skillsPageSection {
            width: 100vw;
            max-width: 1880px;
            margin: 0 auto;
            height: auto;
            display: grid;
            grid-template-rows: auto auto auto;
            grid-template-columns: repeat(10, 1fr);
            box-sizing: border-box;
            position: relative;
            padding-top: 20px; /* added padding */
        }
        
        .skillsContent {
            grid-column: 2 / 10;
            grid-row: 3 / 4;
            text-align: center;
            padding: 20px 0;
        }
        
        .skillsDescription {
            font-size: 1.1em;
            line-height: 1.6;
            margin-bottom: 40px;
        }
        
        .skillsGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            justify-items: center;
        }
        
        .skillItem {
            background-color: var(--skillItemBg);
            padding: 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: box-shadow 0.5s ease, transform 0.3s ease;
            width: 200px;
            height: 200px;
            box-sizing: border-box;
            box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1),
                inset -5px -5px 10px rgba(0, 0, 0, 0.1);
        }
        
        .skillItem:hover {
            transform: translateY(-5px);
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3),
                -5px -5px 10px rgba(0, 0, 0, 0.3);
        }
        
        .skillItem img {
            height: 30px;
            width: auto;
            margin-bottom: 10px;
        }
        
        .skillItem span {
            font-weight: 600;
        }
        
        .skillsPageSection .header {
            grid-column: 1 / 11;
            grid-row: 1 / 2;
            display: flex;
            align-items: center;
        }
        
        .skillsPageSection .header h1 {
            font-family: "Grechen Fuemen", serif;
    color: var(--fColor);
    margin: 20px 50px; /* Keep margin consistent */
    font-size: 3em;
        }
        
        .animated-char {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        
        .knowledge-level {
            width: 80%;
            height: 10px;
            background-color: #e0e0e0;
            border-radius: 5px;
            margin: 5px auto;
            overflow: hidden;
            position: relative;
        }
        
        .progress-bar {
            height: 100%;
            background-color: var(--progressBarColor);
            border-radius: 5px;
            position: relative;
            overflow: hidden;
            background-image: linear-gradient(to right, transparent 20%, rgba(255, 255, 255, 0.4) 40%, transparent 60%);
            background-size: 200% 100%;
            animation: progressBarMove 3s linear infinite;
        }
        
        @keyframes progressBarMove {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }
        
        .readme-button {
            padding: 10px 20px;
            background-color: var(--progressBarColor);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 0px;
        }
        
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 100px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            font-size: 22px;
            z-index: 1000;
            width: 1800px;
            height: 90vh;
            max-width: 1200px;
            text-align: left;
            overflow-y: auto;
            box-sizing: border-box;
        }
        
        .popup-content {
            height: 100%;
        }
        
        .popup-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 40px;
        }
        
        .intro-container {
            grid-column: 2 / 10;
            grid-row: 2 / 3;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }
        
        .intro-text {
            margin-right: 10px;
            font-size: 25px;
            text-align: center;
        }
        
        @media all and (max-width: 800px) {
            .popup {
                width: 90vw;
                height: 90vh;
                padding: 15px;
            }
        
            .popup-content {
                font-size: 15px;
            }
        
            .skillsPageSection {
                grid-template-rows: auto auto auto;
            }
        
            .skillsGrid {
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
        
            .skillItem {
                width: 100%;
                height: auto;
                padding: 10px;
            }
        
            .skillItem img {
                height: 25px;
                margin-bottom: 5px;
            }
        
            .skillItem span {
                font-size: 0.9em;
            }
        
            .intro-text {
                font-size: 1em;
            }
        
            .skillsPageSection .header h1 {
                font-size: 3em;
                align-items: center;
                width: 100%;
                margin: 16px 0%;
                text-align: center;
            }
        
            .intro-container {
                padding: 5px;
            }
        }
        
        @media (min-width: 800px) and (max-width: 1430px) {
            .popup {
                width: 90vw;
                height: 90vh;
                padding: 30px;
            }
            .skillsPageSection .header h1 {
                font-size: 3em;
                align-items: center;
                width: 100%;
                margin: 16px 0%;
                text-align: center;
        }
        
        .animated-text {
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }}














    
                           
.projectsPageSection {
    width: 100vw;
    max-width: 1880px;
    margin: 0 auto;
    height: auto;
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: repeat(10, 1fr);
    box-sizing: border-box;
    padding-top: 50px;
    text-align: center;
}

.projectsPageSection .header {
    grid-column: 1 / 11;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: start;
    margin:  20px 50px;
}

.projectsPageSection .header h1 {
    font-family: "Grechen Fuemen", serif;
    color: var(--fColor);
    font-size: 3em;
    margin: 20px 0;
}

.projectsIntro {
    grid-column: 2 / 10;
    grid-row: 2 / 3;
    padding: 0px 0;
}

.projectsIntro p {
    font-size: 1.5em;
    font-weight: 600;
    color: var(--fColor);
}

.projectsBio {
    grid-column: 2 / 10;
    grid-row: 3 / 4;
    padding: 0px 0;
    text-align: center;
}

.projectsBio p {
    font-size: 1.1em;
    color: var(--fColor);
    line-height: 1.6;
    font-weight: 600;
}


.animated-text:hover span {
    transform: scale(1.1);
}

.projectsGrid {
    grid-column: 2 / 10;
    grid-row: 4 / 5;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding: 20px;
    position: relative;
    justify-content: center;
    height: auto;
}

.projectItem {
    background-color: var(--skillItemBg);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    margin: 0 auto;
}

.projectItem:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.projectItem img {
    max-width: 100%;
    max-height: 200px;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom:15px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.projectItem span {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--fColor);
    margin-bottom: 10px;
}

.projectItem p {
    font-size: 1em;
    color: #666;
    color: var(--fColor);
}

.projectDetail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(var(--fColor), #8f5e6b);
    color: var(--bgColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
}

.projectDetail p {
    color: var(--bgColor);
}
.projectItem:hover .projectDetail {
    opacity: 1;
}

.githubLink {
    background-color: var(--bgColor);
    color: var(--fColor);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 15px;
}
.animated-text {
    display: inline-block;
    word-spacing: 0px;
}

.animated-text span {
    display: inline-block;
    transition: transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease; /* Added text-shadow transition */
    transform: scale(1);
    color: var(--fColor);
    text-shadow: none; /* No shadow initially */
}

.animated-text.animate-wave span {
    transform: scale(1.15); /* Increased scale */
    color: #d15f82; /* More contrasting color */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

/* Responsive adjustments */
@media all and (max-width: 800px) {
    .projectsGrid .projectItem img {
        max-height: 180px; /* 30% reduction from 200px */
    }

    .projectsGrid .projectItem span {
        font-size: 0.84em; /* 30% reduction from 1.2em */
    }

    .projectsGrid .projectItem p {
        font-size: 0.7em; /* 30% reduction from 1em */
    }
    .projectsBio p {
        font-size: 0.77em; /* 30% reduction from 1.1em */
    }
    .projectsPageSection .header {
        justify-content: center;
        margin: 0;
    }
}

@media (min-width: 800px) and (max-width: 1430px) {
    .projectsGrid .projectItem img {
        max-height: 160px; /* 20% reduction from 200px */
    }

    .projectsGrid .projectItem span {
        font-size: 0.96em; /* 20% reduction from 1.2em */
    }

    .projectsGrid .projectItem p {
        font-size: 0.8em; /* 20% reduction from 1em */
    }
    .projectsBio p {
        font-size: 0.88em; /* 20% reduction from 1.1em */
    }
    .projectsPageSection .header {
        justify-content: center;
        margin: 0;
    }
}
@media all and (max-width: 800px){
    footer{
        font-size: 10px;
    }
    .contInfo,.formContainer{
        box-shadow: 0 0 10px grey;
    }
    .contInfo p,.contInfo span{
        font-size: 11px;
    }

}
@media all and (max-width: 350px){
    .contInfo,.formContainer{
        padding: 10px;
    }
}
