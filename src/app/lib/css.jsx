export function commonDivClass (background= null, border= true) {
    return `mt-10 ${background ? background : 'bg-white'}  px-10 py-7 rounded-2xl ${border ? 'border border-[#ecdcc6e6]' : ''}`
}