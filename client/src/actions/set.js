import { setSets, addSet } from "../store/setReducer";

export function getSets() {
    return async dispatch => {
        try {
            await fetch('http://localhost:5000/api/set/getSets')
                .then(response => response.json())
                .then(json => dispatch(setSets(json)))
        }

        catch (e) {
            console.log(e.response.data.message);
        }
    }
}


export function createSet(data) {
    return async dispatch => {
        try {
            await fetch("http://localhost:5000/api/set/create",
            {
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(json => dispatch(addSet(json.data)))
        }

        catch (e) {
            console.log(e.response.data.message);
        }
    }
}