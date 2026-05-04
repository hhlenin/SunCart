export default async function fetchData(route) {
    return await fetch(route).then(response => response.json());

}
