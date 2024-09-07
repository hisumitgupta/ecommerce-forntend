export async function apiFetch() {
            const apiUrl = 'https://fakestoreapi.com/products';
            try{
                const response = await fetch(apiUrl);
                if(!response.ok){
                    throw new Error(`HTTP Error! status:${response.status}`);
                }
                const data = response.json()
                // console.log(data)
                return data
            }catch(error){
                console.error('Error fetchong data:',error)
            }

    // console.log(apiFetchData)
}

export async function productFetch(id) {
    const apiUrl = `https://fakestoreapi.com/products/${id}`;
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP Error! status:${response.status}`);
        }
        const data = response.json()
        // console.log(data)
        return data
    }catch(error){
        console.error('Error fetchong data:',error)
    }

// console.log(apiFetchData)
}