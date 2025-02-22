import { places } from './where-do-we-go.data.js'

export function explore() {
    const n = places.filter(p => p.coordinates.includes("N"));
    const s = places.filter(p => p.coordinates.includes("S"));
    n.sort((a, b) => b.coordinates.localeCompare(a.coordinates));
    s.sort((a, b) => a.coordinates.localeCompare(b.coordinates));
    const sort = n.concat(s);

    sort.map(p => {
        const section = document.createElement('section');
        const city = p.name.split(',')[0].toLowerCase().replaceAll(' ', '-')
        section.style.background = `url('https://public.01-edu.org/subjects/where-do-we-go/where-do-we-go_images/${city}.jpg')`
        document.body.append(section)
    })

    const where = document.createElement('a');
    where.className = 'location';
    where.textContent = `${sort[0].name}\n${sort[0].coordinates}`;
    where.href = `https://www.google.com/maps/place/${sort[0].coordinates}`;
    where.style.color = sort[0].color;
    document.body.append(where);

    const direction = document.createElement('div');
    direction.className = 'direction';
    document.body.append(direction)
    let prev = 0;
    let current = 0;

    document.addEventListener("scroll", function () {
        current = window.scrollY;
        direction.textContent = current > prev ? "S" : "N";
        let i = Math.round(window.scrollY / window.innerHeight);
        where.href = `https://www.google.com/maps/place/${sort[i].coordinates}`;
        where.target = "_blank"
        where.style.color = sort[i].color
        where.textContent = `${sort[i].name}\n${sort[i].coordinates}`
        prev = current;
    })
}
