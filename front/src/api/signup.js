import {HOST} from './url';

export const signUp = async () => {
    console.log(HOST);

    let response = await fetch(`${HOST}/api/v2/user/signup`,
        {
            credentials: "include",
            headers: {
                'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            "method": "POST",
            "mode": "cors",
            "body": [`name=${localStorage.getItem("name")}`,
                `surname=${localStorage.getItem("surname")}`,
                `patronymic=${localStorage.getItem("patronymic")}`,
                `email=${localStorage.getItem("email")}`,
                `mobile_phone=${localStorage.getItem("mobile_phone")}`,
            ].join("&"),
        }
    );
    let text = await response.text();
    console.log("Sign up response", text);
    if (response.status === 200)
        return JSON.parse(text);
    return [];
};
