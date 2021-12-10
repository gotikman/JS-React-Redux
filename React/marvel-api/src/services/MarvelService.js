

class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);           // чекаєм і отримуєм promise дані по запросу

        // Обробка ситуації з помилкою в запросі fetch
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();                // трансформ. в promise JS обєкт для подальшого викор.
    }

    getAllCharacters = () => {
        return this.getResource();
    }
}