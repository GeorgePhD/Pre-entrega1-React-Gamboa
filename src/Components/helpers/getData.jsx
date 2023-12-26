import data from "../../data/coffee-data.json";

export const getData = () => {
    
    return new Promise ((resolve, reject) => {
        
        if(data.length > 0) {
            setTimeout(() => {
                resolve(data)
            }, 500)
        } else {
            reject('Data not found')
        }
    })
};

export const getItemById = (id) => {

    return new Promise ((res, rej) => {
        
        const item = data.find((el) => el.id === id);

        if(item) {
            res(item)

        } else {
            rej({
                error:'Item not found'
            })
        }
    })

}