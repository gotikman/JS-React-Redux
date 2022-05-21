//!Функція постим дані з форми
const postData = async (url, data) => {
    const res = await fetch(url, {          // чекаєм і отримуєм promise дані по запросу
        method: "POST",
        headers: {
            'Content-type': 'application/json'  // настройки POST
        },
        body: data
    });

    return await res.json();                // трансформ. в promise JS обєкт для подальшого викор.
};

//! fetch \ Функція - отримуєм карточки з сервера бази даних db.json
const getResource = async (url) => {
    let res = await fetch(url);           // чекаєм і отримуєм promise дані по запросу

    // Обробка ситуації з помилкою в запросі fetch
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();                // трансформ. в promise JS обєкт для подальшого викор.
};

export { postData };
export { getResource };