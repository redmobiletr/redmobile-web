import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Marble Modern";
        src: url("/fonts/Marble-Bold.woff") format("woff"),
             url("/fonts/Marble-Bold.ttf") format("truetype");
        font-style: normal;
        font-weight: 700;
    }


    body,
    html,
    a {
        font-family: 'Montserrat', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #bf1534;
    }

    input,
    textarea {
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        background: #ffffff;
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.875rem;
        color: #101726;

        :hover {
            border-color: #d90404;
        }

        :focus {
            background: #ffffff;
            border-color: #d90404;
            box-shadow: 0 0 0 3px rgba(217, 4, 4, 0.1);
        }

        ::placeholder {
            color: #999999;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        color: #101726;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #101726;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #bf1534;

        :hover {
            color: #f22e3e;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
