import fecth from 'isomorphic-fetch';

export default function  getFacts(){
    return fetch('https://srr-react.firebase.com/facts.json')
        .then(res => res.json())
}