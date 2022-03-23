const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/home', (req, res) => {
    res.send('Hello from homepage')
})
// console.log({ username, password })

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/homepage', (req, res) => {
    const { name, number, role } = req.body;
    console.log({ name, number, role });

    let users = [{
        name: name,
        mobile_number: number,
        user_role: role
    }]
    return res.json(users).status(200);
})
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log({ username, password })

    const Roles_info = {
        admin: {
            name: "admin",
            pass: "admin"
        },
        marketing: {
            name: "marketing",
            pass: "marketing"
        },
        VIP: {
            name: "vip",
            pass: "vip"
        },
        manager: {
            name: "manager",
            pass: "manager"
        },
        normal_user: {
            name: "user",
            pass: "123"
        }
    }

    if (Roles_info.admin.pass === password && Roles_info.admin.name === username) {
        let responseObj = {
            message: "Admin Login Successful",
            role: "Admin"
        }
        return res.json(responseObj).status(200);
    } else if (Roles_info.manager.pass === password && Roles_info.manager.name === username) {
        let responseObj = {
            message: "Common Login Successful",
            role: "Manager"
        }
        return res.json(responseObj).status(200);
    } else if (Roles_info.VIP.pass === password && Roles_info.VIP.name === username) {
        let responseObj = {
            message: "Common Login Successful",
            role: "VIP"
        }
        return res.json(responseObj).status(200);
    } else if (Roles_info.marketing.pass === password && Roles_info.marketing.name === username) {
        let responseObj = {
            message: "Common Login Successful",
            role: "Marketing"
        }
        return res.json(responseObj).status(200);
    } else if (Roles_info.normal_user.pass === password && Roles_info.normal_user.name === username) {
        let responseObj = {
            message: "Common Login Successful",
            role: "User"
        }
        return res.json(responseObj).status(200);
    }
    let responseObj = {
        message: "Login Unsuccessful",
        role: "Invalid"
    }
    return res.status(401).json(responseObj);
})

const port = 5000

app.listen(port, () => console.log(`this app is listening on port ${port}`));