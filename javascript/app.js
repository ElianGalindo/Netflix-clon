document.addEventListener('DOMContentLoaded', () => {
    loadData()
})

const loadData = async () => {
    const url = 'https://watchmode.p.rapidapi.com/releases';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8608917c9emsh7f5e6b12a812d15p1f34cbjsnbb86019cb253',
            'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('$$$ result => ',result);
    } catch (error) {
        console.error(error);
    }
}