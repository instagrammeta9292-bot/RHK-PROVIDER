<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>App Details - RHK Provider</title>

    <meta
        name="description"
        content="Download Android apps from RHK Provider."
    >

    <meta
        name="theme-color"
        content="#0b0b0f"
    >

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background: #0b0b0f;
            color: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
            min-height: 100vh;
            padding-bottom: 40px;
        }

        button {
            font-family: inherit;
        }

        a {
            color: inherit;
            text-decoration: none;
        }


        /* HEADER */

        .header {
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(11, 11, 15, 0.94);
            backdrop-filter: blur(15px);
            border-bottom: 1px solid #202027;
        }

        .header-inner {
            max-width: 1000px;
            margin: auto;
            height: 70px;
            padding: 0 16px;

            display: flex;
            align-items: center;
            gap: 14px;
        }

        .back-btn {
            width: 42px;
            height: 42px;

            border-radius: 12px;
            border: 1px solid #292933;

            background: #15151b;
            color: white;

            font-size: 22px;
            cursor: pointer;
        }

        .back-btn:hover {
            background: #7043e6;
            border-color: #7043e6;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo {
            width: 38px;
            height: 38px;

            border-radius: 11px;

            display: flex;
            align-items: center;
            justify-content: center;

            background:
                linear-gradient(
                    135deg,
                    #7c3aed,
                    #2563eb
                );

            font-size: 17px;
            font-weight: 900;
        }

        .brand-name {
            font-size: 17px;
            font-weight: 800;
        }


        /* MAIN */

        .container {
            max-width: 1000px;
            margin: auto;
            padding: 22px 16px;
        }


        /* APP HERO */

        .app-hero {
            padding: 15px 0 25px;
        }

        .app-main {
            display: flex;
            gap: 16px;
            align-items: center;
        }

        .app-icon {
            width: 92px;
            height: 92px;

            flex: 0 0 92px;

            border-radius: 23px;

            background:
                linear-gradient(
                    135deg,
                    #282832,
                    #17171e
                );

            border: 1px solid #33333d;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 40px;

            box-shadow:
                0 15px 40px
                rgba(0,0,0,0.35);
        }

        .app-title {
            min-width: 0;
        }

        .app-title h1 {
            font-size: 25px;
            line-height: 1.2;
            margin-bottom: 7px;
        }

        .developer {
            color: #9c9ca7;
            font-size: 13px;
            margin-bottom: 9px;
        }

        .verified {
            display: inline-flex;
            align-items: center;
            gap: 5px;

            color: #a678ff;
            font-size: 11px;
        }


        /* INFO */

        .info-grid {
            display: grid;
            grid-template-columns:
                repeat(3, 1fr);

            border-top: 1px solid #292933;
            border-bottom: 1px solid #292933;

            margin-top: 5px;
        }

        .info-item {
            padding: 15px 8px;
            text-align: center;
        }

        .info-item:not(:last-child) {
            border-right: 1px solid #292933;
        }

        .info-value {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .info-label {
            font-size: 10px;
            color: #777782;
        }


        /* DOWNLOAD */

        .download-section {
            margin-top: 22px;
        }

        .download-btn {
            width: 100%;
            height: 55px;

            border: none;
            border-radius: 15px;

            background:
                linear-gradient(
                    135deg,
                    #7c3aed,
                    #4f46e5
                );

            color: white;

            font-size: 15px;
            font-weight: 800;

            cursor: pointer;

            box-shadow:
                0 12px 30px
                rgba(91, 63, 220, 0.25);

            transition: 0.2s;
        }

        .download-btn:hover {
            transform: translateY(-2px);
        }

        .download-btn:active {
            transform: scale(0.98);
        }

        .download-note {
            text-align: center;
            margin-top: 9px;

            color: #686873;
            font-size: 10px;
        }


        /* SECTION */

        .section {
            margin-top: 32px;
        }

        .section-title {
            font-size: 19px;
            margin-bottom: 14px;
        }

        .description {
            background: #15151b;
            border: 1px solid #292933;

            padding: 17px;

            border-radius: 16px;

            color: #a1a1ac;

            font-size: 13px;
            line-height: 1.7;
        }


        /* SCREENSHOTS */

        .screenshots {
            display: flex;
            gap: 12px;

            overflow-x: auto;

            scrollbar-width: none;
            padding-bottom: 4px;
        }

        .screenshots::-webkit-scrollbar {
            display: none;
        }

        .screenshot {
            flex: 0 0 170px;
            height: 300px;

            border-radius: 17px;

            border: 1px solid #30303a;

            background:
                linear-gradient(
                    160deg,
                    #1c1c25,
                    #101015
                );

            display: flex;
            align-items: center;
            justify-content: center;

            color: #686873;
            font-size: 12px;
        }


        /* DETAILS */

        .details-box {
            background: #15151b;
            border: 1px solid #292933;

            border-radius: 16px;

            overflow: hidden;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            gap: 20px;

            padding: 15px;

            border-bottom: 1px solid #292933;

            font-size: 12px;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .detail-name {
            color: #777782;
        }

        .detail-value {
            color: #e5e5eb;
            text-align: right;
        }


        /* PERMISSIONS */

        .permissions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .permission {
            padding: 9px 11px;

            background: #15151b;

            border: 1px solid #292933;

            border-radius: 10px;

            color: #a3a3ae;

            font-size: 11px;
        }


        /* SAFETY */

        .safety {
            padding: 15px;

            background:
                rgba(34, 197, 94, 0.06);

            border: 1px solid
                rgba(34, 197, 94, 0.18);

            border-radius: 15px;

            color: #9faaa2;

            font-size: 11px;

            line-height: 1.6;
        }

        .safety strong {
            display: block;

            color: #b6d7bd;

            margin-bottom: 5px;
        }


        /* FOOTER */

        footer {
            text-align: center;

            margin-top: 40px;

            color: #60606a;

            font-size: 10px;

            line-height: 1.7;
        }


        /* DESKTOP */

        @media (min-width: 700px) {

            .container {
                padding-top: 40px;
            }

            .app-icon {
                width: 120px;
                height: 120px;
                flex-basis: 120px;
                font-size: 50px;
                border-radius: 28px;
            }

            .app-title h1 {
                font-size: 34px;
            }

            .app-layout {
                display: grid;

                grid-template-columns:
                    1fr 320px;

                gap: 35px;

                align-items: start;
            }

            .download-section {
                margin-top: 0;
            }

            .download-btn {
                height: 60px;
            }
        }

    </style>

</head>


<body>


    <!-- HEADER -->

    <header class="header">

        <div class="header-inner">

            <button
                class="back-btn"
                onclick="goBack()"
                aria-label="Go back"
            >
                ←
            </button>


            <a
                href="index.html"
                class="brand"
            >

                <div class="logo">
                    R
                </div>

                <div class="brand-name">
                    RHK Provider
                </div>

            </a>

        </div>

    </header>



    <!-- MAIN -->

    <main class="container">


        <div class="app-layout">


            <div>


                <!-- APP HERO -->

                <section class="app-hero">

                    <div class="app-main">


                        <div
                            class="app-icon"
                            id="appIcon"
                        >
                            🎵
                        </div>


                        <div class="app-title">

                            <h1 id="appName">
                                RHK Music
                            </h1>

                            <p
                                class="developer"
                                id="developer"
                            >
                                RHK Developer
                            </p>

                            <span class="verified">
                                ✓ RHK Provider
                            </span>

                        </div>

                    </div>

                </section>



                <!-- APP INFO -->

                <div class="info-grid">


                    <div class="info-item">

                        <div
                            class="info-value"
                            id="version"
                        >
                            1.0
                        </div>

                        <div class="info-label">
                            Version
                        </div>

                    </div>


                    <div class="info-item">

                        <div
                            class="info-value"
                            id="size"
                        >
                            25 MB
                        </div>

                        <div class="info-label">
                            Size
                        </div>

                    </div>


                    <div class="info-item">

                        <div
                            class="info-value"
                            id="android"
                        >
                            Android
                        </div>

                        <div class="info-label">
                            Platform
                        </div>

                    </div>


                </div>



                <!-- DOWNLOAD -->

                <section class="download-section">

                    <button
                        class="download-btn"
                        onclick="downloadAPK()"
                    >
                        ⬇ Download APK
                    </button>

                    <p class="download-note">
                        APK file • Version 1.0
                    </p>

                </section>



                <!-- DESCRIPTION -->

                <section class="section">

                    <h2 class="section-title">
                        About this app
                    </h2>


                    <div class="description">

                        <p id="description">

                            RHK Music is an Android music
                            application created by RHK.

                            Enjoy your music with a simple,
                            clean and mobile-friendly interface.

                            More information about this
                            application will be added soon.

                        </p>

                    </div>

                </section>



                <!-- SCREENSHOTS -->

                <section class="section">

                    <h2 class="section-title">
                        Screenshots
                    </h2>


                    <div class="screenshots">

                        <div class="screenshot">
                            Screenshot 1
                        </div>

                        <div class="screenshot">
                            Screenshot 2
                        </div>

                        <div class="screenshot">
                            Screenshot 3
                        </div>

                    </div>

                </section>



                <!-- DETAILS -->

                <section class="section">

                    <h2 class="section-title">
                        App information
                    </h2>


                    <div class="details-box">


                        <div class="detail-row">

                            <span class="detail-name">
                                App name
                            </span>

                            <span
                                class="detail-value"
                                id="detailName"
                            >
                                RHK Music
                            </span>

                        </div>


                        <div class="detail-row">

                            <span class="detail-name">
                                Version
                            </span>

                            <span
                                class="detail-value"
                                id="detailVersion"
                            >
                                1.0
                            </span>

                        </div>


                        <div class="detail-row">

                            <span class="detail-name">
                                Category
                            </span>

                            <span
                                class="detail-value"
                                id="category"
                            >
                                Music
                            </span>

                        </div>


                        <div class="detail-row">

                            <span class="detail-name">
                                Android
                            </span>

                            <span class="detail-value">
                                Android 7.0+
                            </span>

                        </div>


                        <div class="detail-row">

                            <span class="detail-name">
                                Package
                            </span>

                            <span
                                class="detail-value"
                                id="packageName"
                            >
                                com.rhk.music
                            </span>

                        </div>


                    </div>

                </section>



                <!-- PERMISSIONS -->

                <section class="section">

                    <h2 class="section-title">
                        Permissions
                    </h2>


                    <div class="permissions">

                        <span class="permission">
                            🎵 Audio
                        </span>

                        <span class="permission">
                            📁 Storage
                        </span>

                        <span class="permission">
                            🌐 Internet
                        </span>

                    </div>

                </section>



                <!-- SAFETY -->

                <section class="section">

                    <div class="safety">

                        <strong>
                            🛡️ Download safely
                        </strong>

                        Only download APK files from
                        sources you trust. RHK Provider
                        should only distribute applications
                        that it has permission to distribute.

                    </div>

                </section>


            </div>


        </div>

    </main>



    <!-- FOOTER -->

    <footer>

        <p>
            © 2026 RHK Provider
        </p>

        <p>
            Android application discovery portal
        </p>

    </footer>



    <script>


        /*
         * APP DATA
         *
         * Later we will connect this page
         * to your real APK information.
         */


        const apps = {

            "RHK Music": {

                name: "RHK Music",

                icon: "🎵",

                developer: "RHK Developer",

                version: "1.0",

                size: "25 MB",

                category: "Music",

                android: "Android 7.0+",

                package:
                    "com.rhk.music",

                description:
                    "RHK Music is an Android music application created by RHK. Enjoy your music with a simple, clean and mobile-friendly interface.",

                apk:
                    "#"

            },


            "RHK Tools": {

                name: "RHK Tools",

                icon: "🛠️",

                developer: "RHK Developer",

                version: "1.0",

                size: "18 MB",

                category: "Tools",

                android: "Android 7.0+",

                package:
                    "com.rhk.tools",

                description:
                    "RHK Tools provides useful utilities in one simple Android application.",

                apk:
                    "#"

            },


            "Study Helper": {

                name: "Study Helper",

                icon: "📚",

                developer: "RHK Developer",

                version: "1.0",

                size: "20 MB",

                category: "Education",

                android: "Android 7.0+",

                package:
                    "com.rhk.study",

                description:
                    "Study Helper is an educational Android application designed to help students.",

                apk:
                    "#"

            },


            "RHK Social": {

                name: "RHK Social",

                icon: "💬",

                developer: "RHK Developer",

                version: "1.0",

                size: "30 MB",

                category: "Social",

               
