import fecth from 'isomorphic-fetch';

export default function  getFacts(){
    return fetch('https://services.sportourism.id/api/cat/all')
        .then(res => res.json())
}