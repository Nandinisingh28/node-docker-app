const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js Docker App</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b, #312e81);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            overflow: hidden;
        }

        .background {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .circle {
            position: absolute;
            border-radius: 50%;
            filter: blur(2px);
            opacity: 0.25;
        }

        .circle.one {
            width: 300px;
            height: 300px;
            background: #6366f1;
            top: -100px;
            left: -80px;
        }

        .circle.two {
            width: 250px;
            height: 250px;
            background: #06b6d4;
            bottom: -80px;
            right: -60px;
        }

        .card {
            position: relative;
            width: min(90%, 650px);
            padding: 55px 45px;
            text-align: center;
            background: rgba(255, 255, 255, 0.10);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 24px;
            backdrop-filter: blur(18px);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
        }

        .icon {
            width: 75px;
            height: 75px;
            margin: 0 auto 25px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 38px;
        }

        .badge {
            display: inline-block;
            padding: 7px 14px;
            margin-bottom: 18px;
            border-radius: 50px;
            background: rgba(99, 102, 241, 0.25);
            border: 1px solid rgba(129, 140, 248, 0.4);
            font-size: 13px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        h1 {
            font-size: clamp(32px, 6vw, 52px);
            line-height: 1.1;
            margin-bottom: 18px;
        }

        h1 span {
            background: linear-gradient(90deg, #a5b4fc, #67e8f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p {
            color: #cbd5e1;
            font-size: 17px;
            line-height: 1.7;
            margin-bottom: 30px;
        }

        .info {
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .info-box {
            padding: 12px 18px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.08);
            color: #e2e8f0;
            font-size: 14px;
        }

        .footer {
            margin-top: 28px;
            font-size: 12px;
            color: #94a3b8;
        }

        @media (max-width: 500px) {
            .card {
                padding: 40px 25px;
            }

            p {
                font-size: 15px;
            }
        }
    </style>
</head>

<body>

    <div class="background">
        <div class="circle one"></div>
        <div class="circle two"></div>
    </div>

    <main class="card">

        <h1>
            Welcome to <span>My App</span>
        </h1>

        <p>
            A simple Node.js application running inside a
            Docker container. Built, packaged, and deployed
            with Docker.
        </p>

        <div class="info">
            <div class="info-box">⚡ Node.js</div>
            <div class="info-box">🐳 Docker</div>
            <div class="info-box">🌐 Port 3000</div>
        </div>

        <div class="footer">
            Successfully running inside a container
        </div>

    </main>

</body>
</html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});