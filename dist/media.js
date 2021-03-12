import * as f from 'f';
function media(query) {
    const handlers = { inside() { }, outside() { } };
    const revelation = { in: inside, out: outside };
    const match = () => handlers[matchMedia(query).matches ? 'inside' : 'outside'](undefined);
    function inside(handler) {
        handlers.inside = handler;
        return revelation;
    }
    function outside(handler) {
        handlers.outside = handler;
        return revelation;
    }
    window.addEventListener('resize', f.debounce(match));
    window.setTimeout(match, 0);
    return revelation;
}
export default f.curry(media);
