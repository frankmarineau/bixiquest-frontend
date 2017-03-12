export const list = () => fetch(`${__API__}/journeys`).then(r => r.json())
