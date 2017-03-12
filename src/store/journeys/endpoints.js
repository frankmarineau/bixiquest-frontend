export const list = () => fetch(`${__API__}/journeys`).then(r => r.json())
export const get = id => fetch(`${__API__}/journeys/${id}`).then(r => r.json())
