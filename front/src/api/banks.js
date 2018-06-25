import { HOST } from './url';
export const loadBanks = async () => {
    console.log(HOST);
    let response =  await fetch(
        `${HOST}/api/v2/data/banks`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                // 'Authorization': `JWT ${ token }`
            }
        }
    );
    let text = await response.text();
    if (response.status === 200)
        return JSON.parse(text);
    return [];
};
