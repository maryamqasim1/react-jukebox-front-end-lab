const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const create = async (formData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

const update = async (track) => {
    try {
        const res = await fetch(`${BASE_URL}/${track._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(track)
        });
        return res.json();
    }
    catch (error) {
        console.error(error);
    }
}

const deletee = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return res.json();
    }
    catch (error) {
        console.error(error);
    }
}

export default { index, create, update, deletee };