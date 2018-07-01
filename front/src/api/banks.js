import {HOST} from './url';

export const loadBanks = async () => {
    console.log(HOST);
    try {
        let response = await fetch(
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
    } catch (err) {
        console.log("Failed to load, serving default banks list");
        console.log("error data", err);
    }
    return [{value: "Altyn Bank", label: "Altyn Bank"},
        {value: "AsiaCredit Bank", label: "AsiaCredit Bank"},
        {value: "Bank RBK", label: "Bank RBK"},
        {value: "Capital Bank Kazakhstan", label: "Capital Bank Kazakhstan"},
        {value: "Delta Bank", label: "Delta Bank"},
        {value: "EU Банк", label: "EU Банк"},
        {value: "ForteBank", label: "ForteBank"},
        {value: "Kaspi Bank", label: "Kaspi Bank"},
        {value: "Qazaq Banki", label: "Qazaq Banki"},
        {value: "RBS (Kazakhstan)", label: "RBS (Kazakhstan)"},
        {value: "Tengri Bank", label: "Tengri Bank"},
        {value: "Альфа-Банк", label: "Альфа-Банк"},
        {value: "АТФБанк", label: "АТФБанк"},
        {value: "Банк Kassa Nova", label: "Банк Kassa Nova"},
        {value: "Банк Астаны", label: "Банк Астаны"},
        {value: "Банк ВТБ (Казахстан)", label: "Банк ВТБ (Казахстан)"},
        {value: "Банк Китая в Казахстане", label: "Банк Китая в Казахстане"},
        {value: "Банк Хоум Кредит", label: "Банк Хоум Кредит"},
        {value: "Банк ЦентрКредит", label: "Банк ЦентрКредит"},
        {value: "Евразийский банк", label: "Евразийский банк"},
        {value: "Жилстройсбербанк Казахстана", label: "Жилстройсбербанк Казахстана"},
        {value: "Заман-Банк", label: "Заман-Банк"},
        {value: "Исламский Банк Al-Hilal", label: "Исламский Банк Al-Hilal"},
        {value: "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК", label: "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"},
        {value: "Казинвестбанк", label: "Казинвестбанк"},
        {value: "Казкоммерцбанк", label: "Казкоммерцбанк"},
        {value: "Казпочта", label: "Казпочта"},
        {value: "Народный сберегательный банк Казахстана", label: "Народный сберегательный банк Казахстана"},
        {value: "Национальный Банк Пакистана в Казахстане", label: "Национальный Банк Пакистана в Казахстане"},
        {value: "Нурбанк", label: "Нурбанк"},
        {value: "Сбербанк России", label: "Сбербанк России"},
        {value: "Ситибанк Казахстан", label: "Ситибанк Казахстан"},
        {value: "Торгово-промышленный Банк Китая в Алматы", label: "Торгово-промышленный Банк Китая в Алматы"},
        {value: "Цеснабанк", label: "Цеснабанк"},
        {value: "Шинхан Банк Казахстан", label: "Шинхан Банк Казахстан"},
        {value: "Эксимбанк Казахстан", label: "Эксимбанк Казахстан"}];
};
