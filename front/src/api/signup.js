import { HOST } from './url';

export const signUp = async () => {
    console.log(HOST);
    let response =  await fetch(
        `${HOST}/api/v2/user/signup`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                // 'Authorization': `JWT ${ token }`
            },
            data: JSON.stringify({
                name: localStorage.getItem("name"),
                surname: localStorage.getItem("surname"),
                patronymic: localStorage.getItem("patronymic"),
                email: localStorage.getItem("email"),
                mobile_phone: localStorage.getItem("mobile_phone"),
                identity_card_back_file_name: localStorage.getItem("identity_card_back_file_name"),
                identity_card_file_name: localStorage.getItem("identity_card_file_name"),
                user_photo_file_name: localStorage.getItem("user_photo_file_name"),            })
        }
    );
    let text = await response.text();
    console.log("Sign up response", text);
    if (response.status === 200)
        return JSON.parse(text);
    return [];
};
